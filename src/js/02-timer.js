// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
// Библиотека уведомлений
import Notiflix from 'notiflix';


// Достаём елементы
const selector = document.querySelector('#datetime-picker');

const timer = document.querySelector('.timer');

const field = Array.from(document.querySelectorAll('.field'));

const value = Array.from(document.querySelectorAll('.value'));

const label = Array.from(document.querySelectorAll('.label'));

const btnStart = document.querySelector('button[data-start]');

const days = document.querySelector('[data-days]');

const hours = document.querySelector('[data-hours]');

const minutes = document.querySelector('[data-minutes]');

const seconds = document.querySelector('[data-seconds]');

// Работаем с кнопкой 
// Оформление таймера стилями
btnStart.disabled = true;
timer.style.display = 'flex';
timer.style.marginTop = '10px';

field.forEach(e => {
  e.style.marginRight = '30px';
});

value.forEach(e => {
  e.style.fontSize = '30px';
  e.style.fontFamily = 'Impact,Charcoal,sans-serif';
  e.style.fontStyle = 'italic';
});

label.forEach(e => {
  e.style.fontSize = '30px';
  e.style.fontFamily = 'Impact,Charcoal,sans-serif';
  e.style.fontStyle = 'italic';
});

// Опции библиотеки flatpickr
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    let deltaTime = selectedDates[0].getTime() - currentDate;

    if (deltaTime <= 0) {
      Notiflix.Notify.warning('Please choose a date in the future');
    } else {
      btnStart.disabled = false;
      selector.disabled = false;

      btnStart.addEventListener('click', () => {
      btnStart.disabled = true;
        selector.disabled = true;

        const timer = setInterval(() => {
          
        const newTime = Date.now();
        this.isActive = true;
        const newDelta = selectedDates[0].getTime() - newTime;
        const newTimeComp = convertMs(newDelta);
        seconds.textContent = addLeadingZero(newTimeComp.seconds);
        minutes.textContent = addLeadingZero(newTimeComp.minutes);
        hours.textContent = addLeadingZero(newTimeComp.hours);
        days.textContent = addLeadingZero(newTimeComp.days);
        console.log(newDelta);
        if (newDelta <= 1000) {
        clearInterval(timer);

            
          }
        }, 1000);
      });
    }
  },

};

flatpickr(selector, options);

const currentDate = Date.now();

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


















// const refs = {
//   btnStart: document.querySelector('button[data-start]'),
//   clockface: document.querySelector('#datetime-picker'),
//   days: document.querySelector('[data-days]'),
//   hours: document.querySelector('[data-hours]'),
//   minutes: document.querySelector('[data-minutes]'),
//   seconds: document.querySelector('[data-seconds]'),

//   timer: document.querySelector('.timer'),
//   field: document.querySelector('.field'),

// };



// /* Оформление таймера стилями
//  */
// // refs.timer.style.display = 'flex';
// // refs.timer.style.marginTop = '10px';
// // refs.field.marginRight = '10px';

// /*Запускаем таймер с помощью
// "Адской копипасты"
//  */
// class Timer {
//   constructor({onTick}) {
//     this.intervalId = null;
//     this.isActive = false;
//     this.onTick = onTick;

//     this.init();
//   }

//   init() {
//     const time = this.convertMs(0);
//     this.onTick(time);
//   }

//     start() {
//     if (this.isActive) {
//       return;
//         }
      
// /* Создаём таймер, он будет считать!
//  */
//     const startTime = Date.now();
//     this.isActive = true;

//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now();
//       const deltaTime = selectedDates[0].startTime - currentTime;
//       const time = this.convertMs(deltaTime);
      
//       this.onTick(time);
//       console.log(time);
// }, 1000);
//   }
  

//   /*Адская копипаста с библиотеки!
// Для подсчета значений используй готовую функцию convertMs, 
// где ms - разница между конечной и текущей датой в миллисекундах.
// Показывая четыре цифры: дни, часы, минуты и секунды в формате xx:xx:xx:xx.
//  */
// convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = this.addLeadingZero(Math.floor(ms / day));
//   // Remaining hours
//   const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
//   // Remaining minutes
//   const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
//   // Remaining seconds
//   const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
//   return { days, hours, minutes, seconds };
//   }
  
  
// /* Форматирование времени!
// Принимает число, приводит к строке и добавляет 
// в начало 0 если число меньше 2-х знаков.
//  */
// addLeadingZero(value) {
//     return String(value).padStart(2, '0');
//   }
  
// }

// const timer = new Timer({
//   onTick: updateClockfase,
// });

// refs.btnStart.addEventListener('click', timer.start.bind(timer));



// /*Принимает время в милисекундах
// Вичесляет сколько в них вмещает дней, часов, минут, секунд
//  */
// function updateClockfase({ days, hours, minutes, seconds }) {
//   // refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
//   refs.days.textContent = `${days}`;
//   refs.hours.textContent = `${hours}`;
//   refs.minutes.textContent = `${minutes}`;
//   refs.seconds.textContent = `${seconds}`;
// }
// console.log(refs.clockface.textContent);

// /*Библиотека flatpickr Дата и время.
//  */
// const flatpickr = flatpickr("#datetime-picker", options = {
//   enableTime: true,
//   dateFormat: "Y-m-d H:i",
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     console.log(`Выбранная дата: ${selectedDates[0]}`);
//   },
// });






