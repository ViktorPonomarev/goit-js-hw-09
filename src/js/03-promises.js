import { Notify } from 'notiflix/build/notiflix-notify-aio';

// Достаём елементы
const refs = {
  form: document.querySelector('.form'),
  dalay: document.querySelector('[name=delay]'),
  step: document.querySelector('[name=step]'),
  amount: document.querySelector('[name=amount]'),
  button: document.querySelector('button'),
  
}

let evtDalay = Number(refs.dalay.value);
let evtStep = Number(refs.dalay.value);
let evtAmount = Number(refs.dalay.value);

// refs.button.addEventListener('click', e => {
//   for (let i = 0; i < strongs.length; i += 1) {
//     strongs[i].style.cssText = `color: yellow;`;
//   }

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
  } else {
    // Reject
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });