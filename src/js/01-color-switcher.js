// Находим слушателя
const refs = {
    bodyEl: document.querySelector('body'),
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]')

};

// Вешаем слушателя на кнопки
refs.btnStart.addEventListener('click', onClickStartColor);
refs.btnStop.addEventListener('click', onClickStopColor);

// Глобальная переменная timerId
let timerId = null;

   startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
      bodyEl.style.background = colorRandom;
  }, 1000);
});

// Функция- цвет
function onClickStartColor() {
    btnStart.disabled = true;
    btnStop.disabled = false;
}



// stopBtn.addEventListener("click", () => {
//   clearInterval(timerId);
//   console.log(`Interval with id ${timerId} has stopped!`);
// });





function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}