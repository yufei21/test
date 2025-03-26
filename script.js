document.addEventListener("DOMContentLoaded", () => {
    const audio = new Audio();
    let playingElement = null;
  
    document.querySelectorAll(".album-item .fa-play-circle").forEach(playButton => {
      playButton.addEventListener("click", () => {
        const albumItem = playButton.closest(".album-item");
        const audioSrc = albumItem.getAttribute("data-src");
        
        if (playingElement === albumItem) {
          if (audio.paused) {
            audio.play();
            playButton.classList.remove("fa-play-circle");
            playButton.classList.add("fa-pause-circle");
          } else {
            audio.pause();
            playButton.classList.remove("fa-pause-circle");
            playButton.classList.add("fa-play-circle");
          }
        } else {
          if (playingElement) {
            playingElement.querySelector(".fa-pause-circle").classList.replace("fa-pause-circle", "fa-play-circle");
          }
          audio.src = audioSrc;
          audio.play();
          playButton.classList.replace("fa-play-circle", "fa-pause-circle");
          playingElement = albumItem;
        }
      });
    });
  });