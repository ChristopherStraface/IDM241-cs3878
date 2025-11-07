const input = document.getElementById('customInput');
const PLACEHOLDER = 'Type here';
const FADE_DURATION = 400; // match CSS duration

// When user focuses (clicks into) the input
input.addEventListener('focus', () => {
  if (input.value.trim() === '') {
    input.value = PLACEHOLDER;
    input.classList.add('placeholder-active');
    input.classList.remove('typing-active');
    input.setSelectionRange(0, 0); // caret before "T"
  }
});

// If user starts typing while "Type here" is visible
input.addEventListener('keydown', (e) => {
  if (
    input.classList.contains('placeholder-active') &&
    input.value === PLACEHOLDER
  ) {
    input.classList.remove('placeholder-active');
    input.classList.add('typing-active');
    input.value = '';
  }
});

// When user clicks away (blurs)
input.addEventListener('blur', () => {
  const val = input.value.trim();

  if (val === '' || val === PLACEHOLDER) {
    input.classList.remove('typing-active'); // 👈 remove user-text style
    input.classList.remove('placeholder-active');

    // After fade completes, clear only if still empty
    setTimeout(() => {
      if (
        document.activeElement !== input &&
        (input.value.trim() === '' || input.value === PLACEHOLDER)
      ) {
        input.value = '';
      }
    }, FADE_DURATION);
  } else {
    // User typed something — keep their text visible
    input.classList.remove('placeholder-active');
    input.classList.add('typing-active');
  }
});
