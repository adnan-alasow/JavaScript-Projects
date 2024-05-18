let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let ampm = document.querySelector(".amPm");

function updateClock() {
  let date = new Date();
  let h = date.getHours();
  let mt = date.getMinutes();
  let sec = date.getSeconds();
  let zone = "am";

  if (h > 12) {
    zone = "PM";
    h = h - 12;
  }

  // 13, 14,15,16,17

  h = h < 10 ? `0${h}` : h;
  mt = mt < 10 ? `0${mt}` : mt;
  sec = sec < 10 ? `0${sec}` : sec;

  hours.innerHTML = h;
  minutes.innerHTML = mt;
  seconds.innerHTML = sec;
  ampm.innerHTML = zone;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();

// setInterval(()=>{
//   updateClock()
// }, 1000)


