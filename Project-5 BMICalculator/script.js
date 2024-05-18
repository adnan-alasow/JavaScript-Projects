let heightNumber = document.querySelector(".heightNumber");
let weightNumber = document.querySelector(".weightNumber");
let calculatedBMI = document.querySelector(".calculatedBMI");
let bmiMessage = document.querySelector(".bmiMessage");
let comments = document.querySelector('.comments')

function total() {
  if (heightNumber.value == "" || weightNumber.value == "") {
    bmiMessage.innerHTML = "Fill in the Blank";
    comments.innerHTML = "";
    return;
  }

  let inputHeight = Number(heightNumber.value);
  let inputWeight = Number(weightNumber.value);
  let calculate = Number(calculatedBMI.value);

  inputHeight = inputHeight / 100;

  let sum = bmiMessage.innerHTML = (inputWeight / (inputHeight * inputHeight)).toFixed(2);

  if(sum < 18.5){
    comments.innerHTML = "Underweight"
  } else if (sum > 18.5 < 24.9){
    comments.innerHTML = "Normal Weight "
  } else if(sum > 25 < 29.9){
    comments.innerHTML = "Overweight"
  } else {
    comments.innerHTML = "Obesity"
  }
  
}

calculatedBMI.addEventListener('click', total);

/*
BMI Categories:
Underweight = <18.5
Normal weight = 18.5–24.9
Overweight = 25–29.9
Obesity = BMI of 30 or greater
*/
// bmiMessage.innerHTML = Math.round(inputWeight / (inputHeight * inputHeight) * 703)
