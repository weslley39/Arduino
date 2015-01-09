var spotify = require('spotify-node-applescript');


var five = require("johnny-five");
var board, ping;

board = new five.Board();

board.on("ready", function() {

  // Create a new `ping` hardware instance.
  ping = new five.Ping(7);

  ping.on("data", function(err, value) {

  });

  ping.on("change", function(err, value) {
    // console.log(this.inches);
    if (this.inches >= 8) {
      spotify.pause(function(){
        console.log('Spotify Pause');
    });
  } else {
    spotify.play(function(){ 
        console.log('Spotify Play');
    });
}
});

  console.log('Spotify Contorller Started!');
});