const fs = require('fs');
const path = require('path');

// Read the swagger schema
const schema = JSON.parse(fs.readFileSync(path.join(__dirname, 'swagger-schema.json'), 'utf8'));

// Create output directory if it doesn't exist
const outputDir = path.join(__dirname, 'parsed-swagger');
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Create a map of controllers to their endpoints
const controllerMap = {};

// Process all paths and their methods
Object.entries(schema.paths).forEach(([path, methods]) => {
    Object.entries(methods).forEach(([method, details]) => {
        if (!details.tags || !details.tags.length) return;
        
        const controller = details.tags[0];
        if (!controllerMap[controller]) {
            controllerMap[controller] = [];
        }

        // Extract parameters
        const parameters = (details.parameters || []).map(param => ({
            name: param.name,
            in: param.in,
            required: param.required,
            type: param.schema?.type,
            description: param.description
        }));

        // Extract request body if it exists
        const requestBody = details.requestBody ? {
            required: details.requestBody.required,
            content: Object.keys(details.requestBody.content || {})
        } : null;

        // Extract responses
        const responses = Object.entries(details.responses || {}).map(([code, response]) => ({
            code,
            description: response.description,
            contentTypes: Object.keys(response.content || {})
        }));

        controllerMap[controller].push({
            path,
            method,
            summary: details.summary || '',
            operationId: details.operationId || '',
            parameters,
            requestBody,
            responses
        });
    });
});

// Write individual controller files
Object.entries(controllerMap).forEach(([controller, endpoints]) => {
    const controllerData = {
        controller,
        endpointCount: endpoints.length,
        endpoints: endpoints.sort((a, b) => a.path.localeCompare(b.path))
    };

    fs.writeFileSync(
        path.join(outputDir, `${controller}.json`),
        JSON.stringify(controllerData, null, 2)
    );
});

// Write a summary file with statistics
const summary = {
    totalControllers: Object.keys(controllerMap).length,
    totalEndpoints: Object.values(controllerMap).reduce((sum, endpoints) => sum + endpoints.length, 0),
    controllers: Object.fromEntries(
        Object.entries(controllerMap).map(([controller, endpoints]) => [
            controller,
            {
                endpointCount: endpoints.length,
                methods: [...new Set(endpoints.map(e => e.method))],
                paths: endpoints.map(e => e.path)
            }
        ])
    )
};

fs.writeFileSync(
    path.join(outputDir, '_summary.json'),
    JSON.stringify(summary, null, 2)
);

// Generate a TypeScript types file for the parsed schema
const tsTypes = `export type Method = 'get' | 'post' | 'put' | 'delete';

export type Parameter = {
    name: string;
    in: 'path' | 'query' | 'header' | 'cookie';
    required: boolean;
    type?: string;
    description?: string;
};

export type Response = {
    code: string;
    description: string;
    contentTypes: string[];
};

export type RequestBody = {
    required: boolean;
    content: string[];
};

export type Endpoint = {
    path: string;
    method: Method;
    summary: string;
    operationId: string;
    parameters: Parameter[];
    requestBody?: RequestBody;
    responses: Response[];
};

export type ControllerData = {
    controller: string;
    endpointCount: number;
    endpoints: Endpoint[];
};
`;

fs.writeFileSync(
    path.join(outputDir, 'types.ts'),
    tsTypes
);

// Print summary
console.log('Swagger schema parsed successfully!');
console.log(`Found ${summary.totalControllers} controllers with ${summary.totalEndpoints} total endpoints`);
console.log(`Results saved in ${outputDir}/`);
