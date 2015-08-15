"use strict";
var gulp = require("gulp"),
    eslint = require("gulp-eslint");

gulp.task("lint-client", function lintClient() {
  return gulp.src(["client/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("lint-server", function lintServer() {
  return gulp.src(["server/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task("lint", ["lint-client", "lint-server"]);
