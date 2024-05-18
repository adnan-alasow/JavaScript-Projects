"use strict";

let billInput = document.querySelector(".billInput");
let slider = document.querySelector(".slider");
let percentage = document.querySelector(".percentage");
let amountTip = document.querySelector(".amountTip");
let billWithTip = document.querySelector(".billWithTip");

function changeBill(e) {
  let billValue = billInput.value;
  let tip = slider.value;

  percentage.innerHTML = `${tip}%`
  

  if(billValue === ""){
    return
  }

  let tipValue = Number(billValue) * (tip / 100)

  amountTip.value = tipValue

  let totalBill = Number(billValue) + tipValue
  
  billWithTip.value = totalBill
  

  
}

billInput.addEventListener("keyup", changeBill);
slider.addEventListener("change", changeBill);
