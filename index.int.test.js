const Application = require("spectron").Application;
const binPath = "testBinary-win32-x64\\testBinary.exe";

jest.setTimeout(30000);

async function createApp(app){
    app = new Application({
        path: binPath
    });

    await app.start();
    return app;
}

describe("index.html", ()=> {
    var app;

    it("starts", async (done)=> {
        app = await createApp();
        driver = await getWebdriver();
        console.log(app.running);
        expect(app.running).toBe(true);
        
        done();
    });

    it("is visible", async (done) => {
        expect(app.running).toBe(true);
        expect(app.browserWindow).not.toBeUndefined();
        
        var isVisible = await app.browserWindow.isVisible();
        expect(isVisible).toBe(true);
        done();
    });

    
    it("get title", async (done) => {
        expect(app.running).toBe(true);
        expect(app.client).not.toBeUndefined();

        var title = await app.client.getTitle();
        expect(typeof title).toStrictEqual("string");
        done();
    });

    it("stops", async (done)=> {
        console.log(app.running);
        expect(app.running).toBe(true);
        
        await app.stop();
        done();
    });
});