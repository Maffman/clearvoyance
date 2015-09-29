angular.module("cv/app", ["cv/hello-world/route", "ngRoute"]).config(function configLocation($locationProvider) {
  "use strict";
  $locationProvider.html5Mode(true);
});
