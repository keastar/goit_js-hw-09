import Notiflix from 'notiflix';

// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Block } from 'notiflix/build/notiflix-block-aio';

// const refs = {
//   delayInputEl: document.querySelector('#datetime-picker'),
//   stepMsInputEl: document.querySelector('button[data-start]'),
//   amountInputEl: document.querySelector('.timer'),
// };

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfill
//     resolve('Промис выполнился успешно с результатом Fulfilled');
//   } else {
//     // Reject
//     reject('Промис выпонился с ошибкой и был откланен Rejected');
//   }
// }
// console.log(createPromise);

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.3;
  setTimeout(() => {
    if (canFulfill) {
      // Fulfill
      resolve('Промис выполнился успешно с результатом Fulfilled');
    } else {
      // Reject
      reject('Промис выпонился с ошибкой и был откланен Rejected');
    }
  }, 2000);
});
// console.log(promise);
//promise выполнился успешно после 2сек загрузки экрана, т.к. код асинхронный
//результат выполнения промиса вернется и загрузится после 2 сек, т.к.используем setTimeout
// promise.then(
//   //метод .then можно передать 2ве ф-ции  .then(on Success, onError);
//   //ф-ция возвращает через 2ве сек результат resolve в виде текста

//   result => {
//     // результат resolve
//     // console.log(result);
//     console.log(`${result}`);
//   },
//   //ф-ция возвращает через 2ве сек результат reject в виде текста
//   error => {
//     // результат reject
//     // console.log(error);
//     console.log(`${error}`);
//   }
// );
//цепочки промисов: result - возвращает успешный resolve
// и результат return 5 передается из 1го then, как промис(успеха) и 2й then возвращает х=5 => 5;
// и результат return 10 передается из 2го then, как промис(успеха) и 3й then возвращает y=10 => 10;
promise
  .then(result => {
    console.log(result);
    return 5;
  })
  .then(x => {
    console.log(x);
    return 10;
  })
  .then(y => {
    console.log(y);
  });
