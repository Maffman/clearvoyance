"use strict";

var fs = require("fs");
var Promise = require("promise"),
    less = require("less");

var readFile = Promise.denodeify(fs.readFile).bind(fs);
var renderLess = Promise.denodeify(less.render).bind(less);
var writeFile = Promise.denodeify(fs.writeFile).bind(fs);

readFile("client/styles.less", { encoding: "utf-8" }).then(function(lessContent) {
  return renderLess(lessContent, {
    paths: ["./client"],
    filename: "styles.less",
    compress: true
  });
}).then(function(lessOutput) {
  return writeFile("dist/styles.css", lessOutput.css);
}).done();
