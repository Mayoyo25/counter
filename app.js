// select all buttons
const buttons = document.querySelectorAll('.btn');
// select count container (h1)
const counterDisplay = document.querySelector('h1');
// count pop up
const popUp = document.querySelector('p');
// intialize count
let count = 0;
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const buttonClass = button.classList;
    if (buttonClass.contains('decrease')) {
      count--;
      counterDisplay.innerHTML = count;
    }
    if (buttonClass.contains('increase')) {
      count++;
      counterDisplay.innerHTML = count;
    }
    if (buttonClass.contains('reset')) {
      count = 0;
      counterDisplay.innerHTML = count;
      popUp.classList.remove('show');
    }
    //styling
    switch (true) {
      case count > 0:
        counterDisplay.style.color = 'green';
        break;
      case count < 0:
        counterDisplay.style.color = 'red';
        break;
      default:
        counterDisplay.style.color = 'black';
    }
    //pop
    if (count >= 33) {
      popUp.classList.add('show');
      popUp.innerHTML = 'subhanallah';
    }
    if (count >= 66) {
      popUp.innerHTML = 'Alhamdulillah';
    }
    if (count >= 99) {
      popUp.innerHTML = 'allahu akbar';
    }
    if (count >= 100) {
      popUp.innerHTML = 'la ilaha illalah';
    }
    if (count > 100 || count < 33) {
      popUp.classList.remove('show');
    }
  });
});
