define(function appBuilder(require, exports, module) {
  "use strict";

  const angular = require("angular");
  const app = angular.module("clearvoyance", [
    require("./components/hello-world/hello-world.controller")
  ]);

  module.exports = app.name;
});
