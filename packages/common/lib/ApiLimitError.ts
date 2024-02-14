/** Error class for the case when API per month limit is exceeded. */
export default class ApiLimitError extends Error {
    constructor() {
        super('You have exceeded your request limit. Please visit https://mslm.io/app/');
        Object.setPrototypeOf(this, ApiLimitError.prototype);
    }
}
