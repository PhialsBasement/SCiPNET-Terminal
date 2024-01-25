const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    titleBarStyle : "hidden",
    titleBarOverlay: true,
    width: 1280,
    height: 720
  })

  win.loadURL('https://scipnet-terminal.web.app/')
}

app.whenReady().then(() => {
  createWindow()
  
})