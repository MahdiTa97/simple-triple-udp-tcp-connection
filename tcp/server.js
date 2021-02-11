var net = require("net");

var HOST = "192.168.1.33";

var PORT = 8088;

net
  .createServer(function (sock) {
    console.log("CONNECTED: " + sock.remoteAddress + ":" + sock.remotePort);

    sock.on("data", function (data) {
      console.log("DATA " + sock.remoteAddress + ": " + data);
      sock.write("OK");
    });

    sock.on("close", function (data) {
      console.log("CLOSED: " + sock.remoteAddress + " " + sock.remotePort);
    });
  })
  .listen(PORT, HOST);

console.log("Server listening on " + HOST + ":" + PORT);
