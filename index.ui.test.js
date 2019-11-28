
const webdriver = require('selenium-webdriver');
const binPath = "testBinary-win32-x64\\testBinary.exe";

async function getWebdriver() {
    var driverBuilder = new webdriver.Builder()
    // The "9515" is the port opened by chrome driver.
    .usingServer('http://localhost:9515')
    .withCapabilities({
      chromeOptions: {
        // Here is the path to your Electron binary.
        binary: binPath
      }
    })
    .forBrowser('electron');
    driver = await driverBuilder.build();

    return driver;
}

describe("ui", ()=> {
    var driver;

    afterAll(()=> {
        driver || driver.quit();
    });

    it("starts", async (done)=> {
        driver = await getWebdriver();
        
        done();
    });

    it("drives to google",  async (done) => {
        expect(driver).not.toBeUndefined();
        driver.get('http://www.google.com');
        driver.findElement(webdriver.By.name('q')).sendKeys('webdriver');
        driver.findElement(webdriver.By.name('btnG')).click();
        driver.wait(() => {
          return driver.getTitle().then((title) => {
            return title === 'webdriver - Google Search'
          })
        }, 1000);
        done();
    });
    
});
    

