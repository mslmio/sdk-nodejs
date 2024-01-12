import OTP from '../lib/OTP';

let otp = new OTP('');

describe('OTP', () => {
    test('Send', async () => {
        try {
            const data = await otp.send('+10000000000', 'hi there', 6, 6000);

            // Add assertions here based on your expectations
            expect(data).toBeDefined();

            console.log(data);
        } catch (error) {
            // Handle errors during the test
            console.error('Test failed:', error);
            throw error; // Re-throw the error to mark the test as failed
        }
    });
    test('Verify', async () => {
        try {
            const data = await otp.verify('+10000000000', '000000', true);

            // Add assertions here based on your expectations
            expect(data).toBeDefined();

            console.log(data);
        } catch (error) {
            // Handle errors during the test
            console.error('Test failed:', error);
            throw error; // Re-throw the error to mark the test as failed
        }
    });
});
