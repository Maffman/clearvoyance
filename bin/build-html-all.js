"use strict";

var fs = require("fs"),
    path = require("path");
var Promise = require("promise"),
    glob = Promise.denodeify(require("glob")),
    mkdirp = Promise.denodeify(require("mkdirp")),
    minify = require("html-minifier").minify;
var minifyConfig = require("./html-minifier.json");

var readFile = Promise.denodeify(fs.readFile).bind(fs);
var writeFile = Promise.denodeify(fs.writeFile).bind(fs);

glob("**/*.html", { cwd: "client" }).then(function(fileNames) {
  return Promise.all(fileNames.map(function(fileName) {
    return Promise.all([
      readFile(path.join("client", fileName), { encoding: "utf-8" }).then(function(fileContent) {
        return minify(fileContent, minifyConfig);
      }),
      mkdirp(path.join("dist", path.dirname(fileName)))
    ]).then(function(args) {
      var minifiedContent = args[0];
      return writeFile(path.join("dist", fileName), minifiedContent);
    });
  }));
}).done();
