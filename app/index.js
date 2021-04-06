const { ipcMain } = require("electron");
const handlers = require("./handler");

/**
 * 渲染进程与主进程通信，此处可以抽象成 http router 形式
 * @see https://www.electronjs.org/docs/tutorial/quick-start
 */
const initIPC = () => {
  ipcMain.handle("invoke-main", (event, route, ...args) => {
    // console.log(handlers);
    handlers[route] && handlers[route](...args);
    // ... do actions on behalf of the Renderer
  });
};

module.exports = initIPC;
