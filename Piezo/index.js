var five = require("johnny-five"),
  board = new five.Board();

board.on("ready", function() {
  // Creates a piezo object and defines the pin to be used for the signal
  var piezo = new five.Piezo(3);

  // Injects the piezo into the repl
  board.repl.inject({
    piezo: piezo
  });

  // Plays a song
  piezo.play({
    // song is composed by an array of pairs of notes and beats
    // The first argument is the note (null means "no note")
    // The second argument is the length of time (beat) of the note (or non-note)
    song: [
      ["E7", 1 / 15],
      ["E7", 1 / 15],
      [null, 1 / 15],
      ["E7", 1 / 15],

    ],
    tempo: 100
  });

});