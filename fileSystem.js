const fs = require('fs');

const fileData = fs.readFileSync('index.html');

console.log('file', fileData.toString());