import * as http from 'http';
import { OtpEndpoints } from './OtpEndpoints';
import { HTTPMethod } from '@mslm/common/lib/HTTPMethod';
import { Constants } from '@mslm/common/lib/Constants';

/**
 * Namespace containing functions for constructing HTTP request options for OTP operations.
 */
export namespace OtpRouter {
    // MARK: Public

    /**
     * Constructs and returns a HTTP request options object based on the router type.
     * @param method The HTTP method to be used.
     * @param API_KEY The API key required for authentication.
     * @param endPoint The endpoint for the OTP operation.
     * @returns The HTTP request options object.
     */
    export function prepareOptions(method: HTTPMethod, API_KEY: string, endPoint: OtpEndpoints): http.RequestOptions {
        const options: http.RequestOptions = {
            method,
            headers: {
                'User-Agent': Constants.USER_AGENT,
                'Content-Type': Constants.CONTENT_TYPE,
            },
        };

        configureURLParameters(options, API_KEY, endPoint);

        return options;
    }

    // MARK: Private
    const baseURL = Constants.SERVER_URL;

    /**
     * Configures URL parameters for the OTP operation request.
     * @param options The HTTP request options object to be configured.
     * @param API_KEY The API key required for authentication.
     * @param endPoint The endpoint for the OTP operation.
     */
    function configureURLParameters(options: http.RequestOptions, API_KEY: string, endPoint: OtpEndpoints) {
        switch (endPoint) {
            case OtpEndpoints.otpSend:
                configureOTPSendParameters(options, API_KEY);
                break;
            case OtpEndpoints.otpVerify:
                configureOTPVerifyParameters(options, API_KEY);
                break;
            default:
                break;
        }
    }

    /**
     * Configures URL parameters for the OTP Send operation request.
     * @param options The HTTP request options object to be configured.
     * @param API_KEY The API key required for authentication.
     */
    function configureOTPSendParameters(options: http.RequestOptions, API_KEY: string) {
        const url = baseURL + OtpEndpoints.otpSend + `?&apikey=${encodeURIComponent(API_KEY)}`;
        options.path = url;
    }

    /**
     * Configures URL parameters for the OTP Verify operation request.
     * @param options The HTTP request options object to be configured.
     * @param API_KEY The API key required for authentication.
     */
    function configureOTPVerifyParameters(options: http.RequestOptions, API_KEY: string) {
        const url = baseURL + OtpEndpoints.otpVerify + `?&apikey=${encodeURIComponent(API_KEY)}`;
        options.path = url;
    }
}
