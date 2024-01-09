# `EmailVerify`

[![npm version](https://badge.fury.io/js/%40mslm%2Fotp.svg)](https://badge.fury.io/js/%40mslm%2Fotp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/mslmio/sdk-nodejs)](https://github.com/mslmio/sdk-nodejs/issues)

The official MSLM Node.js SDK for handling email verification using the MSLM
API.

## Installation

**npm**

```bash
npm install @mslm/emailverify
```

**yarn**

```bash
yarn add @mslm/emailverify
```

## Usage

**Typescript**

```typescript
import EmailVerify from "@mslm/emailverify";

// Replace 'YOUR_API_KEY' with your actual MSLM API key
const emailVerify = new EmailVerify("YOUR_API_KEY");

// Example: Perform email verification
emailVerify
    .singleVerify("example@email.com")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
```

**Javascript**

```javascript
const EmailVerify = require("@mslm/emailverify");

// Replace 'YOUR_API_KEY' with your actual MSLM API key
const emailVerify = new EmailVerify("YOUR_API_KEY");

// Example: Perform email verification
emailVerify
    .singleVerify("example@email.com")
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });
```

## Running tests

In order to run the tests, run:

    $ npm test
