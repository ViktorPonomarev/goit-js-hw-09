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
    refs.btnStart.disabled = true;
    refs.btnStop.disabled = false;

    timerId = setInterval(() => {
        refs.bodyEl.style.background = getRandomHexColor();
       
  }, 1000);
}

// Функция: стоп- цвет
function onClickStopColor() {
    refs.btnStart.disabled = false;
    refs.btnStop.disabled = true;
    clearInterval(timerId);
    
} 
