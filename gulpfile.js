"use strict";
var gulp = require("gulp"),
    eslint = require("gulp-eslint");

gulp.task("lint-client", function lintClient() {
  return gulp.src(["client/**/*.js"])
    .pipe(eslint({
      globals: [
        "define",
        "require"
      ],
      envs: [
        "browser",
        "es6"
      ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("lint-server", function lintServer() {
  return gulp.src(["**/*.js", "!client/**", "!node_modules/**"])
    .pipe(eslint({
      envs: [
        "node"
      ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("lint", ["lint-client", "lint-server"]);
