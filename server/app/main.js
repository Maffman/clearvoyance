"use strict";
var util = require("util");
var environment = require("../environment.js");

module.exports = require(util.format("./%s.js", environment.env));
