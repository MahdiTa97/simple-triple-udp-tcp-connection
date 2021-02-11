var net = require("net");

var HOST = "192.168.1.33";

var PORT = 8088;

var client = new net.Socket();

client.connect(PORT, HOST, function () {
  console.log("CLIENT CONNECTED TO: " + HOST + ":" + PORT);
  client.write("I am Thor!");
});

client.on("data", function (data) {
  console.log("DATA: " + data);
  client.destroy();
});

client.on("close", function () {
  console.log("Connection closed");
});
