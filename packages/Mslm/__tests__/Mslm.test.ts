import Mslm from "../lib/Mslm";

let mslm = new Mslm("");

describe("Mslm", () => {
    test("Mslm Email Verify", async () => {
        let data = await mslm.emailVerify.singleVerify("support@mslm.io");
        console.log(data);
        expect(data.email).toEqual("support@mslm.io");
        expect(data.username).toEqual("support");
        expect(data.domain).toEqual("mslm.io");
        expect(data.malformed).toEqual(false);
        expect(data.suggestion).toEqual("");
        expect(data.status).toEqual("real");
        expect(data.has_mailbox).toEqual(true);
        expect(data.accept_all).toEqual(false);
        expect(data.disposable).toEqual(false);
        expect(data.free).toEqual(false);
        expect(data.mx[0].host).toEqual("ASPMX.L.GOOGLE.COM.");
        expect(data.mx[0].pref).toEqual(1);
        expect(data.mx[1].host).toEqual("ALT2.ASPMX.L.GOOGLE.COM.");
        expect(data.mx[1].pref).toEqual(5);
        expect(data.mx[2].host).toEqual("ALT1.ASPMX.L.GOOGLE.COM.");
        expect(data.mx[2].pref).toEqual(5);
        expect(data.mx[3].host).toEqual("ALT3.ASPMX.L.GOOGLE.COM.");
        expect(data.mx[3].pref).toEqual(10);
        expect(data.mx[4].host).toEqual("ALT4.ASPMX.L.GOOGLE.COM.");
        expect(data.mx[4].pref).toEqual(10);
    });
    test("Mslm Send OTP", async () => {
        let data = await mslm.otp.send("+10000000000", "hi there", 6, 6000);
        expect(data).toBeDefined();
    });
});
