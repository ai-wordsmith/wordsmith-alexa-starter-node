const event = require('./invocation.json');
const { handler } = require('../index.js');

// Create a mock of Lambda's context object
const context = {
  succeed: console.log,
  fail: console.error
};

// Call our Lambda function
handler(event, context);
