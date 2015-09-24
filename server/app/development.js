"use strict";

var path = require("path");
var express = require("express"),
    glob = require("glob");
var environment = require("../environment.js");

var dev = express();

dev.set("view engine", "jade");
dev.locals.pretty = true;
dev.set("views", environment.sourceDirectory);

dev.get("/angular.js", function serveAngular(request, response) {
  response.sendFile(path.join(environment.moduleDirectory, "angular/angular.js"));
});
dev.get("/less.js", function serveAngular(request, response) {
  response.sendFile(path.join(environment.moduleDirectory, "less/dist/less.js"));
});

dev.get(["/", "/index.html"], function(request, response) {
  glob("**/*.js", { cwd: environment.sourceDirectory }, function(error, fileNames) {
    var scripts = ["angular.js"];
    fileNames.forEach(function(fileName) {
      scripts.push(fileName);
    });
    response.render("index", { scripts: scripts, style: "less" });
  });
});

dev.use("/", express.static(environment.sourceDirectory));

module.exports = dev;
