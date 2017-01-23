# Wordsmith Starter Kit for making Alexa Skills with AWS Lambda (Node JS)
This repo will jump-start you on the code you need to respond to [Amazon Alexa](https://developer.amazon.com/alexa) Skills requests using [AWS Lambda](https://aws.amazon.com/lambda/) functions.

## Getting Started
Pre-requisite: Install and login to the [AWS Command-line Interface (CLI)](https://aws.amazon.com/cli/)

1. Clone this repo.
2. Run `npm install` to install the required Wordsmith Node SDK.
3. Update the package.json scripts to point to your Lambda function and to the location where you've cloned this repo
4. Configure `index.js` to use your Wordsmith API key, project slug, template slug, and data
5. Update the sample Lambda invocation data in `test/invocation.json`. This JSON file simulates what the Alexa service will send you during an `IntentRequest` for your Skill. The most important bit to update is the `request.intent` key with your intent's name and any slot data you need.
6. Run `npm test` to test out your Lambda locally
7. Use `npm run update` to upload your code to your AWS Lambda function
8. Run `npm test` to see the result of calling your actual, cloud-based Lambda function with the invocation data

Once everything is working like you want, you can use the [Alexa developer console](https://developer.amazon.com/alexa) to test out your Alexa Utterances using your new Lambda function.
