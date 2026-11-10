const controls = document.querySelector('#timer-controls');
const modes = controls.querySelectorAll('[data-minutes]');
const countdown = document.querySelector('#countdown');
const toggle = document.querySelector('#toggle-timer');
const reset = document.querySelector('#reset-timer');
const status = document.querySelector('#timer-status');

let duration = Number(modes[0].dataset.minutes) * 60_000;
let remaining = duration;
let deadline = 0;
let interval;

function render() {
  const seconds = Math.ceil(remaining / 1000);
  const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
  const fraction = remaining / duration;
  countdown.textContent = `${minutes}:${String(seconds % 60).padStart(2, '0')}`;
  countdown.style.setProperty('--progress', `${fraction * 360}deg`);
}

function stop() {
  clearInterval(interval);
  deadline = 0;
}

function resetSession() {
  stop();
  remaining = duration;
  toggle.textContent = 'Start';
  status.textContent = '';
  render();
}

function tick() {
  remaining = Math.max(0, deadline - Date.now());
  render();
  if (remaining === 0) {
    stop();
    toggle.textContent = 'Start';
    status.textContent = 'Session complete.';
  }
}

toggle.addEventListener('click', () => {
  if (deadline) {
    tick();
    if (deadline) {
      stop();
      toggle.textContent = 'Resume';
    }
    return;
  }

  if (remaining === 0) resetSession();
  deadline = Date.now() + remaining;
  toggle.textContent = 'Pause';
  interval = setInterval(tick, 100);
});

reset.addEventListener('click', resetSession);

for (const mode of modes) {
  mode.addEventListener('click', () => {
    if (mode.getAttribute('aria-pressed') === 'true') return;

    for (const option of modes) {
      option.setAttribute('aria-pressed', String(option === mode));
    }

    duration = Number(mode.dataset.minutes) * 60_000;
    resetSession();
  });
}

controls.hidden = false;
