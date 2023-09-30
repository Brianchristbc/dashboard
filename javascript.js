const root = document.documentElement;

const theme = document.querySelector('.set-theme');
const alertButton = document.querySelector('.alert-button');
const themeSong = document.querySelector('.theme-song');
const stanley = document.querySelector('.stanley');
const dwight = document.querySelector('.dwight');
const jim = document.querySelector('.jim');
const michael = document.querySelector('.michael');
const stanleyAudio = document.querySelector('.stanley-mp4');
const dwightAudio = document.querySelector('.dwight-mp4');
const jimAudio = document.querySelector('.jim-mp4');
const michaelAudio = document.querySelector('.michael-mp4');


theme.addEventListener('click', () => {
    root.classList.toggle('dark');
});

alertButton.addEventListener('click', () => {
  if (themeSong.currentTime > 0) {
    themeSong.pause();
    themeSong.currentTime = 0;
  } else if (themeSong.currentTime === 0) {
    themeSong.play();
  }
})

stanley.addEventListener('click', () => {
  if (stanleyAudio.currentTime > 0) {
    stanleyAudio.pause();
    stanleyAudio.currentTime = 0;
  } else if (stanleyAudio.currentTime === 0) {
    stanleyAudio.play();
  }
})

michael.addEventListener('click', () => {
  if (michaelAudio.currentTime > 0) {
    michaelAudio.pause();
    michaelAudio.currentTime = 0;
  } else if (michaelAudio.currentTime === 0) {
      michaelAudio.play();
    }
  })

  jim.addEventListener('click', () => {
    if (jimAudio.currentTime > 0) {
      jimAudio.pause();
      jimAudio.currentTime = 0;
    } else if (jimAudio.currentTime === 0) {
        jimAudio.play();
    }
  })

  dwight.addEventListener('click', () => {
    if (dwightAudio.currentTime > 0) {
      dwightAudio.pause();
      dwightAudio.currentTime = 0;
    } else if (dwightAudio.currentTime === 0) {
        dwightAudio.play();
    }
  })
  






