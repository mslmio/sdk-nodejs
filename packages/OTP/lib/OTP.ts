import VERSION from './version';

const clientUserAgent = `mslm/nodejs/${VERSION}`;

export default class Otp {
    private apiKey: string;

    constructor(apiKey: string = '') {
        this.apiKey = apiKey;
    }

    public async send(phone: string, tmpl_sms: string, token_len: number, expire_seconds: number): Promise<any> {
        const params = JSON.stringify({
            phone,
            tmpl_sms,
            token_len,
            expire_seconds,
        });
        const queryParams = new URLSearchParams({ apikey: this.apiKey });
        const apiUrl = `https://mslm.io/api/otp/v1/send?${queryParams.toString()}`;

        const requestOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': clientUserAgent,
            },
            method: 'POST',
            body: params,
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();

            if (!this.is4xxOr5xx(response.status)) {
                return data;
            } else {
                throw new Error(data);
            }
        } catch (error) {
            throw error;
        }
    }

    public async verify(phone: string, token: string, consume: boolean): Promise<any> {
        const params = JSON.stringify({ phone, token, consume });
        const queryParams = new URLSearchParams({ apikey: this.apiKey });
        const apiUrl = `https://mslm.io/api/otp/v1/token_verify?${queryParams.toString()}`;

        const requestOptions = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'User-Agent': clientUserAgent,
            },
            method: 'POST',
            body: params,
        };

        try {
            const response = await fetch(apiUrl, requestOptions);
            const data = await response.json();

            if (!this.is4xxOr5xx(response.status)) {
                return data;
            } else {
                throw new Error(data);
            }
        } catch (error) {
            throw error;
        }
    }

    private is4xxOr5xx(statusCode: number): boolean {
        return statusCode >= 400 && statusCode < 600;
    }
}
