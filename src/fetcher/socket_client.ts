const io = require("socket.io-client");

const socketClient = io("http://localhost:46871", {
  reconnectionDelayMax: 10000
});

socketClient.on("connect", () => {
  console.log("socket client connected!");
});

export default socketClient;
