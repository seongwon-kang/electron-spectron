const webdriver = require('selenium-webdriver')
const binPath = "testBinary-win32-x64\\testBinary.exe";

const main = () => {
    console.log('"TTI", "DCL", "Complete"')
    new webdriver.Builder()
      
        .usingServer('http://localhost:9515')
        .withCapabilities({
        chromeOptions: {
            // Here is the path to your Electron binary.
            binary: binPath
        }
        })
        .forBrowser('chrome')
      .build()
      .then(driver =>
        driver
          .get('http://www.google.com/ncr')
          .then(_ => {
            const t = driver
              .executeScript('return window.performance.timing.domInteractive')
              .then(result => {
                console.log(result);
                driver.quit();
              }, err => console.error(`We have an ${err}`))
          })
          .catch(err => console.error(err))
      )
  }
  
main();