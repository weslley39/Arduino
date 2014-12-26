var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {

  // Create a new `ping` hardware instance.
  var ping = new five.Ping(7);
  var green = new five.Led(13);
  var red = new five.Led(12);
  var yeloow = new five.Led(11);

  
  // "data" get the current reading from the ping
  ping.on("data", function(err, value) {
    // console.log("data", value);
  });

  ping.on("change", function(err, value) {

    if (this.inches > 2) {
      yeloow.on();
    } else {
      yeloow.off();
    }

    if (this.inches > 4) {
      red.on();
    } else {
      red.off();
    }

    if (this.inches > 6) {
      green.on();
    } else {
      green.off();
    }


    console.log("Object is " + this.inches + "inches away");
  });
});