window.addEventListener("load", () => {
  const progressBar = document.getElementById("progress-bar");
  const progressText = document.getElementById("progress-text");
  const loader = document.getElementById("loader");
  const main = document.getElementById("main");

  let percent = 0;
  const interval = setInterval(() => {
    percent += Math.floor(Math.random() * 15) + 5;
    if (percent >= 100) percent = 100;

    progressBar.style.width = percent + "%";
    progressText.textContent = `Loading... ${percent}%`;

    if (percent === 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.style.display = "none";
        main.classList.remove("hidden");
      }, 300);
    }
  }, 200);
});
