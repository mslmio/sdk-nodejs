import { EmailVerificationResult } from './EmailVerificationResult';
import ApiLimitError from '@mslm/common/lib/apiLimitError';
import { EmailVerifyRouter } from './EmailVerifyRouter';
import { EmailVerifyEndpoints } from './EmailVerifyEndpoint';
import { HTTPMethod } from '@mslm/common/lib/HTTPMethod';

/**
 * Class for performing email verification using the Mslm API.
 */
export default class EmailVerify {
    private apiKey: string;

    /**
     * Creates an instance of the EmailVerify class.
     * @param apiKey The API key required for authentication with the Mslm API.
     */
    constructor(apiKey: string = '') {
        this.apiKey = apiKey;
    }

    /**
     * Performs a single email verification using the Mslm API.
     * @param email The email address to be verified.
     * @returns A Promise resolving to an EmailVerificationResult.
     */
    public async singleVerify(email: string): Promise<EmailVerificationResult> {
        const requestOptions = EmailVerifyRouter.prepareOptions(
            email,
            HTTPMethod.GET,
            this.apiKey,
            EmailVerifyEndpoints.SINGLE_VERIFY
        );

        try {
            const headersArray: [string, string][] = Object.entries(requestOptions.headers || {})
                .filter(([_, value]) => value !== undefined) // Filter out undefined values
                .map(([key, value]) => [key, value as string]); // Ensure value is of type string

            const requestInit: RequestInit = {
                method: requestOptions.method,
                headers: headersArray,
            };
            // Make the HTTP GET request using fetch
            if (requestOptions.path !== undefined) {
                const response = await fetch(requestOptions.path ?? '', requestInit);
                if (!this.is4xxOr5xx(response.status)) {
                    const emailVerificationResult: EmailVerificationResult = await response.json();
                    return emailVerificationResult;
                } else {
                    // error cases when status code is in 400 range
                    if (response.status === 429) {
                        throw new ApiLimitError();
                    } else {
                        const errorData = await response.text();
                        throw new Error(errorData);
                    }
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
