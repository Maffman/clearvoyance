var express = require('express');
var util = require('util');

var app = express();

app.set('port', (process.env.PORT || 3000));

var path = require('path');
app.use('/requirejs/', express.static(path.join(__dirname, 'node_modules/requirejs')));
app.use('/angular', express.static(path.join(__dirname, 'node_modules/angular')));

app.use('/', express.static(path.join(__dirname, 'client')));

app.listen(app.get('port'), function() {
  console.log(util.format('Server started: http://localhost:%s/', app.get('port')));
});