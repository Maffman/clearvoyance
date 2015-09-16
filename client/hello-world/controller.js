(function defineHelloWorldController() {
  "use strict";

  function HelloWorldController() {
    this.message = "Hello World!";
  }

  angular.module("cv/hello-world/controller", []).controller("HelloWorldController", HelloWorldController);
}());
