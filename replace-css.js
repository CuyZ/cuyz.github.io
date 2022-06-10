const fs = require("fs");
const manifest = require('./public/mix-manifest.json');

let indexHtml = fs.readFileSync('./docs/index.html', 'utf8');

indexHtml = indexHtml.replace('/app.css', manifest['/app.css']);

fs.writeFileSync('./docs/index.html', indexHtml);
