const strbuttonEl = document.querySelector('[data-start]');
const stpbuttonEl = document.querySelector('[data-stop]');
const bgColorEl = document.querySelector('body');
let IntervalId;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

strbuttonEl.addEventListener('click', changeColor);
stpbuttonEl.addEventListener('click', stopColor);  

function changeColor() {
    strbuttonEl.setAttribute('disabled', true);
    stpbuttonEl.removeAttribute('disabled', true);
  // check if an interval has already been set up
    if (!IntervalId) {
    // setInterval()
        IntervalId = setInterval(changeBg, 1000);
        
  }
}

function changeBg (event) {
  bgColorEl.style.backgroundColor = getRandomHexColor();
//   codeColorEl.textContent = bgColorEl.style.backgroundColor;   
}

function stopColor() {
    strbuttonEl.removeAttribute('disabled', true);
    stpbuttonEl.setAttribute('disabled', true);
    clearInterval(IntervalId);
  // release our intervalID from the variable
  IntervalId = null;
}



