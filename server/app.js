"use strict";
var util = require("util"),
    path = require("path");
var express = require("express");
var environment = require("./environment.js");

var app = express();

app.set("port", environment.port);

app.use("/angular.js", function serveAngular(request, response) {
  response.sendFile(path.join(environment.moduleDirectory, "angular/angular.js"));
});

app.use("/", express.static(environment.clientDirectory));

app.listen(app.get("port"), function logAppStarted() {
  console.log(util.format("Server started: http://localhost:%s/", app.get("port")));
});
