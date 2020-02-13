const express = require('express');
const path = require('path');
const fs = require('fs');
const https = require('https');
const expressStaticGzip = require('express-static-gzip');
const app = express();

app.get('/', function (req, res) {
    const absolutePathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentsOfHtmlFile = fs.readFileSync(absolutePathToHtmlFile, 'utf-8');
    res.send(contentsOfHtmlFile);
});

app.use('/static', expressStaticGzip(
    path.resolve(__dirname, '../dist'), {
        enableBrotli: true,
        orderPreference: ['br', 'gz']
    }
));

https.createServer({
    key: fs.readFileSync(path.resolve(__dirname, '../certificates/server.key')),
    cert: fs.readFileSync(path.resolve(__dirname, '../certificates/server.cert'))
}, app)
.listen(3000, function () {
    console.log('Application is running on https://localhost:3000/')
})