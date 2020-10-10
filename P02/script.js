const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const atrist = document.getElementById("atrist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");

const songs = [
  {
    name: "Sanam re",
    title: "Sanam Re",
    atrist: "Gulshan Kumar",
  },
  {
    name: "Sanam re",
    title: "Sanam Re",
    atrist: "Gulshan Kumar",
  },
];

let isPlaying = false;
// for play function

const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("animations");
};
// for pause function

const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("animations");
};

play.addEventListener("click", () => {
  //   if (isPlaying) {
  //     pauseMusic();
  //   } else {
  //     playMusic();
  //   }
  isPlaying ? pauseMusic() : playMusic();
});

//
