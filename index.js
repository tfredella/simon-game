/******Player One Score******/

var randomNumber1 = Math.floor(Math.random() * 6) + 1; //Dice1: 1-6

var randomImage = "dice" + randomNumber1 + ".png"; //pick file name

var randomSrcImg1= "images/" + randomImage; //locat & file selector

var playerOneScore = document.querySelectorAll("img")[0]; //Img array selector

playerOneScore.setAttribute("src", randomSrcImg1); //Player One Attribute

/******Player Two Score******/

var randomNumber2 = Math.floor(Math.random() * 6) + 1; //Dice2: 1-6

var randomImage2 = "dice" + randomNumber2 + ".png"; //dice2 file

var randomSrcImg2 = "images/" + randomImage2; //Dice2: location & image

var playerTwoScore = document.querySelectorAll("img")[1]; // Dice2 Array location

playerTwoScore.setAttribute("src", randomSrcImg2); //Player Two Attribute

/******Declaring A Winner******/

if (randomNumber1 > randomNumber2) {
    document.getElementById("resultWinner").innerHTML = "🚩 Player One Wins!";}
  else if (randomNumber1 < randomNumber2) {
      document.getElementById("resultWinner").innerHTML = "Player Two Wins! 🚩";}
    else if (randomNumber1 == randomNumber2) {
      document.getElementById("resultWinner").innerHTML = "Draw, Play Again!";
    }
