/**
 * Enum representing endpoints used for OTP operations.
 */
export enum OtpEndpoints {
    otpSend = '/api/otp/v1/send', // Endpoint for sending OTP
    otpVerify = '/api/otp/v1/token_verify', // Endpoint for verifying OTP token
}
