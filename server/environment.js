/* eslint-disable no-process-env */
"use strict";

var path = require("path");

exports.port = process.env.PORT || 3000;

exports.moduleDirectory = path.resolve(__dirname, "../node_modules");
exports.clientDirectory = path.resolve(__dirname, "../dist");
