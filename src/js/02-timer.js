// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    btnStart: document.querySelector('button[data-start]'),

}





/*Адская копипаста с библиотеки!
Для подсчета значений используй готовую функцию convertMs, 
где ms - разница между конечной и текущей датой в миллисекундах.
Показывая четыре цифры: дни, часы, минуты и секунды в формате xx:xx:xx:xx.
 */
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = this.addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = this.addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = this.addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = this.addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

/* Форматирование времени!
Принимает число, приводит к строке и добавляет 
в начало 0 если число меньше 2-х знаков.
 */
function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}