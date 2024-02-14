# Mslm Node.js SDK

The official Node.js SDK for Mslm APIs.

## Requirements

Ensure you meet the following requirements before running the project:

1. **Node.js**: The provided code is written in TypeScript and relies on Node.js for execution.

    - [Node.js Download](https://nodejs.org/)

2. **Package Manager (npm or Yarn)**: The code relies on package management to install and manage dependencies. npm is
   included with Node.js, and Yarn is an alternative package manager.

    - [npm](https://www.npmjs.com/get-npm)
    - [Yarn](https://yarnpkg.com/getting-started/install)

3. **API Keys**: For some functionalities, such as email verification and OTP, API keys are needed. Ensure you have the
   required API keys and configure them properly.

## Authentication

Mslm's APIs require an API key. If you don't have one, please read
[Authentication](https://mslm.io/docs/api/authentication) to understand how to get an API key before continuing.

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Configure your API keys in the configuration files.

## Usage

**TypeScript**

```typescript
import Mslm from 'mslm';

// Replace 'YOUR_API_KEY' with your actual Mslm API key
const mslm = new Mslm('YOUR_API_KEY');

// Example: Perform email verification
mslm.emailVerify
    .singleVerify('example@email.com')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Example: Send Otp to a phone number
mslm.otp
    .send('1234567890', 'sms_template', 6, 300)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```

**JavaScript**

```javascript
const Mslm = require('mslm');

// Replace 'YOUR_API_KEY' with your actual Mslm API key
const mslm = new Mslm('YOUR_API_KEY');

// Example: Perform email verification
mslm.emailVerify
    .singleVerify('example@email.com')
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });

// Example: Send Otp to a phone number
mslm.otp
    .send('+1234567890', 'sms_template', 6, 300)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error(error);
    });
```

## Additional Resources

See the official [API Reference Documentation](https://mslm.io/docs/api) for details on each API's actual interface,
which is implemented by this SDK.

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for more information.

## Security

See [Security Issue Notifications](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This project is licensed under the [MIT License](LICENSE).

## About Mslm

At Mslm, we're all about making things better. Where others see norm, we see
opportunity.

We build world-class solutions to the toughest problems. Excellence is a core
value that defines our approach from top to bottom.

We're all about creating positive value for ourselves, our partners and our
societies.

We do it by focusing on quality and the long-term, while intelligently
maneuvering the complex realities of day-to-day business.

Our partners share our perspective, and we jointly produce truly world-class
solutions to the toughest problems.

[![image](https://avatars.githubusercontent.com/u/50307970?s=200&v=4)](https://mslm.io/)
