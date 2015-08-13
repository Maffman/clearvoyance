"use strict";
var util = require("util"),
    path = require("path");
var express = require("express");

var app = express();

app.set("port", process.env.PORT || 3000);

app.use("/requirejs/", express.static(path.join(__dirname, "node_modules/requirejs")));
app.use("/angular", express.static(path.join(__dirname, "node_modules/angular")));

app.use("/", express.static(path.join(__dirname, "client")));

app.listen(app.get("port"), function logAppStarted() {
  console.log(util.format("Server started: http://localhost:%s/", app.get("port")));
});
