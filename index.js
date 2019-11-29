const {app, BrowserWindow} = require("electron");
const getMenu = require("./menu/Menu");
let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadFile("index.html");
    
    getMenu();

    win.on("closed", ()=> {
        // window 객체에 대한 참조해제. 여러 개의 창을 지원하는 앱이라면 
        // 창을 배열에 저장할 수 있습니다. 이곳은 관련 요소를 삭제하기에 좋은 장소입니다.
        win = null;
    });
}

/*
Event Declarations
*/
app.on("ready", createWindow);

app.on("window-all-closed", ()=> {
    // macOS에서는 사용자가 명확하게 Cmd + Q를 누르기 전까지는
    // 애플리케이션이나 메뉴 바가 활성화된 상태로 머물러 있는 것이 일반적입니다.
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", ()=> {
    if (win == null) {
        createWindow();
    }
});