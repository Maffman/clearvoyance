(function(global, require) {
  "use strict";

  require.config({
    packages: [
      {
        name: 'angular',
        main: 'angular'
      }
    ],
    shim: {
      'angular/angular': {
        exports: 'angular'
      }
    },
    deps: ['angular', 'app'],
    callback: function (angular, app) {
      angular.bootstrap(global.document, [app]);
    }
  });
}(this, require));