//const remote = require('electron');

class SiteMap {
    
    static mainPage() {        
        //remote.getCurrentWindow().loadFile("index.html");
        location.href = "index.html";
    }
    
    static chartPage() {
        //remote.getCurrentWindow().loadFile("page/chartPage.html");
        location.href = "page/chartPage.html";
    }
}

module.exports = SiteMap;