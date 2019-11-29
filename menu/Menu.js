const {app, Menu} = require("electron");

const template = [
    //File
    {
        label: "File",
        submenu: [{
            role: "quit"
        }]
    },
    {
        label: "Edit",
        submenu: [
            { role: 'undo' },
            { role: 'redo' },
            { type: 'separator' },
            { role: 'cut' },
            { role: 'copy' },
            { role: 'paste' },
            { role: 'delete' },
            { type: 'separator' },
            { role: 'selectAll' },
        ]
    }
];

const menu = Menu.buildFromTemplate(template);

function getMenu() {
    Menu.setApplicationMenu(menu);
}

module.exports = getMenu;