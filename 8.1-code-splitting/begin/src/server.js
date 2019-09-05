const express = require('express');
const path = require('path');
const fs = require('fs');
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

app.listen(3000, function () {
    console.log('Application is running on http://localhost:3000/');
});