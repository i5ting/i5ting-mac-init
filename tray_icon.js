const path = require('path');

const { app, Menu, Tray } = require('electron');

let trayContextMenu = null;
let tray = null;

function createTrayIcon(getMainWindow, messages) {
  // A smaller icon is needed on macOS
  const iconSize = process.platform === 'darwin' ? '16' : '256';
  const iconNoNewMessages = path.join(
    __dirname,
    '..',
    'images',
    `icon_${iconSize}.png`
  );

  tray = new Tray(iconNoNewMessages);

  tray.toggleWindowVisibility = () => {
    const mainWindow = getMainWindow();
    if (mainWindow) {
      if (mainWindow.isVisible()) {
        mainWindow.hide();
      } else {
        mainWindow.show();
        mainWindow.setAlwaysOnTop(true);
        mainWindow.focus();
        mainWindow.setAlwaysOnTop(false);
      }
    }
    tray.updateContextMenu();
  };

  tray.updateContextMenu = () => {
    const mainWindow = getMainWindow();

    // NOTE: we want to have the show/hide entry available in the tray icon
    // context menu, since the 'click' event may not work on all platforms.
    // For details please refer to:
    // https://github.com/electron/electron/blob/master/docs/api/tray.md.
    trayContextMenu = Menu.buildFromTemplate([
      {
        id: 'toggleWindowVisibility',
        label: messages[mainWindow.isVisible() ? 'hide' : 'show'].message,
        click: tray.toggleWindowVisibility,
      },
      {
        id: 'quit',
        label: messages.quit.message,
        click: app.quit.bind(app),
      },
    ]);

    tray.setContextMenu(trayContextMenu);
  };

  tray.on('click', tray.toggleWindowVisibility);

  tray.setToolTip(messages.trayTooltip.message);
  tray.updateContextMenu();

  return tray;
}

module.exports = createTrayIcon;
