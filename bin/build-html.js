"use strict";

var fs = require("fs"),
    path = require("path");
var Promise = require("promise"),
    glob = Promise.denodeify(require("glob")),
    jade = require("jade"),
    minify = require("html-minifier").minify;
var minifyConfig = require("./html-minifier.json");

var readFile = Promise.denodeify(fs.readFile).bind(fs);
var writeFile = Promise.denodeify(fs.writeFile).bind(fs);

Promise.all([
  readFile("client/index.jade"),
  glob("**/*.html", { cwd: "client" }).then(function retrieveTemplates(fileNames) {
    return Promise.all(fileNames.map(function(fileName) {
      return readFile(path.join("client", fileName), { encoding: "utf-8" }).then(function(fileContent) {
        return minify(fileContent, minifyConfig);
      }).then(function buildTemplateObject(minifiedTemplate) {
        return {
          path: fileName,
          content: minifiedTemplate
        }
      });
    }));
  })
]).then(function(args) {
  var indexJade = args[0];
  var templates = args[1];
  return jade.render(indexJade, {
    environment: "production",
    templates: templates
  });
}).then(function(indexHtml) {
  return indexHtml;
   return minify(indexHtml, minifyConfig);
}).then(function(minifiedIndex) {
  return writeFile("dist/index.html", minifiedIndex);
}).done();
