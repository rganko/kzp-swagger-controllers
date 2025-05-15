const fs = require('fs');
const path = require('path');

// Read the swagger schema
const schema = JSON.parse(fs.readFileSync('swagger-schema.json', 'utf8'));

// Read the current chunk
const chunk = JSON.parse(fs.readFileSync('controller-chunks/chunk-01.json', 'utf8'));

// Create a map of controllers to their endpoints for this chunk only
const controllerMap = {};

// Process all paths and their methods
Object.entries(schema.paths).forEach(([path, methods]) => {
    Object.entries(methods).forEach(([method, details]) => {
        if (!details.tags || !details.tags.length) return;
        
        const controller = details.tags[0];
        // Only process controllers from current chunk
        if (!chunk.includes(controller)) return;

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

// Write results to a mapping file for this chunk
fs.writeFileSync(
    'chunk-01-mapping.json',
    JSON.stringify(controllerMap, null, 2)
);
