const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  if (process.env.ELECTRON_DEV === "true") {
    win.loadURL("http://localhost:5173/");
  } else {
    win.loadFile("dist/index.html");
  }
};

app.whenReady().then(() => {
  createWindow();
});
