const input = document.getElementById('customInput');

// When user focuses (clicks into) the input
input.addEventListener('focus', () => {
  if (input.value === '') {
    input.value = 'Type here';
    input.style.color = '#aaa';
  }
});

// If user starts typing while "Type here" is visible
input.addEventListener('keydown', (e) => {
  if (input.value === 'Type here') {
    input.value = '';
    input.style.color = '#000';
  }
});

// When user clicks away (blurs)
input.addEventListener('blur', () => {
  if (input.value === 'Type here' || input.value === '') {
    input.value = ''; // clear it when leaving the field
  }
});
