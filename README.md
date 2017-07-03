## aws-lambda-nodejs-logging
Simple AWS Node.js Lambda to demonstrate Java-like Mapped Diagnostic Context (MDC) for logging contextual information.

Using NPM package [continuation-local-storage](https://www.npmjs.com/package/continuation-local-storage), stored values are accessible until all functions called from the original function.

#### Test the lambda (locally)
`npm install -g serverless`

`serverless invoke local --function hello`

Result:
```
[INFO] >> Initialising AuditLogger
>> Setting transactionId to test-1234
[INFO] [test-1234] Executing Lambda...
[INFO] [test-1234] Hello World
{
    "statusCode": 200,
    "body": "{\"message\":\"Go Serverless v1.0! Your function executed successfully!\",\"input\":\"\"}"
}
```
