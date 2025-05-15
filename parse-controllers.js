const fs = require('fs');
const path = require('path');

// Read the swagger schema
const schema = JSON.parse(fs.readFileSync('swagger-schema.json', 'utf8'));

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

        controllerMap[controller].push({
            path,
            method,
            summary: details.summary || '',
            operationId: details.operationId || ''
        });
    });
});

// Write results to files, one per controller
if (!fs.existsSync('controller-mappings')) {
    fs.mkdirSync('controller-mappings');
}

Object.entries(controllerMap).forEach(([controller, endpoints]) => {
    fs.writeFileSync(
        path.join('controller-mappings', `${controller}.json`),
        JSON.stringify({ endpoints }, null, 2)
    );
});

// Write a summary file
fs.writeFileSync(
    'controller-mappings-summary.json',
    JSON.stringify(
        Object.fromEntries(
            Object.entries(controllerMap).map(
                ([controller, endpoints]) => [controller, endpoints.length]
            )
        ),
        null, 2
    )
);
