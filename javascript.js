const root = document.documentElement;

const theme = document.querySelector('.set-theme');
const alertButton = document.querySelector('.alert-button');
const themeButton = document.querySelectorAll('button');
const audio = document.querySelector('.alert-sound');
const themeSong = document.querySelector('.theme-song');


theme.addEventListener('click', () => {
    root.classList.toggle('dark');
});

alertButton.addEventListener('click', () => {
  themeSong.pause();
  themeSong.currentTime = 0;
  audio.currentTime = 0;
  audio.play();
})

themeButton.forEach(button => button.addEventListener('click', () => {
  audio.pause();
  audio.currentTime = 0;
  themeSong.currentTime = 0;
  themeSong.play();
}))





