import * as http from 'http';
import { EmailVerifyEndpoints } from './EmailVerifyEndpoint';
import { HTTPMethod } from '@mslm/common/lib/HTTPMethod';
import { Constants } from '@mslm/common/lib/Constants';

/**
 * Namespace containing functions for constructing HTTP request options for email verification.
 */
export namespace EmailVerifyRouter {
    // MARK: Public

    /**
     * Constructs and returns a HTTP request options object based on the router type.
     * @param email The email address to be verified.
     * @param method The HTTP method to be used.
     * @param API_KEY The API key required for authentication.
     * @param endPoint The endpoint for the email verification API.
     * @returns The HTTP request options object.
     */
    export function prepareOptions(
        email: string,
        method: HTTPMethod,
        API_KEY: string,
        endPoint: EmailVerifyEndpoints
    ): http.RequestOptions {
        const options: http.RequestOptions = {
            method,
            headers: {
                'User-Agent': Constants.USER_AGENT,
                'Content-Type': Constants.CONTENT_TYPE,
            },
        };

        configureURLParameters(options, email, API_KEY, endPoint);

        return options;
    }

    // MARK: Private
    const baseURL = Constants.SERVER_URL;

    /**
     * Configures URL parameters for the email verification request.
     * @param options The HTTP request options object to be configured.
     * @param email The email address to be verified.
     * @param API_KEY The API key required for authentication.
     * @param endPoint The endpoint for the email verification API.
     */
    function configureURLParameters(
        options: http.RequestOptions,
        email: string,
        API_KEY: string,
        endPoint: EmailVerifyEndpoints
    ) {
        const url = baseURL + endPoint + `?email=${encodeURIComponent(email)}&apikey=${encodeURIComponent(API_KEY)}`;
        options.path = url;
    }
}
