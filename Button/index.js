var five = require("johnny-five");

var board = new five.Board();

var ledActive = false;

board.on("ready", function() {

	var button = new five.Button(8);
	var led = new five.Led(13);
	
	button.on("down", function() {
		if (!ledActive) {
			led.strobe(1000);
			ledActive = true;
		} else {
			led.stop().off();
			ledActive = false;
		}
	});
});	