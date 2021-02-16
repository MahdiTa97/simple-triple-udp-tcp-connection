var net = require("net");
var dgram = require("dgram");

var TCP_PORT = 8088;
var UDP_PORT = 4444;

function udpFunctions(client, message, sock) {
  client.send(message, 0, message.length, UDP_PORT, function (err, bytes) {
    if (err) throw err;
    console.log("< Sent: " + message);
  });
  client.on("message", function (message, remote) {
    console.log("> Receive: " + message);
    console.log("< Send:  " + message);
    sock.write(message);
    client.close();
  });
}

var server = new net.createServer(function (sock) {
  var client = dgram.createSocket("udp4");
  console.log("============");
  console.log("● TCP CONNECTED TO -> " + sock.remotePort);

  sock.on("data", function (message) {
    console.log("> Receive: " + message);
    udpFunctions(client, message, sock);
  });

  sock.on("close", function (data) {
    console.log("● TCP DISCONNECTED " + sock.remotePort);
  });
});

server.listen(TCP_PORT);
console.log("✔ TCP SERVER LISTENING ON: " + TCP_PORT);
