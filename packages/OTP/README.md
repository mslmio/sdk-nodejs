# `Otp`

[![npm version](https://badge.fury.io/js/%40mslm%2Fotp.svg)](https://badge.fury.io/js/%40mslm%2Fotp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/mslmio/sdk-nodejs)](https://github.com/mslmio/sdk-nodejs/issues)

The official Mslm Node.js SDK for handling One-Time Password (Otp) functionality.

## Installation

**npm**

```bash
npm install @mslm/otp
```

**yarn**

```bash
yarn add @mslm/otp
```

## Usage

**TypeScript**

```typescript
import Otp from '@mslm/otp';

// Replace 'YOUR_API_KEY' with your actual Mslm API key
const otp = new Otp('YOUR_API_KEY');

// Example: Send Otp to a phone number
otp.send('+1234567890', 'sms_template', 6, 300)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });

// Example: Verify Otp
otp.verify('+1234567890', '123456', true)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```

**JavaScript**

```javascript
const Otp = require('@mslm/otp');

// Replace 'YOUR_API_KEY' with your actual Mslm API key
const otp = new Otp('YOUR_API_KEY');

// Example: Send Otp to a phone number
otp.send('+1234567890', 'sms_template', 6, 300)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });

// Example: Verify Otp
otp.verify('+1234567890', '123456', true)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```
