"use strict";

var fs = require("fs");
var Promise = require("promise"),
    jade = require("jade"),
    minify = require("html-minifier").minify;
var minifyConfig = require("./html-minifier.json");

var readFile = Promise.denodeify(fs.readFile).bind(fs);
var writeFile = Promise.denodeify(fs.writeFile).bind(fs);

readFile("client/index.jade").then(function(indexJade) {
  return jade.render(indexJade, {
    environment: "production",
    templates: []
  });
}).then(function(indexHtml) {
   return minify(indexHtml, minifyConfig);
}).then(function(minifiedIndex) {
  return writeFile("dist/index.html", minifiedIndex);
}).done();
