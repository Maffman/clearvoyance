"use strict";

var path = require("path");
var express = require("express");
var environment = require("../environment.js");

var production = express();

production.get("/angular.js", function serveAngular(request, response) {
  response.sendFile(path.join(environment.moduleDirectory, "angular/angular.js"));
});
production.use(express.static(environment.clientDirectory));

module.exports = production;
