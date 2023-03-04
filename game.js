//data structures
var buttonColors = ["red", "blue", "green", "yellow"];

var gamePattern = [];

function nextSequence() {

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  //use the random chosen color and find it's ID
  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  //play audio
  var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
  audio.play();
}