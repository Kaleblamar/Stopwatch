//Buttons
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

//Digits
let textMinutes = document.querySelector("#minutes");
let textSeconds = document.querySelector("#seconds");
let textTens = document.querySelector("#tens");
let tens = 00;
let seconds = 0;
let minutes = 0;

let interval;

const startTimer = () => {
  tens++;
  if (tens <= 9) {
    textTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    textTens.innerHTML = tens;
  }
  if (tens > 99) {
    seconds++;
    tens = 0;
    textSeconds.innerHTML = "0" + seconds;
    textTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    textSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    textMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    textSeconds.innerHTML = "0" + 0;
  }
};

startBtn.addEventListener("click", function () {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", function () {
  clearInterval(interval);
});

resetBtn.addEventListener("click", function () {
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  textTens.innerHTML = tens;
  textSeconds.innerHTML = seconds;
  textMinutes.innerHTML = minutes;
});
