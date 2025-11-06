const input = document.getElementById('customInput');

// When user focuses (clicks into) the input
input.addEventListener('focus', () => {
  // Always show placeholder when focusing an empty field
  if (input.value.trim() === '') {
    input.value = 'Type here';
    input.classList.add('placeholder-active');
    input.setSelectionRange(0, 0); // caret before "T"
  }
});

// If user starts typing while "Type here" is visible
input.addEventListener('keydown', (e) => {
  if (input.value === 'Type here') {
    input.classList.remove('placeholder-active');
    input.value = '';
  }
});

// When user clicks away (blurs)
input.addEventListener('blur', () => {
  // If user leaves field empty or only with placeholder
  if (input.value === 'Type here' || input.value.trim() === '') {
    // Fade out placeholder, then clear value after transition
    input.classList.remove('placeholder-active');
    setTimeout(() => {
      // only clear if still blurred and empty
      if (document.activeElement !== input && (input.value === 'Type here' || input.value.trim() === '')) {
        input.value = '';
      }
    }, 400); // matches CSS transition duration
  }
});
