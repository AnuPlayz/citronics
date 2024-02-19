// preloader

window.onload = function () {
  var preloader = document.querySelector(".loader-bg");
  setTimeout(function () {
    preloader.style.display = "none";
  }, 1000);
};

// // Countdown Timer

(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let festDay = "February 29, 2024 00:00:00",
    countDown = new Date(festDay).getTime(),
    x = setInterval(function () {
      let now = new Date().getTime(),
        distance = countDown - now;

      (document.getElementById("days").textContent = Math.max(0,Math.floor(
        distance / day
      ))),
        (document.getElementById("hours").innerText = Math.max(0,Math.floor(
          (distance % day) / hour
        ))),
        (document.getElementById("minutes").innerText = Math.max(0,Math.floor(
          (distance % hour) / minute
        ))),
        (document.getElementById("seconds").innerText =Math.max(0, Math.floor(
          (distance % minute) / second
        )));

      //seconds
    }, 0);
})();

// backtoTop

const backToTopButton = document.getElementById("back-to-top-btn");

window.addEventListener("scroll", scrollFunction);
document.body.addEventListener("touchmove", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 300) {
    if (!backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnExit");
      backToTopButton.classList.add("btnEntrance");
      backToTopButton.style.display = "block";
    }
  } else {
    if (backToTopButton.classList.contains("btnEntrance")) {
      backToTopButton.classList.remove("btnEntrance");
      backToTopButton.classList.add("btnExit");
      setTimeout(function () {
        backToTopButton.style.display = "none";
      }, 250);
    }
  }
}
