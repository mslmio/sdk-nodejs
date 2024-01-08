import { EmailVerificationResult } from "./EmailVerificationResult";
import VERSION from "./version";
import ApiLimitError from "./apiLimitError";

const clientUserAgent = `mslm/nodejs/${VERSION}`;

/**
 * Class for performing email verification using the MSLM API.
 */
export default class EmailVerify {
    private apiKey: string;

    /**
     * Creates an instance of the EmailVerify class.
     * @param apiKey The API key required for authentication with the MSLM API.
     */
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * Performs a single email verification using the MSLM API.
     * @param email The email address to be verified.
     * @returns A Promise resolving to an EmailVerificationResult.
     */
    public async singleVerify(
        email: string
    ): Promise<EmailVerificationResult> {
        // Construct the query parameters
        const queryParams = new URLSearchParams({
            email: email,
            apikey: this.apiKey // Use the stored API key
        });

        // Construct the full URL with query parameters
        const apiUrl = `https://mslm.io/api/sv/v1?${queryParams.toString()}`;

        const requestOptions = {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "User-Agent": clientUserAgent
            },
            method: "GET"
        };

        try {
            // Make the HTTP GET request using fetch
            const response = await fetch(apiUrl, requestOptions);

            if (!this.is4xxOr5xx(response.status)) {
                const emailVerificationResult: EmailVerificationResult =
                    await response.json();
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
