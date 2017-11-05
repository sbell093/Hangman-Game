
//This is an array of letters that the computer can choose from//
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", 
					"h", "i", "j", "k", "l", "m", "n", "o", 
					"p", "q", "r", "s", "t", "u", "v", "w", 
					"x", "y", "z",]

// Keeps track of stats//
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var yourGuesses =0;

// This randomly chooses a letter from the array//
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Shows in console log what key was pressed//
	console.log("computerGuess=" + computerGuess)

	function reset () {
		console.log ("reset");
		guessesLeft = 9;
	}


document.onkeyup = function(event) {
	console.log(event)
//If guessesLeft becomes 0 the counter will start back at 9//
	if (guessesLeft > 0){
		guessesLeft--
	}
	else {
		guessesLeft = 9
	}

	

//This determines which key was pressed//
	var userGuess = event.key;

//Alerts the Computer's guess//
	var game_wins = document.getElementById("wins");
	game_wins.textContent = "Win: " + wins;

	var game_losses = document.getElementById("losses");
	game_losses.textContent = "Losses: " + losses;

	var game_guesses = document.getElementById("guesses");
	game_guesses.textContent = "Guesses: " + guessesLeft;
	

	if (userGuess == computerGuess) {
		wins++;
	}
	else if (guessesLeft == 0)
	{
	losses++
	}

	if (wins) {
		reset();
	}



	








}