define(function appBuilder(require, exports, module) {
  "use strict";

  var angular = require('angular');
  var app = angular.module('clearvoyance', [
    require('./components/hello-world/hello-world.controller')
  ]);

  module.exports = app.name;
});