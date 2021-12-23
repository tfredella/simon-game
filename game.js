//color Array
var buttonColors = ["red", "blue", "green", "yellow"];

//game & Patterns
var gamePattern = [];
var userPattern = [];

var gameStarted = false;
var level = 0;

//start gane
$(document).keydown(function() {

  if(gameStarted == false) {
    $("#level-title").text("Level " + level);
    nextSequence();
    gameStarted = true;
  }
  });

  //User Selection Function
  $(".btn").click(function() {

    var userChoice = $(this).attr("id");
    userPattern.push(userChoice);

    playSound(userChoice);
    animatePress(userChoice);

    checkAnswer(userPattern.length - 1);
  });

  //Check Answer
  function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userPattern[currentLevel]) {
      console.log("success");
    if (userPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
      } else {
        $("body").addClass("game-over");
        $("#level-title").text("Game Over! Press Any Key to Restart")
        playSound("wrong");
        setTimeout(function() {
          $("body").removeClass("game-over");
      } , 200);
        startOver();
    }
  }

//Next Sequence
function nextSequence() {
  userPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomColor = (buttonColors[randomNumber]);
  gamePattern.push(randomColor);

  //flash animation
  $("#" + randomColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomColor);
}

//Play Sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

//Pess Button Animation
function animatePress(currentColor) {
  $("." + currentColor).addClass("pressed");
  setTimeout(function () {
      $("." + currentColor).removeClass("pressed");
  }, 100);
}

//Start over
function startOver() {
  gamePattern = [];
  level = 0;
  gameStarted = false;
}
