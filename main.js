const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1600,
    height: 900,
    minHeight: 800,
    minWidth: 1240,
    webPreferences: {
      contextIsolation: true,
      enableRemoteModule: false,
      nodeIntegration: false,
    },
  });

  Menu.setApplicationMenu(
    Menu.buildFromTemplate([
      {
        label: 'File',
        submenu: [
          {
            label: 'Home',
            click: () => {
              mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
            },
          },
          {
            label: 'Exit',
            click: () => {
              app.quit();
            },
          },
        ],
      },
    ])
  );
  
  mainWindow.loadFile(path.join(__dirname, 'build', 'index.html'));
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
