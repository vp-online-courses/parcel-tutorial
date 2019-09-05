const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

app.get('/', function (req, res) {
    const absolutePathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentsOfHtmlFile = fs.readFileSync(absolutePathToHtmlFile, 'utf-8');
    res.send(contentsOfHtmlFile);
});

app.listen(3000, function () {
    console.log('Application is running on http://localhost:3000/');
});