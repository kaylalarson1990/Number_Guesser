var minRange = document.querySelector('#minimum-range');
var maxRange = document.querySelector('#maximum-range');
var updateButton = document.querySelector('#update-range');
var updateMinRange = document.querySelector('#show-min-range');
var updateMaxRange = document.querySelector('#show-max-range');
var challenger1Guess = document.querySelector('#too-high-too-low-1');
var challenger2Guess = document.querySelector('#too-high-too-low-2');
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
var challenger1Results = document.querySelector('#too-high-too-low-1');
var challenger2Results = document.querySelector('#too-high-too-low-2');
var randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);
// . create two inputs that takes one min range number 
//and one max range number.
// . create one button that updates the custom range of 
//min and mix numbers.
updateButton.addEventListener('click', function getRanges() {
	// console.log(minRange.value)
	var changeMinRange = minRange.value;
	updateMinRange.innerHTML = changeMinRange;
	// console.log(maxRange.value)
	var changeMaxRange = maxRange.value;
	updateMaxRange.innerHTML = changeMaxRange;	
})

// . create one button that submits the players guesses.
//			i) link the button "click" to submit to correct places.
submitGuessButton.addEventListener('click', function challengerInfo() {
	// console.log(challenger1Name.value)
	var c1Name = challenger1Name.value;
	updateChallenger1Name.innerHTML = c1Name;
	// console.log(challenger2Name.value)
	var c2Name = challenger2Name.value;
	updateChallenger2Name.innerHTML = c2Name;
	// console.log(guess1.value)
	var c1Guess = guess1.value;
	updateChallenger1Guess.innerHTML = c1Guess;
	// console.log(guess2.value)
	var c2Guess = guess2.value;
	updateChallenger2Guess.innerHTML = c2Guess;
//	i) link players guess to show on Current Range card

// . display both players most recent guesses.
//		a) create an innerHTML to link to HTML that needs to be
//			changed.
// . display results from players guesses:
//		a) if the players guess is too high, 
//			return a statement.

	if (parseInt(c1Guess) === randomNumber) {
		challenger1Results.innerHTML = "BOOM!"
	} else if (parseInt(c1Guess) > randomNumber) {
		challenger1Results.innerHTML = "That's too high!"
	} else {
		challenger1Results.innerHTML = "That's too low!"
	}
//			i) will need to create an innerHTML to link to
//				HTML that needs to be changed.
//		b) if the players guess is too low, 
//			return a statement.
//			i) will need to create an innerHTML to link to
//				HTML that needs to be changed.
//		c) if the players guess matches the number, 
//			return a statement.
//			i) will need to create an innerHTML to link to
//				HTML that needs to be changed.
})	


//Pseudocode Phase One:
// ZERO STATE


// . for each player, create two things:
//		a) an input field to enter their number guesses,
//			which can only accept numerical values.

//		b) an input field for their name.
//			i) link players name to show in correct places 
//				(i.e Current Range card, winning cards, etc.)


// . create one button that clears the input values,
//but does not change the random number.

clearGameButton.addEventListener('click', function clearGame(event) {
//		a) this button should be disabled if there is nothing
//			to clear. 
//		b) link the button "click" to submit to correct places.
//		c) create an if statement that says:
//			if button is "clicked", clear all elements, but do not
//			change the random number.
    minRange.value = "";
    maxRange.value = "";
    challenger1Name.value = "";
    challenger2Name.value = "";
    challenger1Results.value = "";
   	challenger2Results.value = "";
   	guess1.value = "";
   	guess2.value = "";

   	// FIND A SOLUTION TO SET TO DEFAULT THE "LATEST SCORE CARD TOO"
   	//use innerText for <p>
   	// if input => value attribute
   	updateChallenger1Name
    updateChallenger2Name
    updateChallenger1Guess
    updateChallenger2Guess
    event.preventDefault();
})


// . create one button that resets the whole game and
//regenerates a new random number
resetGameButton.addEventListener('click', function resetGame() {
//		a) this button should be disabled if there is nothing
//			to clear. 
//		b) create an if statement that says:
//			if button is "clicked", clear all fields and 
//			random number.
	window.location.reload();
})




// . create one button that resets the whole game and
//regenerates a new random number
resetGameButton.addEventListener('click', function resetGame() {
//		a) this button should be disabled if there is nothing
//			to clear. 
//		b) create an if statement that says:
//			if button is "clicked", clear all fields and 
//			random number.
})



//PLAYERS GUESS STATE
// . display both players most recent guesses.
//		a) create an innerHTML to link to HTML that needs to be
//			changed.
// . display results from players guesses:
//		a) if the players guess is too high, 
//			return a statement.
//			i) will need to create an innerHTML to link to
//				HTML that needs to be changed.
//		b) if the players guess is too low, 
//			return a statement.
//			i) will need to create an innerHTML to link to
//				HTML that needs to be changed.
//		c) if the players guess matches the number, 
//			return a statement.
//			i) will need to create an innerHTML to link to
//				HTML that needs to be changed.




//minRange needs to be less than maxRange
// else if statement
//most specific thing first

//pseudocode:
//check if values are filled in first
//then compare the numbers
//after they fill out the numbers - alert if incorrect
//the minimun range should be less than the max range
//if not, then alert user to pick a lower number


