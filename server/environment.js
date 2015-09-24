/* eslint-disable no-process-env */
"use strict";

var path = require("path");

exports.env = process.env.NODE_ENV || "development";
exports.port = process.env.PORT || 3000;

exports.moduleDirectory = path.resolve(__dirname, "../node_modules");
exports.sourceDirectory = path.resolve(__dirname, "../client");
exports.clientDirectory = path.resolve(__dirname, "../dist");
