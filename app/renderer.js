// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
import './main';

console.log('renderer.js is so happy to say you 👋 hello....');

import { ipcRenderer } from 'electron';

ipcRenderer.on('send-message-to-renderer', (event, message) => {
  console.log(`This is the message from the second window sent via main: ${message}`);
});