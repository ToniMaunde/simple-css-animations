const animations = document.querySelectorAll(".paused-animation");

const animationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      if (entry.target.classList.contains("paused-animation")) {
        entry.target.classList.toggle("paused-animation");
      }
    } else {
      if(!entry.target.classList.contains("paused-animation")) {
        entry.target.classList.toggle("paused-animation");
      }
    }
  });
});

animations.forEach(animation => animationObserver.observe(animation));