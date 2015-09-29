angular.module("cv/hello-world/route", ["cv/hello-world/controller", "ngRoute"]).config(function configureHelloWorldRoute($routeProvider) {
  "use strict";
  $routeProvider.when("/", {
    templateUrl: "hello-world/view.html",
    controller: "HelloWorldController as helloWorldController"
  });
});
