
let countdown;
function startCountdown() {
  clearInterval(countdown); // clear any previous timers
  const input = document.getElementById('numberInput');
  let value = parseInt(input.value);

  const display = document.getElementById('countDisplay');
  display.classList.remove('finished');

  if (isNaN(value) || value <= 0) {
    display.textContent = "Enter a valid number!";
    return;
  }

  display.textContent = value;

  countdown = setInterval(() => {
    value--;
    display.textContent = value;
    if (value <= 0) {
      clearInterval(countdown);
      display.textContent = "Time's up!";
      display.classList.add('finished');
    }
  }, 1000);
}
