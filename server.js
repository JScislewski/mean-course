const express = require("./backend/app");
const debug = require("debug")("node-angular");
const http = require("http");

const PORT_DEFAULT = 3000;

const normalizePort = (val) => {
  const port = parseInt(val, 10);
  if (isNaN(port)) return val;
  return port >= 0 ? port : false;
};

const handleError = (error) => {
  if (error.syscall !== "listen") throw error;

  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const handleListening = () => {
  const addr = server.address();
  const bind = typeof port === "string" ? "pipe " + port : "port " + port;
  debug(`Listening on ${bind}`);
};

const port = normalizePort(process.env.PORT || PORT_DEFAULT);
express.set("port", port);

const server = http.createServer(express);
server.on("error", handleError);
server.on("listening", handleListening);
server.listen(port);
