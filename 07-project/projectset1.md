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
