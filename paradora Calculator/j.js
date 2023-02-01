const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const setTimeBtn = document.getElementById("setTime");
const customTimeInput = document.getElementById("customTime");

let time = 1500; // 25 minutes in seconds
let intervalId;

const updateTime = () => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

startBtn.addEventListener("click", function() {
  intervalId = setInterval(() => {
    time--;
    if (time === 0) {
      clearInterval(intervalId);
    }
    updateTime();
  }, 1000);
});

stopBtn.addEventListener("click", function() {
  clearInterval(intervalId);
});

resetBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  time = 1500;
  updateTime();
});

setTimeBtn.addEventListener("click", function() {
  clearInterval(intervalId);
  time = customTimeInput.value * 60;
  updateTime();
});
