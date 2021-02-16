var net = require("net");

var PORT = 8088;

var client = new net.Socket();

client.connect(PORT, function () {
  console.log("CLIENT CONNECTED TO: " + PORT);
  client.write("I am Thor!");
});

client.on("data", function (data) {
  console.log("DATA: " + data);
  client.destroy();
});

client.on("close", function () {
  console.log("Connection closed");
});
