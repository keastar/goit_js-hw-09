// one by one
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';

const refs = {
  formEl: document.querySelector('.form'),
  btnEl: document.querySelector('button'),
};
//переменные, которые берутся из HTML-значения:
// console.log(refs.formEl);

refs.formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const dataParams = {};

  for (const [key, value] of formData.entries()) {
    dataParams[key] = Number(value);
  }

  let { delay, step, amount } = dataParams;

  console.log(delay);
  console.log(step);
  console.log(amount);

  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });

    delay += step;

    refs.formEl.reset();
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}
// console.log(createPromise);

// makePromise().then(onMakePromiseSuccess).catch(onMakePromiseError);

// function onMakePromiseSuccess(result) {
//   console.log(`✅ Fulfilled promise pos in ms`);
//   console.log(result);
// }

// function onMakePromiseError(error) {
//   console.log(`❌ Rejected promise  in ms`);
//   console.log(error);
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   return new Promise((resolve, reject) => {
//     if (shouldResolve) {
//       // Fulfill
//       resolve('Промис выполнился успешно с результатом Fulfilled');
//     } else {
//       // Reject
//       reject('Промис выпонился с ошибкой и был откланен Rejected');
//     }
//   });
// }
// console.log(createPromise);

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     let DELAY = 1000;

//     const passed = Math.random() > 0.3;

//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Fulfilled promise $position in $delayms`);
//       }
//       reject(`❌ Rejected promise $position in $delayms`);
//     }, DELAY);
//   });
// };

// makePromise().then(onMakePromiseSuccess).catch(onMakePromiseError);

// function onMakePromiseSuccess(result) {
//   console.log(`✅ Fulfilled promise pos in ms`);
//   console.log(result);
// }

// function onMakePromiseError(error) {
//   console.log(`❌ Rejected promise  in ms`);
//   console.log(error);
// }

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.3;
//   setTimeout(() => {
//     if (canFulfill) {
//       // Fulfill
//       resolve('Промис выполнился успешно с результатом Fulfilled');
//     } else {
//       // Reject
//       reject('Промис выпонился с ошибкой и был откланен Rejected');
//     }
//   }, 2000);
// });
// console.log(promise);
// promise выполнился успешно после 2сек загрузки экрана, т.к. код асинхронный
// результат выполнения промиса вернется и загрузится после 2 сек, т.к.используем setTimeout
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
// promise
//   .then (result => {
//      console.log(result);
//      return 5;
// })
//   .then (x => {
//      console.log(x);
//      return 10;
//   },
//      error => console.log(error);
// )
//   .then (
//      y => {console.log(y)},
//      error => {console.log(error)};
//   )
// или без error в каждом then, а с .catch вконце:
// .catch (error => console.log(error))
// .fanilly(() => console.log('Будет выполнен в любом случае'));
