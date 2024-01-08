import EmailVerify from "../lib/EmailVerify";

let emailVerify = new EmailVerify("");

describe("Email Verify", () => {
    test("Email Single Verify", async () => {
        const data = await emailVerify.singleVerify("support@mslm.io");
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
        expect(data.role).toEqual(true);
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

    test("Fake Email Single Verify", async () => {
        const data = await emailVerify.singleVerify("fakefakefake@mslm.io");
        expect(data.email).toEqual("fakefakefake@mslm.io");
        expect(data.username).toEqual("fakefakefake");
        expect(data.domain).toEqual("mslm.io");
        expect(data.malformed).toEqual(false);
        expect(data.suggestion).toEqual("");
        expect(data.status).toEqual("fake");
        expect(data.has_mailbox).toEqual(false);
        expect(data.accept_all).toEqual(false);
        expect(data.disposable).toEqual(false);
        expect(data.free).toEqual(false);
        expect(data.role).toEqual(false);
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

    test("Disposable Email Single Verify", async () => {
        const data = await emailVerify.singleVerify("asdfasdf@temp-mail.org");
        expect(data.email).toEqual("asdfasdf@temp-mail.org");
        expect(data.username).toEqual("asdfasdf");
        expect(data.domain).toEqual("temp-mail.org");
        expect(data.malformed).toEqual(false);
        expect(data.suggestion).toEqual("");
        expect(data.status).toEqual("disposable");
        expect(data.has_mailbox).toEqual(true);
        expect(data.accept_all).toEqual(true);
        expect(data.disposable).toEqual(true);
        expect(data.free).toEqual(true);
        expect(data.role).toEqual(false);
        expect(data.mx[0].host).toEqual("mx.yandex.net.");
        expect(data.mx[0].pref).toEqual(10);
    });

    test("Malformed Email Single Verify", async () => {
        const data = await emailVerify.singleVerify("malformedemail");
        expect(data.email).toEqual("malformedemail");
        expect(data.username).toEqual("");
        expect(data.domain).toEqual("");
        expect(data.malformed).toEqual(true);
        expect(data.suggestion).toEqual("");
        expect(data.status).toEqual("fake");
        expect(data.has_mailbox).toEqual(false);
        expect(data.accept_all).toEqual(false);
        expect(data.disposable).toEqual(false);
        expect(data.free).toEqual(false);
        expect(data.role).toEqual(false);
        expect(data.mx.length).toEqual(0);
    });
});
