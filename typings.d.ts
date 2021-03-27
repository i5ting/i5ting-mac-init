declare module '*.css';
declare module '*.less';
declare module "*.png";
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

export function someExportedFunction() {
  // ...
}

import {app, BrowserWindow,ipcMain,ipcRenderer} from 'electron'

declare global {
  interface Window {
    ipc: typeof ipcRenderer;
    ipcRenderer: typeof ipcRenderer;
  }
}
