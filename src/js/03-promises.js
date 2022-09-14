import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Достаём елементы
const refs = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
  button: document.querySelector('button'),
  
}

refs.form.addEventListener('submit', onFormSubmit);



/*Дополни код функции createPromise так, чтобы она возвращала 
один промис, который выполянется или отклоняется через delay 
времени. Значением промиса должен быть объект, в котором будут 
свойства position и delay со значениями одноименных параметров. 
Используй начальный код функции для выбора того, что нужно сделать 
с промисом - выполнить или отклонить.
 */
function createPromise(position, delay) {
  return new Promise((fulfill, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
     
      if (shouldResolve) {
        fulfill({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

 

function onFormSubmit(e) {
  e.preventDefault();

 let evtDelay = Number(refs.delay.value);
let evtStep = Number(refs.step.value);
let evtAmount = Number(refs.amount.value);

  // Через фор вычесляем значения
  for (let i = 1; i <= evtAmount; i++) {

    /*Код функции createPromise так, чтобы она возвращала один промис,
     который выполянется или отклоняется через delay времени.
    */
    createPromise(i, evtDelay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
       })
    
      .catch(({ position, delay }) => {
     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
    evtDelay += evtStep;

  }
}
      


