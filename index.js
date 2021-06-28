const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  containerBtn: document.querySelector("div"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

// refs.body.style = "background: #2196F3";
refs.startBtn.style =
  "background:#66CD00;width: 100px; height: 40px; border-radius: 50%;";
refs.stopBtn.style =
  "background:#ff6666;width: 100px; height: 40px; border-radius: 50%;";
refs.containerBtn.style =
  "display: flex;justify-content: space-around;margin-top: 80px;margin-right: auto;margin-left: auto;width: 300px; height: 300px";

//listeners
refs.startBtn.addEventListener("click", onStartBtn);
refs.stopBtn.addEventListener("click", onStopBtn);
// let timerId = setInterval(changeColor, 1000, 1000);
let timerId = null;
let isActive = false;
function onStartBtn() {
  if (isActive) {
    return;
  }
  isActive = true;
  timerId = setInterval(changeColor, 1000, 1000);
}
function onStopBtn() {
  isActive = false;
  clearInterval(timerId);
}
function changeColor() {
  refs.body.style.background =
    colors[randomIntegerFromInterval(0, colors.length - 1)];
}

//Для генерации случайного числа
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
