export type Method = 'get' | 'post' | 'put' | 'delete';

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
