/**
 * Mslm class for handling email verification and Otp (One-Time Password) functionality.
 */
import EmailVerify from '@mslm/email_verify';
import Otp from '@mslm/otp';

export default class Mslm {
    /**
     * Instance of the EmailVerify class for handling email verification.
     */
    public emailVerify: EmailVerify;

    /**
     * Instance of the Otp class for handling One-Time Password functionality.
     */
    public otp: Otp;

    /**
     * Constructs an instance of the Mslm class with the provided API key.
     * @param apiKey - The API key used for authentication in both EmailVerify and Otp instances.
     */
    constructor(apiKey: string = '') {
        this.emailVerify = new EmailVerify(apiKey);
        this.otp = new Otp(apiKey);
    }
}
