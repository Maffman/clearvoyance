"use strict";
var gulp = require('gulp'),
  eslint = require('gulp-eslint');

var WARNING = 1, ERROR = 2;

gulp.task('lint-client', function () {
  return gulp.src(['client/**/*.js'])
    .pipe(eslint({
      rules: {
        // possible errors
        'comma-dangle': ERROR,
        'no-cond-assign': ERROR,
        'no-console': WARNING,
        'no-constant-condition': ERROR,
        'no-control-regex': ERROR,
        'no-debugger': WARNING,
        'no-dupe-args': ERROR,
        'no-dupe-keys': ERROR,
        'no-duplicate-case': ERROR,
        'no-empty-character-class': ERROR,
        'no-empty': ERROR,
        'no-ex-assign': ERROR,
        'no-extra-boolean-cast': ERROR,
        'no-extra-parens': ERROR,
        'no-extra-semi': ERROR,
        'no-func-assign': ERROR,
        'no-inner-declarations': [ERROR, 'both'],
        'no-invalid-regexp': ERROR,
        'no-irregular-whitespace': ERROR,
        'no-negated-in-lhs': ERROR,
        'no-obj-calls': ERROR,
        'no-regex-spaces': ERROR,
        'no-sparse-arrays': ERROR,
        'no-unreachable': WARNING,
        'use-isnan': ERROR,
        //'valid-jsdoc': ERROR, not using jsdoc (yet)
        'valid-typeof': ERROR,
        'no-unexpected-multiline': ERROR,
        // best practices
        'accessor-pairs': ERROR,
        //'block-scoped-bar': ERROR,
        //'complexity': unable to determine complexity atm
        'consistent-return': ERROR,
        'curly': ERROR,
        'default-case': ERROR,
        'dot-notation': ERROR,
        'dot-location': [ERROR, 'property'],
        'eqeqeq': ERROR,
        'guard-for-in': ERROR, // would like to avoid for-in's altogether
        'no-alert': WARNING,
        'no-caller': ERROR,
        //'no-div-regex':
        //'no-else-return':
        //'no-empty-label':
        //'no-eq-null': ERROR, redundant by eqeqeq
        'no-eval': ERROR,
        'no-extend-native': ERROR,
        'no-extra-bind': ERROR,
        'no-fallthrough': ERROR,
        'no-floating-decimal': ERROR,
        'no-implicit-coercion': ERROR,
        'no-implied-eval': ERROR,
        'no-invalid-this': ERROR,
        'no-iterator': ERROR,
        'no-labels': ERROR,
        'no-lone-blocks': ERROR,
        'no-loop-func': ERROR,
        'no-multi-spaces': ERROR,
        'no-multi-str': ERROR,
        'no-native-reassign': ERROR,
        'no-new-func': ERROR,
        'no-new-wrappers': ERROR,
        'no-new': ERROR,
        'no-octal-escape': ERROR,
        'no-octal': ERROR,
        'no-param-reassign': ERROR,
        'no-process-env': ERROR, // TODO: disable in config module
        'no-proto': ERROR,
        'no-redeclare': ERROR,
        'no-return-assign': ERROR,
        'no-script-url': ERROR,
        'no-self-compare': ERROR,
        'no-sequences': ERROR,
        'no-throw-literal': WARNING,
        'no-unused-expressions': ERROR,
        'no-useless-call': ERROR,
        'no-void': ERROR,
        'no-warning-comments': WARNING,
        'no-with': ERROR,
        'radix': ERROR,
        'vars-on-top': ERROR,
        'wrap-iife': ERROR,
        'yoda': ERROR
        // strict mode
        // variables
        // node
        // stylistic
        // es6
      },
      globals: [
        'define',
        'require'
      ],
      envs: [
        'browser'
      ]
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('lint-server', function () {
  return gulp.src(['**/*.js', '!client/**', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('lint', ['lint-client', 'lint-server']);