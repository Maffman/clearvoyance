(function configBuilder(require, document) {
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
    callback: function bootstrapApp(angular, app) {
      angular.bootstrap(document, [app]);
    }
  });
}(require, document));