# Mslm NodeJS SDK

[![npm version](https://badge.fury.io/js/%40mslm%2Fotp.svg)](https://badge.fury.io/js/%40mslm%2Fotp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/mslmio/sdk-nodejs)](https://github.com/mslmio/sdk-nodejs/issues)
[![GitHub stars](https://img.shields.io/github/stars/mslmio/sdk-nodejs)](https://github.com/mslmio/sdk-nodejs/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/mslmio/sdk-nodejs)](https://github.com/mslmio/sdk-nodejs/network)

The official NodeJS SDK for Mslm APIs.

**Works with ES5, ES6+ and TypeScript.**

## Installation

**npm**

```bash
npm install mslm
```

**yarn**

```bash
yarn add mslm
```

## Usage

**Typescript**

```typescript
import Mslm from "mslm";

// Replace 'YOUR_API_KEY' with your actual MSLM API key
const mslm = new Mslm("YOUR_API_KEY");

// Example: Perform email verification
mslm.emailVerify
    .singleVerify("example@email.com")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Example: Send OTP to a phone number
mslm.otp
    .send("1234567890", "sms_template", 6, 300)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```

**Javascript**

```javascript
const Mslm = require("mslm");

// Replace 'YOUR_API_KEY' with your actual MSLM API key
const mslm = new Mslm("YOUR_API_KEY");

// Example: Perform email verification
mslm.emailVerify
    .singleVerify("example@email.com")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Example: Send OTP to a phone number
mslm.otp
    .send("1234567890", "sms_template", 6, 300)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```

## Running tests

In order to run the tests, run:

    $ npm test

## Other Libraries

There are official Mslm client libraries available for many languages including
Go, Java, Swift etc.

## About Mslm

mslm focuses on producing world-class business solutions. It’s the
bread-and-butter of our business to prioritize quality on everything we touch.
Excellence is a core value that defines our culture from top to bottom.

[![image](https://avatars.githubusercontent.com/u/50307970?s=200&v=4)](https://mslm.io/)
