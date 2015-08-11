define(function helloWorldControllerBuilder(require, exports, module) {
  "use strict";

  var angular = require('angular');
  var helloWorldController = angular.module('cv.helloWorld.controller', []);

  function HelloWorldController($scope) {
    $scope.message = "Hello World!";
  }
  helloWorldController.$inject = ['$scope'];

  helloWorldController.controller("HelloWorldController", HelloWorldController);

  module.exports = helloWorldController.name;
});