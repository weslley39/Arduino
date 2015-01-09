var five = require("johnny-five"),
board, ping;

board = new five.Board();

board.on("ready", function() {

  // Create a new `ping` hardware instance.
  ping = new five.Ping(7);

  ping.on("data", function(err, value) {

  });

  ping.on("change", function(err, value) {
    console.log("Object is " + this.inches + "inches away");
  });
});