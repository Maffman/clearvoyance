define(function (require, exports, module) {
  "use strict";

  var angular = require('angular');

  var app = angular.module('clearvoyance', []);

  app.controller('HelloWorldController', ['$scope', function($scope) {
    $scope.message = "Hello World!";
  }]);

  module.exports = app.name;
});