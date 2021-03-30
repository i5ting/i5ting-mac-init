// Modules to control application life and create native browser window
const {app, BrowserWindow,ipcMain,ipcRenderer} = require('electron')
const path = require('path')
const url = require('url')
const processMessage = require('./processMessage')
const {is} = require('electron-util');
const tray = require('./tray')

const shell = require('shelljs');
const nodePath = (shell.which('node').toString());
shell.config.execPath = nodePath;
console.log(is.macos && is.main);

require('fix-path')();

ipcMain.handle('my-invokable-ipc', async (event, ...args) => {
  const result = await shell.exec('git').code
  return result
})

ipcMain.handle('perform-action', (event, ...args) => {
  // ... do actions on behalf of the Renderer
  console.log("perform-action")
  // shell.exec('git');
  event.reply("send-message-to-renderer","这是来自主进程的问候");
  // shell.exec('git', function(code, stdout, stderr) {
  //   console.log('Exit code:', code);
  //   console.log('Program output:', stdout);
  //   console.log('Program stderr:', stderr);
  //   event.reply("send-message-to-renderer","这是来自主进程的问候");
  // });
})

if (process.env.NODE_ENV === 'development') {
  try {
    // require('electron-debug')()
  } catch (_) {
    console.dir(_)
  }
}

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true,
    frame: false,
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,  //设置为true就可以在这个渲染进程中调用Node.js
      preload: path.join(__dirname, './preload.js')
    }
  })

  tray(function(){
    return mainWindow
  }, {
    show:{
      message: "show"
    },
    hide:{
      message: "hide"
    },
    quit:{
      message: "quit"
    },
    trayTooltip:{
      message: "sddsd"
    }
  })

  mainWindow.setMenuBarVisibility(false);
  // // and load the index.html of the app.
  // mainWindow.loadFile('index.html')

  // // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  global.title = 'Yay! Welcome to umi-electron-typescript!';

  if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:8000/#/');
    // mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true,
      }),
    );
  }

  // 主线程和渲染进程通信
  const ProcessMessage = new processMessage(mainWindow)
  ProcessMessage.init()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser win.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
