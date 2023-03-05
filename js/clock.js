const clock = document.querySelector(".clock .clock__text");

function getTime() {
  const now = new Date();
  clock.innerHTML = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
}

document.addEventListener("DOMContentLoaded", () => {
  getTime();
  setInterval(getTime, 1000);
});
