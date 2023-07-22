const menu = document.querySelector('.menu');
const modeToggle = document.querySelector('#mode-toggle');
const body = document.querySelector('body');


modeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
  } else {
    modeToggle.innerHTML = '<i class="fas fa-moon"></i>';
  }
});

// Check user's preferred color scheme
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  body.classList.add('dark-mode');
  modeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}
