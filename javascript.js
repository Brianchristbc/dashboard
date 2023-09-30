const root = document.documentElement;

const theme = document.querySelector('.set-theme');
const alertButton = document.querySelector('.alert-button');


theme.addEventListener('click', () => {
    root.classList.toggle('dark');
});

window.addEventListener('click', () => {
  const audio = document.querySelector('.alert-sound');
  audio.currentTime = 0;
  audio.play();
})





