// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

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

// Функция: цвет
function onClickStartColor() {
    btnStart.disabled = true;
    btnStop.disabled = false;

    timerId = setInterval(() => {
        colorRandom = getRandomHexColor();
        bodyEl.style.background = colorRandom;
  }, 1000);
}

// Функция: стоп- цвет
function onClickStopColor() {
    btnStart.disabled = false;
    btnStop.disabled = true;
    clearInterval(timerId);
    
} 

//    btnStart.addEventListener("click", () => {
//   timerId = setInterval(() => {
//       bodyEl.style.background = colorRandom;
//   }, 1000);
//    });

//    btnStop.addEventListener("click", () => {
//   clearInterval(timerId);
  
// });