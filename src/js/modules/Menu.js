const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

function closeMenu(item) {
  document.querySelector(item).addEventListener('click', () => {
    menu.classList.remove('active');
  });
}

closeMenu('.menu__close');
closeMenu('.menu__overlay');
