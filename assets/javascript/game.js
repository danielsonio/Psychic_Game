var letters = ["h", "a", "n", "g", "m", "a", "n"];
var userPicks = [];
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;


document.onkeyup = function() {
 var compChoice = letters[0];
 var userChoice = event.key;
 userPicks.push(userChoice);


if (userChoice == compChoice) {
	winCount++;
	guessesLeft--;	
	letters.splice(0,1);
	alert("You are correct!");
	userPicks.length = 0;	
} else {
	guessesLeft--;
}
if(guessesLeft == 0) {
	lossCount++;
	alert("You lose!");
	guessesLeft = 9;
	userPicks.length = 0;
}


document.querySelector("#wins").innerHTML = "Wins: " + winCount;
document.querySelector("#losses").innerHTML = "Losses: " + lossCount;
document.querySelector("#guesses_left").innerHTML = "Guesses Left: " + guessesLeft;
document.querySelector("#guesses").innerHTML = "Your guesses: " + userPicks;

}
