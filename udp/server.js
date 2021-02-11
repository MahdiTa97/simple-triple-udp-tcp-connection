var PORT = 4444;

var HOST = "127.0.0.1";

var dgram = require("dgram");

var server = dgram.createSocket("udp4");

server.on("listening", function () {
  var address = server.address();

  console.log(
    "UDP Server listening on " + address.address + ":" + address.port
  );
});

server.on("message", function (message, remote) {
  console.log(remote.address + ":" + remote.port + " - " + message);

  var msgResponse = "OK";

  server.send(
    msgResponse,
    0,
    msgResponse.length,
    remote.port,
    remote.address,
    function (err, bytes) {
      if (err) throw err;

      console.log(
        "UDP server message sent to " + remote.address + ":" + remote.port
      );
    }
  );
});

server.bind(PORT, HOST);
