import VERSION from './version';

/**
 * Enum representing constants used in the application.
 */
export enum Constants {
    USER_AGENT = `mslm/nodejs/${VERSION}`, // User agent for API requests
    SERVER_URL = 'https://mslm.io', // Base URL for API requests
    CONTENT_TYPE = 'application/json', // Content type for API requests
}
