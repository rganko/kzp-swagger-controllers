export type Method = 'get' | 'post' | 'put' | 'delete'

export type Trigger = 'onload' | 'action'

export type Endpoint = {
  path: string // '/api/project/rest/cooperation/agreement/${agreementId}/acceptance-protocol/partial/${protocolId}'
  method: Method // 'get'
  swaggerControllerName: string // 'acceptance-protocol-controller'
  trigger: Trigger // 'onload'
  description?: string // development description
}

import * as fs from 'fs';
import * as path from 'path';

function splitControllersIntoChunks(): void {
    // Read the original JSON file
    const controllerList: string[] = JSON.parse(
        fs.readFileSync(path.join(__dirname, 'controller-list.json'), 'utf8')
    );

    // Split array into chunks of 10
    const chunkSize = 10;
    for (let i = 0; i < controllerList.length; i += chunkSize) {
        const chunk = controllerList.slice(i, i + chunkSize);
        const chunkNumber = Math.floor(i / chunkSize) + 1;
        const fileName = `chunk-${String(chunkNumber).padStart(2, '0')}.json`;
        
        // Write chunk to a new file
        fs.writeFileSync(
            path.join(__dirname, 'controller-chunks', fileName),
            JSON.stringify(chunk, null, 2)
        );
    }

    console.log('Chunks created successfully!');
}

splitControllersIntoChunks();