const play = document.getElementById("play");
const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const atrist = document.getElementById("atrist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
let prgress = document.getElementById("prgress");
let current_time = document.getElementById("current_time");
let durationdiv = document.getElementById("duration");
const progress_div = document.getElementById("progress_div");

const songs = [
  {
    name: "Sanam re",
    title: "Sanam Re",
    atrist: "Gulshan Kumar",
  },
  {
    name: "Mera Deewanapan",
    title: "Mera Deewanapan",
    atrist: "Arminder Gill",
  },
  {
    name: "Meray Paas Tum Ho",
    title: "Meray Paas Tum Ho",
    atrist: "Hadiya hashmi",
  },
  {
    name: "Theth Punjaban",
    title: "Theth Punjaban",
    atrist: "Gur Sindhu",
  },
];

let isPlaying = false;
// for play function

const playMusic = () => {
  isPlaying = true;
  music.play();
  music.volume = 0.5;
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

const loadSong = (songs) => {
  title.textContent = songs.title;
  atrist.textContent = songs.atrist;
  music.src = `audio/${songs.name}.mp3`;
  img.src = `images/${songs.name}.jpg`;
};
//update the music data

songIndex = 0;
// loadSong(songs);

const nextSong = () => {
  //   songIndex++;
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

//Previous Song
const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

// progress update
music.addEventListener("timeupdate", (event) => {
  //   console.log(event);
  const { currentTime, duration } = event.srcElement;
  //   console.log(currentTime, duration);
  let progress_time = (currentTime / duration) * 100;
  prgress.style.width = `${progress_time}%`;

  //total duration update
  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);

  if (sec_duration < 10) {
    sec_duration = `0${sec_duration}`;
  }

  let total_duration = `${min_duration}:${sec_duration}`;
  if (duration) {
    durationdiv.textContent = `${total_duration}`;
  }
  //current duration update
  let min_currentTime = Math.floor(currentTime / 60);
  let sec_currentTime = Math.floor(currentTime % 60);

  if (sec_currentTime < 10) {
    sec_currentTime = `0${sec_currentTime}`;
  }

  let total_currentTime = `${min_currentTime}:${sec_currentTime}`;
  current_time.textContent = `${total_currentTime}`;
});

progress_div.addEventListener("click", (event) => {
  const width = event.srcElement.clientWidth;
  const offset = event.offsetX;
  const duration = music.duration;
  //   const duration = music.duration;
  // let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;
    let move_progress = (offset/width)*duration;
  music.currentTime = move_progress;
});

music.addEventListener("ended", nextSong);

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
