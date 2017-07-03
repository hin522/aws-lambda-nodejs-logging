'use strict';

var logger = require('./auditLogger');

function sayHello() {
  logger.info("Hello World");
}

module.exports.sayHello = sayHello;