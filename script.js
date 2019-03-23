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
var winningCard = document.querySelector('.winning-card');
var errorNum1 = document.querySelector('.error-number1');
var errorNum2 = document.querySelector('.error-number2');
//creating random number
var randomNumber = 0;

function randomNumFunc (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
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
	randomNumber = randomNumFunc(changeMinRange, changeMaxRange);
	console.log(randomNumber);
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
	enableButtons();


	if (parseInt(c1Guess) === randomNumber) {
		challenger1Results.innerHTML = "BOOM!";
		winningCard.innerHTML = `<h3>CHALLENGER 1 
			<span id='challenger-1-name'>${challenger1Name.value}</span> 
			<span>vs</span> CHALLENGER 2 <span id='challenger-2-name'>
			${challenger2Name.value}</span></h3>
			<h2>CHALLENGER <span id='the-winner-id-number'>2</span> 
			<span id='challenger-2-name'>${challenger1Name.value}</span></h2>
			<h2 class='winner'>WINNER</h2>
			<div class='bottom-winning-card'>
			<div class='guess-amount'>
			<h3><span>47</span> GUESSES</h3>
			</div>
			<div class='time'>
			<h3><span>1.35</span> MINUTES</h3>
			</div>
			<div class='closing-button'>X</div>
			</div>`;
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

	if (parseInt(c2Guess) === randomNumber) {
		challenger2Results.innerHTML = "BOOM!";
		winningCard.innerHTML = `<h3>CHALLENGER 1 
			<span id='challenger-1-name'>${challenger1Name.value}</span> 
			<span>vs</span> CHALLENGER 2 <span id='challenger-2-name'>
			${challenger2Name.value}</span></h3>
			<h2>CHALLENGER <span id='the-winner-id-number'>2</span> 
			<span id='challenger-2-name'>${challenger2Name.value}</span></h2>
			<h2 class='winner'>WINNER</h2>
			<div class='bottom-winning-card'>
			<div class='guess-amount'>
			<h3><span>47</span> GUESSES</h3>
			</div>
			<div class='time'>
			<h3><span>1.35</span> MINUTES</h3>
			</div>
			<div class='closing-button'>X</div>
			</div>`;
	} else if (parseInt(c2Guess) > randomNumber) {
		challenger2Results.innerHTML = "That's too high!"
	} else {
		challenger2Results.innerHTML = "That's too low!"
	}

//player guesses should only fall between min and max range

//if player 1 guess is greater than the max or less than the min, return an error
	if(parseInt(c1Guess) > maxRange.value || parseInt(c1Guess) < minRange.value) {
		errorNum1.innerHTML = 'Pick a number within the range';
	} else {
		errorNum1.innerHTML = '';
	}
//if player 2 guess is greater than the max or less than the min, return an error
	if(parseInt(c2Guess) > maxRange.value || parseInt(c2Guess) < minRange.value) {
		errorNum2.innerHTML = 'Pick a number within the range';
	} else {
		errorNum2.innerHTML = '';
	}
})	


//Pseudocode Phase One:
// ZERO STATE






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
   	updateChallenger1Name.innerText = "Name";
    updateChallenger2Name.innerText = "Name";
    updateChallenger1Guess.innerText = "0";
    updateChallenger2Guess.innerText = "0";
    // THIS DOESN'T WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // clearGameButton.disabled = true;
    // resetGameButton.disabled = true;
    disableButtons();
    event.preventDefault();
});


// . create one button that resets the whole game and
//regenerates a new random number
resetGameButton.addEventListener('click', function resetGame() {
//		a) this button should be disabled if there is nothing
//			to clear. 
//		b) create an if statement that says:
//			if button is "clicked", clear all fields and 
//			random number.
	window.location.reload();
  disableButtons();
});



function disableButtons() {
    clearGameButton.disabled = true;
    resetGameButton.disabled = true;
};

function enableButtons() {
    clearGameButton.disabled = false;
    resetGameButton.disabled = false;
};









