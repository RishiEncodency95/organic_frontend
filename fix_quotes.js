const fs = require('fs');
const path = require('path');

const ROUTES_FILE = path.join(__dirname, 'ihwe', 'routes', 'index.js');
let content = fs.readFileSync(ROUTES_FILE, 'utf8');

// Fix mismatched quotes like require('./seo") -> require('./seo')
content = content.replace(/require\(\['"]([^'"]+)["']\)/g, "require('./$1')");
// wait, the regex to fix it safely:
// if it has require('./seo") or require("./seo')
content = content.replace(/require\(['"](.*?)["']\)/g, "require('$1')");

fs.writeFileSync(ROUTES_FILE, content, 'utf8');
console.log('Fixed quotes in routes/index.js');
