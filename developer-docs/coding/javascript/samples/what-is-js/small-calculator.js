// Sum operation

const reset = document.getElementById('reset');
reset.addEventListener('click', resetValues);

function resetValues() {
  document.getElementById('result').classList.add('result--hidden');
  document.getElementById('value1').value = '';
  document.getElementById('value2').value = '';
}

// Operator buttons

const subtract = document.getElementById('substract');
subtract.addEventListener('click', subtractValues);

function subtractValues() {
  value1 = parseFloat(document.getElementById('value1').value);
  value2 = parseFloat(document.getElementById('value2').value);

  console.log(value1, value2);

  if(value1 == 0 || value2 == 0) {
    return;
  }

  result = value1 - value2;
  resetValues();
  document.getElementById('result').classList.remove('result--hidden');
  document.getElementById('result').textContent = `Your result is: ${result}`;
}

const sum = document.getElementById('addition');
sum.addEventListener('click', sumValues);


function sumValues() {
  value1 = parseFloat(document.getElementById('value1').value);
  value2 = parseFloat(document.getElementById('value2').value);

  if(value1 == 0 || value2 == 0) {
    return;
  }
  result = value1 + value2;
  resetValues();
  document.getElementById('result').classList.remove('result--hidden');
  document.getElementById('result').textContent = `Your result is: ${result}`;
}

const inputs = document.querySelectorAll('#operation input');
inputs.forEach((input) => {
  input.addEventListener('keyup', validateForm); 
  input.addEventListener('blur', validateForm);
})
