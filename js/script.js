function initMedia() {
  console.log("initMedia called");
  const backgroundMusic = document.getElementById('background-music');
  if (!backgroundMusic) {
    console.error("Media elements not found");
    return;
  }
  backgroundMusic.volume = 0.3;
}

document.addEventListener("DOMContentLoaded", function() {
    const startScreen = document.getElementById("start-screen");
    const backgroundMusic = document.getElementById('background-music');

    startScreen.addEventListener("click", () => {
        startScreen.classList.add("hidden");
        backgroundMusic.muted = false;
        backgroundMusic.play().catch(err => {
            console.err("couldn't play music, ", err)
        })
    })
})