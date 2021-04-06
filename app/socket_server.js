const io = require("socket.io");
const server = require("http").createServer();
const installHandler = require("./handler/install");

class SocketServer {
  constructor(options = {}) {
    this.io = io(server, {
      path: "/socket.io",
      cors: {
        origin: "http://localhost:8000",
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
      }
    });

    this.port = options.port || 46871;
  }

  start() {
    const { io } = this;
    io.on("connection", client => {
      console.log("socket connected!");
      client.on("event", data => {
        /* … */
      });
      client.on("disconnect", () => {
        /* … */
      });
      client.on("install_app", (app, cb) => {
        cb(app);
        const resultEvent = `install_app_result`;
        installHandler(app, (err, res) => {
          client.emit(resultEvent, { err, res });
        });
      });
    });
    server.listen(this.port);
  }
}

module.exports = SocketServer;
