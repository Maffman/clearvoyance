"use strict";

var path = require("path");
var express = require("express"),
    glob = require("glob");
var environment = require("../environment.js");

var dev = express();

dev.set("view engine", "jade");
dev.locals.pretty = true;
dev.locals.environment = "development";
dev.set("views", environment.sourceDirectory);

dev.get("/angular.js", function(request, response) {
  response.sendFile(path.join(environment.moduleDirectory, "angular/angular.js"));
});
dev.get("/less.js", function(request, response) {
  response.sendFile(path.join(environment.moduleDirectory, "less/dist/less.js"));
});

dev.get(["/", "/index.html"], function(request, response) {
  glob("**/*.js", { cwd: "client" }, function(error, javascriptFiles) {
    if (error) {
      response.send(500, error);
    } else {
      response.render("index", { scripts: javascriptFiles });
    }
  });
});

dev.use("/", express.static(environment.sourceDirectory));

module.exports = dev;
