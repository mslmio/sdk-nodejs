import { OtpEndpoints } from './OtpEndpoints';
import { OtpRouter } from './OtpRouter';
import { HTTPMethod } from '@mslm/common/lib/HTTPMethod';

/**
 * Class for interacting with the OTP API to send and verify OTPs.
 */
export default class Otp {
    private apiKey: string;

    /**
     * Creates an instance of the Otp class.
     * @param apiKey The API key required for authentication with the OTP API.
     */
    constructor(apiKey: string = '') {
        this.apiKey = apiKey;
    }

    /**
     * Sends an OTP to the specified phone number.
     * @param phone The phone number to which the OTP will be sent.
     * @param tmpl_sms The template for the SMS containing the OTP.
     * @param token_len The length of the OTP.
     * @param expire_seconds The expiration time for the OTP in seconds.
     * @returns A Promise resolving to the API response.
     */
    public async send(phone: string, tmpl_sms: string, token_len: number, expire_seconds: number): Promise<any> {
        const params = JSON.stringify({
            phone,
            tmpl_sms,
            token_len,
            expire_seconds,
        });

        const requestOptions = OtpRouter.prepareOptions(HTTPMethod.POST, this.apiKey, OtpEndpoints.otpSend);

        const headersArray: [string, string][] = Object.entries(requestOptions.headers || {})
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [key, value as string]);

        const requestInit: RequestInit = {
            method: requestOptions.method,
            headers: headersArray,
            body: params,
        };
        try {
            if (requestOptions.path !== undefined) {
                const response = await fetch(requestOptions.path ?? '', requestInit);
                const data = await response.json();

                if (!this.is4xxOr5xx(response.status)) {
                    return data;
                } else {
                    throw new Error(data);
                }
            } else {
                throw new Error('Error: requestOptions.path is undefined');
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Verifies the OTP for the specified phone number.
     * @param phone The phone number for which the OTP is to be verified.
     * @param token The OTP to be verified.
     * @param consume A boolean indicating whether to consume the OTP upon verification.
     * @returns A Promise resolving to the API response.
     */
    public async verify(phone: string, token: string, consume: boolean): Promise<any> {
        const params = JSON.stringify({ phone, token, consume });

        const requestOptions = OtpRouter.prepareOptions(HTTPMethod.POST, this.apiKey, OtpEndpoints.otpVerify);
        const headersArray: [string, string][] = Object.entries(requestOptions.headers || {})
            .filter(([_, value]) => value !== undefined)
            .map(([key, value]) => [key, value as string]);
        const requestInit: RequestInit = {
            method: requestOptions.method,
            headers: headersArray,
            body: params,
        };
        try {
            if (requestOptions.path !== undefined) {
                const response = await fetch(requestOptions.path ?? '', requestInit);
                const data = await response.json();

                if (!this.is4xxOr5xx(response.status)) {
                    return data;
                } else {
                    throw new Error(data);
                }
            } else {
                throw new Error('Error: requestOptions.path is undefined');
            }
        } catch (error) {
            throw error;
        }
    }

    /**
     * Checks if the status code is in the 4xx or 5xx range.
     * @param statusCode The HTTP status code to be checked.
     * @returns A boolean indicating whether the status code is in the 4xx or 5xx range.
     */
    private is4xxOr5xx(statusCode: number): boolean {
        return statusCode >= 400 && statusCode < 600;
    }
}
