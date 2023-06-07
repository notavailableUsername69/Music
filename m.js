var audioPlayer = document.getElementById('audioPlayer');

function playSong(song) {
  audioPlayer.src = song;
  audioPlayer.play();
}

function togglePlay() {
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}

function stop() {
  audioPlayer.pause();
  audioPlayer.currentTime = 0;
}