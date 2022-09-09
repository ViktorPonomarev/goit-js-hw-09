// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";

const refs = {
  btnStart: document.querySelector('button[data-start]'),
  clockface: document.querySelector('#datetime-picker'),
};

/*Запускаем таймер с помощью
"Адской копипасты"
 */
class Timer {
  constructor({onTick}) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;

    this.init();
  }

  init() {
    const time = this.convertMs(0);
    this.onTick(time);
  }

    start() {
    if (this.isActive) {
      return;
}

    const startTime = Date.now();
    this.isActive = true;

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      const time = this.convertMs(deltaTime);
      
      this.onTick(time);
      console.log(time);
}, 1000);
  }
  

  /*Адская копипаста с библиотеки!
Для подсчета значений используй готовую функцию convertMs, 
где ms - разница между конечной и текущей датой в миллисекундах.
Показывая четыре цифры: дни, часы, минуты и секунды в формате xx:xx:xx:xx.
 */
convertMs(ms) {
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
  

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

/* Форматирование времени!
Принимает число, приводит к строке и добавляет 
в начало 0 если число меньше 2-х знаков.
 */
addLeadingZero(value) {
    return String(value).padStart(2, '0');
  }
  
}

const timer = new Timer({
  onTick: updateClockfase,
});

refs.btnStart.addEventListener('click', timer.start.bind(timer));



/*Принимает время в милисекундах
Вичесляет сколько в них вмещает дней, часов, минут, секунд
 */
function updateClockfase({ days, hours, minutes, seconds }) {
  refs.clockface.textContent = `${days}:${hours}:${minutes}:${seconds}`;
}
console.log(refs.clockface.textContent);

/*Библиотека flatpickr Дата и время.
 */
const flatpickr = flatpickr("#datetime-picker", options = {
  enableTime: true,
  dateFormat: "Y-m-d H:i",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(`Выбранная дата: ${selectedDates[0]}`);
  },
});





