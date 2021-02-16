var net = require("net");

var PORT = 8088;

net
  .createServer(function (sock) {
    console.log("CONNECTED: " + sock.remotePort);

    sock.on("data", function (data) {
      console.log("DATA " + data);
      sock.write("OK");
    });

    sock.on("close", function (data) {
      console.log("CLOSED: " + sock.remotePort);
    });
  })
  .listen(PORT);

console.log("Server listening on " + PORT);
