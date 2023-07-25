const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
var menuList = document.getElementById('menuList');
menuList.style.maxHeight = "0px";
function togglemenu() {
if(menuList.style.maxHeight == "0px")
{
menuList.style.maxHeight = "200px"
}
else {
menuList.style.maxHeight = "0px"
}
}

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