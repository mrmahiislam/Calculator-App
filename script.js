const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const modeToggle = document.getElementById('modeToggle');

// Calculator button functionality
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;
    const action = btn.dataset.action;

    // Numbers
    if(btn.classList.contains('number')){
      if(display.textContent === '0') display.textContent = value;
      else display.textContent += value;
    }

    // Actions
    if(action){
      if(action === 'clear') {
        display.textContent = '0';
      }
      else if(action === 'delete') {
        display.textContent = display.textContent.slice(0, -1) || '0';
      }
      else if(action === '='){
        try {
          // Replace × and ÷ with * and / for eval
          display.textContent = eval(display.textContent.replace(/×/g,'*').replace(/÷/g,'/'));
        } catch {
          display.textContent = 'Error';
        }
      }
      else { // Operators (+, -, *, /)
        display.textContent += action;
      }
    }
  });
});

// Dark/Light Mode Toggle
// Dark is default, Light mode enabled when toggle is checked
modeToggle.addEventListener('change', () => {
  if(modeToggle.checked){
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
});
