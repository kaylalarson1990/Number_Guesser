var minRange = document.querySelector('.minimum-range');
var maxRange = document.querySelector('.maximum-range');
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
var errorNum1 = document.querySelector('.min-error');
var errorNum2 = document.querySelector('.max-error');
var nameError1 = document.querySelector('.name-error1');
var nameError2 = document.querySelector('.name-error2');
var guessError1 = document.querySelector('.guess-error-number1');
var guessError2 = document.querySelector('.guess-error-number2');
var totalGuesses = document.querySelector('#total-guesses');
var closeButton = document.querySelector('.closing-button');
var x = 0;
//creating random number
var randomNumber = 0;

function randomNumFunc (min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}

function buttonsChangeColors() {
    clearGameButton.classList.remove('disabled');
    resetGameButton.classList.remove('disabled');
}

function disableButtons() {
    clearGameButton.disabled = true;
    resetGameButton.disabled = true;
};

function enableButtons() {
    clearGameButton.disabled = false;
    resetGameButton.disabled = false;
    buttonsChangeColors();
};

// . create two inputs that takes one min range number 
//and one max range number.
// . create one button that updates the custom range of 
//min and mix numbers.
updateButton.addEventListener('click', function getRanges() {
	var changeMinRange = minRange.value;
	var changeMaxRange = maxRange.value;
	
	randomNumber = randomNumFunc(changeMinRange, changeMaxRange);
	console.log(randomNumber);

	//display an error if max range is less than min range

	if(parseInt(changeMaxRange) <= parseInt(changeMinRange)) {
        errorNum2.innerHTML = 'Please choose a number greater than the min range.';
        maxRange.classList.add('max-error-range');
    } else if (changeMaxRange === '') {
        errorNum2.innerHTML = 'Please enter valid entry.';
        maxRange.classList.add('max-error-range');
    } else if (isNaN(parseInt(changeMaxRange))) {
        errorNum2.innerHTML = "Please enter a valid number";
        maxRange.classList.add('max-error-range');
    } else {
        errorNum2.innerHTML = '';
        updateMaxRange.innerHTML = changeMaxRange;
        maxRange.classList.remove('max-error-range');

    }

	

	//display an error if min range is greater than max range
	if(parseInt(changeMinRange) >= parseInt(changeMaxRange)) {
        errorNum1.innerHTML = 'Please choose a number less than the max range.';
        minRange.classList.add('min-error-range');
    } else if (changeMinRange === '') {
        errorNum1.innerHTML = 'Please enter a valid entry.';
        minRange.classList.add('min-error-range');
    } else if (isNaN(parseInt(changeMinRange))) {
        errorNum1.innerHTML = "Please enter a valid number";
        minRange.classList.add('min-error-range');
    } else {
        errorNum1.innerHTML = '';
        updateMinRange.innerHTML = changeMinRange;
        minRange.classList.remove('min-error-range');
    }



})

function adjustRangesUponWin() {
	var changeMinRange = updateMinRange.innerHTML;
	var changeMaxRange = updateMaxRange.innerHTML;
	updateMinRange.innerHTML = parseInt(changeMinRange) - 10;
  updateMaxRange.innerHTML = parseInt(changeMaxRange) + 10;
}
// . create one button that submits the players guesses.
//      i) link the button "click" to submit to correct places.
submitGuessButton.addEventListener('click', function challengerInfo() {
  var c1Name = challenger1Name.value;
  updateChallenger1Name.innerHTML = c1Name;
  var c2Name = challenger2Name.value;
  updateChallenger2Name.innerHTML = c2Name;
  var c1Guess = guess1.value;
  var c2Guess = guess2.value;
  
  enableButtons();



  if (parseInt(c1Guess) === randomNumber) {
    challenger1Results.innerHTML = "BOOM!";
    winningCard.innerHTML += `<h3>CHALLENGER 1 
      <span id='challenger-1-name'>${challenger1Name.value}</span> 
      <span>vs</span> CHALLENGER 2 <span id='challenger-2-name'>
      ${challenger2Name.value}</span></h3>
      <span class="grey-line"></span>
      <h2>CHALLENGER <span id='the-winner-id-number'>1</span> 
      <span id='challenger-2-name'>${challenger1Name.value}</span></h2>
      <h2 class='winner'>WINNER</h2>
      <span class="grey-line"></span>
      <div class='bottom-winning-card'>
      <div class='guess-amount'>
      <h3><span id="total-guesses">--</span> GUESSES</h3>
      </div>
      <div class='time'>
      <h3><span>1.35</span> MINUTES</h3>
      </div>
      <div class='closing-button'>x</div>
      </div>`;
      adjustRangesUponWin()
      enableButtons()  
  } else if (parseInt(c1Guess) > randomNumber) {
    challenger1Results.innerHTML = "That's too high!"
    // showGuessesTotal();
    x++
  } else {
    challenger1Results.innerHTML = "That's too low!"
    // showGuessesTotal();
    x++
  }
//      i) will need to create an innerHTML to link to
//        HTML that needs to be changed.
//    b) if the players guess is too low, 
//      return a statement.
//      i) will need to create an innerHTML to link to
//        HTML that needs to be changed.
//    c) if the players guess matches the number, 
//      return a statement.
//      i) will need to create an innerHTML to link to
//        HTML that needs to be changed.

	if (parseInt(c2Guess) === randomNumber) {
		challenger2Results.innerHTML = "BOOM!";
		winningCard.innerHTML += `<h3>CHALLENGER 1 
      <span id='challenger-1-name'>${challenger1Name.value}</span> 
      <span>vs</span> CHALLENGER 2 <span id='challenger-2-name'>
      ${challenger2Name.value}</span></span></h3>
      <span class="grey-line"></span>
      <h2>CHALLENGER <span id='the-winner-id-number'>2</span> 
      <span id='challenger-2-name'>${challenger2Name.value}</span></h2>
      <h2 class='winner'>WINNER</h2>
      <span class="grey-line"></span>
      <div class='bottom-winning-card'>
      <div class='guess-amount'>
      <h3><span id="total-guesses">--</span> GUESSES</h3>
      </div>
      <div class='time'>
      <h3><span>1.35</span> MINUTES</h3>
      </div>
      <div class='closing-button'>x</div>
      </div>`;

			adjustRangesUponWin()
      enableButtons();
	} else if (parseInt(c2Guess) > randomNumber) {
		challenger2Results.innerHTML = "That's too high!"
    // showGuessesTotal();
    x++
	} else {
		challenger2Results.innerHTML = "That's too low!"
    // showGuessesTotal();
    x++
	}

//player guesses should only fall between min and max range

//if player 1 guess is greater than the max or less than the min range, return an error
  // //display an error if either guess is not a number (NaN)
  // if(isNaN(c1Guess)) {
  //  guess1NaN.innerHTML = 'Please enter a valid number.';
  // }

	if(parseInt(c1Guess) > maxRange.value || parseInt(c1Guess) < minRange.value) {
        guessError1.innerHTML = 'Pick a number within the range';
        guess1.classList.add('guess1-error');
    } else if (c1Guess === '') {
        guessError1.innerHTML = 'Please pick a valid entry.';
        guess1.classList.add('guess1-error');
    } else if (isNaN(parseInt(c1Guess))) {
    	guessError1.innerHTML = "Please pick a valid number";
      guess1.classList.add('guess1-error');
    } else {
        guessError1.innerHTML = '';
        updateChallenger1Guess.innerHTML = c1Guess;
        guess1.classList.remove('guess1-error');
    }
//if player 2 guess is greater than the max or less than the min range, return an error
  // if(!isNaN(parseInt(c2Guess))) {
  //  guess2NaN.innerHTML = 'Please enter a valid number.';
  // }
    if(parseInt(c2Guess) > maxRange.value || parseInt(c2Guess) < minRange.value) {
        guessError2.innerHTML = 'Pick a number within the range';
        guess2.classList.add('guess2-error');
    } else if (c2Guess === '') {
        guessError2.innerHTML = 'Please pick a valid entry.';
        guess2.classList.add('guess2-error');
    } else if (isNaN(parseInt(c2Guess))) {
    	guessError2.innerHTML = "Please pick a valid number";
      guess2.classList.add('guess2-error');
    } else {
        guessError2.innerHTML = '';
        updateChallenger2Guess.innerHTML = c2Guess;
        guess2.classList.remove('guess2-error');
    }


    if(c1Name === '') {
      nameError1.innerHTML = 'Please enter name.';
      challenger1Name.classList.add('name1-error');
    } else {
      nameError1.innerHTML = '';
      challenger1Name.classList.remove('name1-error');
    }

    if(c2Name === '') {
      nameError2.innerHTML = 'Please enter name.';
      challenger2Name.classList.add('name2-error');
    } else {
      nameError2.innerHTML = '';
      challenger2Name.classList.remove('name2-error');
    }

  console.log('Number of total guesses ' + x)
  totalGuesses.innerHTML = x;
})	


// for(var i = 0; i < closeButton.length; i++) {
//   closeButton[i].addEventListener('click', function closeWinButton() {
//     this.parentElement.style.display = 'none';
//   });
// }





// . create one button that clears the input values,
//but does not change the random number.
clearGameButton.addEventListener('click', function clearGame(event) {
//		a) this button should be disabled if there is nothing
//			to clear. 
//		b) link the button "click" to submit to correct places.
//		c) create an if statement that says:
//			if button is "clicked", clear all elements, but do not
//			change the random number.
    // minRange.value = "";
    // maxRange.value = "";
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
    updateMinRange.innerText = "--"
    updateMaxRange.innerText = "--"
    event.preventDefault();
    winningCard.innerHTML = "";
    randomNumFunc();
    x = 0;
});









