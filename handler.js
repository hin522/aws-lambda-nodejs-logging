'use strict';

var logger = require('./auditLogger');

module.exports.hello = (event, context, callback) => {

  let session = logger.init();
  session.run(function() {

    let transactionId = "test-1234";
    logger.identify(transactionId);

    logger.info("Executing Lambda...");
    var helloService = require('./helloService');
    helloService.sayHello();

    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      }),
    };

    callback(null, response);
  });
};
