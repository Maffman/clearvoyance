var util = require("util");
var environment = require("./environment.js"),
    app = require("./app/main.js");

var server = app.listen(environment.port, function logAppStarted() {
  console.log(util.format("Server started: http://localhost:%s/", environment.port));
});
module.exports = server;
