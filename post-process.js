// scripts/add-blocking-render.js
import fs from 'fs';

const filePath = 'dist/index.html';
let html = fs.readFileSync(filePath, 'utf8');
html = html.replace(
    /<link rel="stylesheet"/,
    '<link rel="stylesheet" blocking="render"'
);
fs.writeFileSync(filePath, html);
console.log('✅ Added blocking="render" to CSS link');
