const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;
const path = require('path')
const url = require('url');

let win;

const IMAGE_DIR = './images/';
const ICONS_DIR = './images/icons/';
const APP_DIR = './app/';


function createWindow() {
    win = new BrowserWindow({
        width: 1000,
        height: 600,
        icon: path.join(__dirname, ICONS_DIR, 'LOGU (2).png'),
        transparent: true,
        frame: false
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, APP_DIR, 'index.html'),
        protocol: 'file',
        slashes: true
    }))
}

app.on('ready', createWindow)

app.on("window-all-closed", () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
})