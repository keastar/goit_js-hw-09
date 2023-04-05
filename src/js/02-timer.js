import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

// all modules
// import Notiflix from 'notiflix';

// one by one
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import { Report } from 'notiflix/build/notiflix-report-aio';
// import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
// import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Block } from 'notiflix/build/notiflix-block-aio';

const refs = {
    dateInputEl: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('button[data-start]'),
    clockFace: document.querySelector('.timer'),
};

const data = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
};

let IntervalId;


const options = {
    enableTime: true,
    time_24hr: true,
    altInput: true,
    altFormat: 'd M Y H:i',
    dateFormat: 'Y-m-d H:i',
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: (selectedDates) => {
        console.log(selectedDates);
         if (selectedDates[0] < new Date()) {
             window.alert('please choose another date in the future');
             refs.startBtn.addAttribute('disabled');
         } else {
             refs.startBtn.removeAttribute('disabled');

        }
    },
};


refs.startBtn.addEventListener('click', () => {
    const targetTime = fp.selectedDates[0];
    clearInterval(IntervalId);
                 IntervalId = setInterval(() => {
                     const deltaTime =  targetTime - new Date();
                     const { days, hours, minutes, seconds } = convertMs(deltaTime);
                     // Update the timer interface
                     data.days.textContent = days;
                     data.hours.textContent = hours;
                     data.minutes.textContent = minutes;
                     data.seconds.textContent = seconds;
                     if (deltaTime <= 1000) {
                         clearInterval(IntervalId);
                     }
                 }, 1000);
                 
             });

const fp = flatpickr(refs.dateInputEl, options);
// console.log(fp);

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

