"use strict";

var fs = require("fs");
var Promise = require("promise"),
    glob = Promise.denodeify(require("glob")),
    uglifyJs = require("uglify-js");

var readFile = Promise.denodeify(fs.readFile).bind(fs);
var writeFile = Promise.denodeify(fs.writeFile).bind(fs);

glob("client/**/*.js").then(function(fileNames) {
  var abstractSyntaxTree = null;
  return Promise.all(fileNames.map(function(fileName) {
    return readFile(fileName, { encoding: "utf-8" }).then(function(fileContent) {
      abstractSyntaxTree = uglifyJs.parse(fileContent, {
          filename: fileName,
          toplevel: abstractSyntaxTree
      });
    });
  })).then(function() {
    abstractSyntaxTree.figure_out_scope();
    return abstractSyntaxTree;
  });
}).then(function(abstractSyntaxTree) {
  var compressor = uglifyJs.Compressor();
  var compressedAbstractSyntaxTree = abstractSyntaxTree.transform(compressor);
  compressedAbstractSyntaxTree.figure_out_scope();
  compressedAbstractSyntaxTree.compute_char_frequency();
  compressedAbstractSyntaxTree.mangle_names();
  return compressedAbstractSyntaxTree.print_to_string();
}).then(function(compressedJavascript) {
  writeFile("dist/app.js", compressedJavascript);
}).done();
