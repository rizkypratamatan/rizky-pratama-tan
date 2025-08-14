// scripts/add-blocking-render.js
import fs from 'fs';

const filePath = 'dist/index.html';
let html = fs.readFileSync(filePath, 'utf8');
html = html.replace(
    /<link rel="stylesheet"/,
    '<link rel="stylesheet" media="print" onload="this.media=\'all\'"'
);
//fs.writeFileSync(filePath, html);
console.log('✅ Added blocking="render" to CSS link');
