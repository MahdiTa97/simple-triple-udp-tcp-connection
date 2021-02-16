var net = require("net");

var PORT = 8088;

var client = new net.Socket();
var message = "I am Thor!";

client.connect(PORT, function () {
  console.log("● CLIENT CONNECTED TO: " + PORT);
  client.write(message);
});

client.on("data", function (data) {
  console.log("sent ->", message);
  console.log("received <– " + data);
  client.destroy();
});

client.on("close", function () {
  console.log("○ CONNECTION CLOSED");
});
