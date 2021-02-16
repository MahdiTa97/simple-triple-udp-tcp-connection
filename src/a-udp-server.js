var dgram = require("dgram");

var PORT = 4444;

var server = dgram.createSocket("udp4");

server.on("listening", function () {
  var address = server.address();

  console.log("UDP SERVER LISTENING ON: " + address.port);
});

server.on("message", function (message, remote) {
  console.log("============");
  console.log("> Receive: " + message);
  var msgResponse = "Hi C";
  server.send(
    msgResponse,
    0,
    msgResponse.length,
    remote.port,
    remote.address,
    function (err, bytes) {
      if (err) throw err;
      console.log("< Send:  " + msgResponse);
    }
  );
});

server.bind(PORT);
