const fs = require('fs');
const path = require('path');

// Create the chunks directory if it doesn't exist
const chunksDir = path.join(__dirname, 'controller-chunks');
if (!fs.existsSync(chunksDir)) {
    fs.mkdirSync(chunksDir, { recursive: true });
}

// Read the original JSON file
const controllerList = JSON.parse(
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
        path.join(chunksDir, fileName),
        JSON.stringify(chunk, null, 2)
    );
}

console.log('Chunks created successfully!');
