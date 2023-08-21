'use strict';

var fs = require('fs');
var path = require('path');
var theme = require('jsonresume-theme-eloquent');

var resumeJSON = JSON.parse(fs.readFileSync(path.join(__dirname, '/resume.json'), 'utf-8'));
var resumeHTML = theme.render(resumeJSON);

fs.writeFile(path.join(__dirname, '/docs/resume.html'), resumeHTML, function(err) {
    console.log(err || 'Resume exported to resume.html');
});
