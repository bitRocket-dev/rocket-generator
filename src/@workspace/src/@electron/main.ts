/** @format */

import electron from 'electron';
import isDev from 'electron-is-dev';
import path from 'path';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow: any;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680 });
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on('closed', () => (mainWindow = null));
  isDev && mainWindow.webContents.openDevTools();
  const ses = mainWindow.webContents.session;
  ses.loadExtension(path.join(__dirname, '../electron/extensions/react-devtool'));
  ses.loadExtension(path.join(__dirname, '../electron/extensions/redux-devtool'));
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
