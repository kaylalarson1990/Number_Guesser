// two inputs to set a custom range for the random number to fall within
// set alert for when the user doesn't enter a number in the range fields


var minRange = document.querySelector('#minimum-range');
var maxRange = document.querySelector('#maximum-range');
var updateButton = document.querySelector('#update-range');
var updateMinRange = document.querySelector('#show-min-range');
var updateMaxRange = document.querySelector('#show-max-range');

updateButton.addEventListener('click', function(e) {
	e.preventDefault();
	updateMinRange.innerText = minRange.value;
	updateMaxRange.innerText = maxRange.value;
	minRange.value = "";
	maxRange.value = "";
	if (typeof minRange !== number && typeof maxRange !== number) {
		alert('The input you entered is not valid. Please enter a number!')
	}
})


// for each player:
// An input field for guessing the number which can only accept numeric values
// An input field for their name that can accept any alpha-numeric character
// One button that submits both players guesses


// TO DO!!!!!!!! work with the parseInt() function!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var challenger1Name = document.querySelector('#name-name-1');
var challenger2Name = document.querySelector('#name-name-2');
var guess1 = document.querySelector('#guess-guess-1');
var guess2 = document.querySelector('#guess-guess-2');
var submitGuessButton = document.querySelector('#button-submit-guess');
var resetGameButton = document.querySelector('#button-reset-game');
var clearGameButton = document.querySelector('#button-clear-game');
var updateChallenger1Name = document.querySelector('#challenger-1-name');
var updateChallenger2Name = document.querySelector('#challenger-2-name');
var updateChallenger1Guess = document.querySelector('#most-recent-guess-1');
var updateChallenger2Guess = document.querySelector('#most-recent-guess-2');

submitGuessButton.addEventListener('click', function(e) {
	e.preventDefault();
	updateChallenger1Name.innerText = challenger1Name.value;
	updateChallenger2Name.innerText = challenger2Name.value;
	updateChallenger1Guess.innerText = guess1.value;
	updateChallenger2Guess.innerText = guess2.value;
	challenger1Name.value = "";
	challenger2Name.value = "";
	guess1.value = "";
	guess2.value = "";
	if (typeof guess1 !== number && typeof guess2 !== number) {
		alert('The input you entered is not valid. Please enter a number!')
	}
})

// A button for clearing the input field, which does not reset the random number
// One button that resets the game and generates a new random number
// The clear button should be disabled if there is nothing to clear.
// The reset button should be disabled if there is nothing to reset.
// Players Guess State:
// Display both player’s most recent guesses
// Display results and feedback for each players guess:
// If their guess is too high, it should display the error message: “That’s too high”
// If their guess is too low, it should display the error message: “That’s too low”
// If the guess is correct, it should display the success message: “BOOM!” and create a new card to display results (card details are outlined in Phase Three)