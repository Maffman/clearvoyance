"use strict";

var fs = require("fs");
var Promise = require("promise"),
    glob = Promise.denodeify(require("glob")),
    ngAnnotate = require("ng-annotate"),
    uglifyJs = require("uglify-js");

var readFile = Promise.denodeify(fs.readFile).bind(fs);
var writeFile = Promise.denodeify(fs.writeFile).bind(fs);

glob("client/**/*.js").then(function(fileNames) {
  var abstractSyntaxTree = uglifyJs.parse("\"use strict\";");
  return Promise.all(fileNames.map(function(fileName) {
    return readFile(fileName, { encoding: "utf-8" }).then(function(fileContent) {
      var annotation = ngAnnotate(fileContent, {
        add: true
      });
      if (annotation.errors) {
        throw new Error(annotation.errors.join());
      } else {
        return annotation.src;
      }
    }).then(function(annotatedFile) {
      abstractSyntaxTree = uglifyJs.parse(annotatedFile, {
          filename: fileName,
          toplevel: abstractSyntaxTree
      });
    });
  })).then(function() {
    var wrappedAbstractSyntaxTree = abstractSyntaxTree.wrap_enclose(["angular:angular"]);
    wrappedAbstractSyntaxTree.figure_out_scope();
    return wrappedAbstractSyntaxTree;
  });
}).then(function(abstractSyntaxTree) {
  var compressor = uglifyJs.Compressor();
  var compressedAbstractSyntaxTree = abstractSyntaxTree.transform(compressor);
  compressedAbstractSyntaxTree.figure_out_scope();
  compressedAbstractSyntaxTree.compute_char_frequency();
  compressedAbstractSyntaxTree.mangle_names();
  return compressedAbstractSyntaxTree.print_to_string();
}).then(function(compressedJavascript) {
  return writeFile("dist/app.js", compressedJavascript);
}).done();
