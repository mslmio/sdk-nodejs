/**
 * Interface representing the result of an email verification.
 */
export interface EmailVerificationResult {
    /**
     * The verified email address.
     */
    email: string;

    /**
     * The username portion of the email address.
     */
    username: string;

    /**
     * The domain of the email address.
     */
    domain: string;

    /**
     * Indicates whether the email address is malformed.
     */
    malformed: boolean;

    /**
     * A suggestion for a valid email address if the provided one is malformed.
     */
    suggestion: string;

    /**
     * The status of the email verification.
     */
    status: string;

    /**
     * Indicates whether the email address has a mailbox.
     */
    has_mailbox: boolean;

    /**
     * Indicates whether the email address accepts all incoming emails.
     */
    accept_all: boolean;

    /**
     * Indicates whether the email address is disposable.
     */
    disposable: boolean;

    /**
     * Indicates whether the email address is a free email address.
     */
    free: boolean;

    /**
     * Indicates whether the email address is associated with a role or position.
     */
    role: boolean;

    /**
     * An array of mail exchanges (MX) associated with the domain.
     */
    mx: MailExchange[];
}

/**
 * Interface representing a Mail Exchange (MX) record.
 */
export interface MailExchange {
    /**
     * The host or domain of the mail exchange.
     */
    host: string;

    /**
     * The preference value for the mail exchange.
     */
    pref: number;
}
