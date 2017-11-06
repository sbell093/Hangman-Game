
//This is an array of letters that the computer can choose from
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", 
					"h", "i", "j", "k", "l", "m", "n", "o", 
					"p", "q", "r", "s", "t", "u", "v", "w", 
					"x", "y", "z",]

// Keeps track of stats
	var wins = 0;
	var losses = 0;
	var guessesLeft = 9;
	var yourGuesses =0;

// This randomly chooses a letter from the array
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Shows in console log what key was pressed
	console.log("computerGuess=" + computerGuess)




document.onkeyup = function(event) {
	console.log(event)
//If guessesLeft becomes 0 the counter will start back at 9
	if (guessesLeft > 1){
		guessesLeft--
	}
	else {
		guessesLeft = 9
	}


//This determines which key was pressed
	var userGuess = event.key;

//References the wins ID in the HTML document
	var game_wins = document.getElementById("wins");
	game_wins.textContent = "Win: " + wins;
// " " losses in HTML document
	var game_losses = document.getElementById("losses");
	game_losses.textContent = "Losses: " + losses;

// " " Guesses ID in HTML document
	var game_guesses = document.getElementById("guesses");
	game_guesses.textContent = "Guesses: " + guessesLeft;
	

	if (userGuess == computerGuess) {
		wins++;
	}
	else if (userGuess !==computerGuess) {
		losses++
	}

// puts letters on screen that user has guessed
    if (computerChoices.includes(userGuess)){
        if (yourGuesses == "" ) {
            yourGuesses = userGuess
        }
        else {
            yourGuesses = yourGuesses + ", " + userGuess    
        }

// yourGuesses = yourGuesses + userGuess
	var guessonscreen = document.getElementById("yourGuesses")
	guessonscreen.textContent = "Your Guesses So Far: " + yourGuesses;
}

	





}