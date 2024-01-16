# Projects related to Dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-aba7ms?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution code

## project 1

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});


```

# project 2

## project link

[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-65z8ye?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)

# solution code
``` javascript

const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    let bmiCategory = '';
    if (bmi < 18.6) {
      bmiCategory = 'Underweight';
    } else if (bmi >= 18.6 && bmi < 24.9) {
      bmiCategory = 'Normal Weight';
    }
    
    // Display the result along with the BMI category
    results.innerHTML = `<span>${bmi}</span> - ${bmiCategory}`;
  }
  

  
});



```

# solution3
 ``` javascript
 
 const clock = document.querySelector('#clock');

setInterval(() => {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

 ```

 ## project 4

 ```  javascript

 let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let numGuess = 1;
let prevGuess = [];

let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 0) {
    alert('enter a number greater than 0');
  } else if (guess > 100) {
    alert('enter a number lesser than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`game over random number is ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`you guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`number is tooo low`);
  } else if (guess > randomNumber) {
    displayMessage(`number is tooo high`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<p id="newGame">star Over</p>`;
  startOver.appendChild(p);
  playGame = false;
  startGame();
}
function startGame() {
  const button = document.querySelector('#newGame');
  button.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);

    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;

    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  });
}

 ```

 ## project 5
 ``` javascript
 
 let randomColor = () => {
  const hex = '0123456ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
function changeColor() {
  intervalId = setInterval(() => {
    document.querySelector('body').style.backgroundColor = randomColor();
  }, 1000);
}
function stopChangeColor() {
  clearInterval(intervalId);
  intervalId = null;
}
document.querySelector('#start').addEventListener('click', changeColor);
document.querySelector('#stop').addEventListener('click', stopChangeColor);
 ```
