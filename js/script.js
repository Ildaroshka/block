const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');
const overlay = document.getElementById('overlay');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('open');
  overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
  burger.classList.remove('active');
  nav.classList.remove('open');
  overlay.classList.remove('active');
});