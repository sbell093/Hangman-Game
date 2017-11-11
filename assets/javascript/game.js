
//This is an array of letters that the computer can choose from
	var computerChoices = ["a", "b", "c", "d", "e", "f", "g", 
					"h", "i", "j", "k", "l", "m", "n", "o", 
					"p", "q", "r", "s", "t", "u", "v", "w", 
					"x", "y", "z",]

	// This randomly chooses a letter from the array
	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// Shows in console log what key was pressed
	console.log("computerGuess=" + computerGuess)


var guessonscreen;

// Keeps track of stats
	var wins = 0;
	var losses = 0;
	var guessesLeft;
	var yourGuesses;


function reset() {
	console.log("reset");

	guessesLeft = 9;
	yourGuesses = "";
}

document.addEventListener("DOMContentLoaded", function(event){
    console.log("DOM fully loaded and parsed");

    reset();
    guessonscreen = document.getElementById("yourGuesses");

});





document.onkeyup = function(event) {0
	console.log(event)
	var userGuess = event.key;


//This determines which key was pressed
	

	

//References the wins ID in the HTML document
	var game_wins = document.getElementById("wins");
	game_wins.textContent = "Win: " + wins;
// " " losses in HTML document
	var game_losses = document.getElementById("losses");
	game_losses.textContent = "Losses: " + losses;

// " " Guesses ID in HTML document
	var game_guesses = document.getElementById("guesses");
	game_guesses.textContent = "Guesses: " + guessesLeft;



	//If guessesLeft becomes 0 the counter will start back at 9
	if (guessesLeft > 1){
		guessesLeft--
	}
	else {
		losses++;
		reset();
	}
	
	// puts letters on screen that user has guessed
    if (computerChoices.includes(userGuess)){
        if (yourGuesses == "" ) {
            yourGuesses = userGuess
        }
        else {
            yourGuesses = yourGuesses + ", " + userGuess    
        }

        if (userGuess == computerGuess) {
			wins++;
			reset();
		}
	
	guessonscreen.textContent = "Your Guesses So Far: " + yourGuesses;


	}

	
	


}






//function startGame () {
	//computerGuess ();
	


