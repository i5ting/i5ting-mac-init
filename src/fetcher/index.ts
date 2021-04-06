/**
 * why use window.require?
 * Only work in electron, It's not work in chrome browser
 * @see https://github.com/electron/electron/issues/7300
 */
const { ipcRenderer } = window.require("electron");

export default {
  invoke(path: string, params: any) {
    ipcRenderer.invoke("invoke-main", path, params);
  },

  async installApp(params: any) {
    await this.invoke("install", params);
  }
};
