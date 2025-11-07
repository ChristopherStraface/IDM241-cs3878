const input = document.getElementById('customInput');
const PLACEHOLDER = 'Type here';
const FADE_DURATION = 400;

let isPlaceholderActive = false; // 👈 tracks if placeholder text was programmatically set

// When user focuses (clicks into) the input
input.addEventListener('focus', () => {
  if (input.value.trim() === '') {
    input.value = PLACEHOLDER;
    input.classList.add('placeholder-active');
    input.classList.remove('typing-active');
    input.setSelectionRange(0, 0);
    isPlaceholderActive = true; // placeholder is now showing
  }
});

// If user starts typing while "Type here" is visible
input.addEventListener('keydown', (e) => {
  if (isPlaceholderActive && input.value === PLACEHOLDER) {
    input.classList.remove('placeholder-active');
    input.classList.add('typing-active');
    input.value = '';
    isPlaceholderActive = false; // user began typing
  }
});

// When user clicks away (blurs)
input.addEventListener('blur', () => {
  const val = input.value.trim();

  if ((val === '' || (val === PLACEHOLDER && isPlaceholderActive))) {
    // Only fade if placeholder was truly active (not user typed)
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
    // User text (even if it's literally "Type here") stays visible
    input.classList.remove('placeholder-active');
    input.classList.add('typing-active');
    isPlaceholderActive = false;
  }
});
