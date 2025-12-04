const input = document.getElementById('customInput');
const PLACEHOLDER = 'Type here';
const FADE_DURATION = 400;
const letters = document.querySelectorAll('.letter-nav a');
let isPlaceholderActive = false;

input.addEventListener('focus', () => {
  if (input.value.trim() === '') {
    input.value = PLACEHOLDER;
    input.classList.add('placeholder-active');
    input.classList.remove('typing-active');
    input.setSelectionRange(0, 0);
    isPlaceholderActive = true;
  }
});

input.addEventListener('keydown', (e) => {
  if (isPlaceholderActive && input.value === PLACEHOLDER) {
    input.classList.remove('placeholder-active');
    input.classList.add('typing-active');
    input.value = '';
    isPlaceholderActive = false;
  }
});

input.addEventListener('blur', () => {
  const val = input.value.trim();

  if ((val === '' || (val === PLACEHOLDER && isPlaceholderActive))) {
    input.classList.remove('typing-active');
    input.classList.remove('placeholder-active');

    setTimeout(() => {
      if (
        document.activeElement !== input &&
        (input.value.trim() === '' || (input.value === PLACEHOLDER && isPlaceholderActive))
      ) {
        input.value = '';
        isPlaceholderActive = false;
      }
    }, FADE_DURATION);
  } else {
    input.classList.remove('placeholder-active');
    input.classList.add('typing-active');
    isPlaceholderActive = false;
  }
});


const params = new URLSearchParams(window.location.search);
const currentLetter = params.get('letter');

if (currentLetter) {
  document.querySelectorAll('.letter-nav a').forEach(a => {
    if (a.textContent === currentLetter) {
      a.classList.add('active');
    }
  });
}

letters.forEach(letter => {
  letter.addEventListener('click', () => {
    letters.forEach(l => l.classList.remove('active'));
    letter.classList.add('active');
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.top-nav .nav-item a');

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});


