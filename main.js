const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    title: "Dettolator",
    icon: "icon.png",
    autoHideMenuBar: true,
  });

  win.loadURL("https://dettol-games.wskoly.xyz/00_GermShooterEn?user_id=2531&game_id=2531");
}

app.whenReady().then(createWindow);

