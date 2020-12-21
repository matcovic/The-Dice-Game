/*Multiplying with 6 to generate random number between 0-5
  *Floor funtion to round numbers
  *Adding 1 to generate between 1-6
*/
var ranNum1 = Math.floor(Math.random()*6) + 1;

var ranDiceImage = "dice" + ranNum1 + ".png"; // generating image no

var ranImageSrc = "images/" + ranDiceImage; // generating image src

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", ranImageSrc);

//For Dice 2
var ranNum2 = Math.floor(Math.random()*6) + 1;

var ranDiceImage2 = "dice" + ranNum2 + ".png"; // generating image no

var ranImageSrc2 = "images/" + ranDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", ranImageSrc2);

if(ranNum1 > ranNum2) {
  document.querySelector("h1").innerHTML = "Player-1 Wins"
}
else if (ranNum2 > ranNum1) {
  document.querySelector("h1").innerHTML = "Player-2 Wins"
}
else {
  document.querySelector("h1").innerHTML = "Draw- Try again"
}
