// Get the images that is displayed on the hero section
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let plane = document.getElementById("plane");

// Preset all the items postions
moon.style.top = 100 + "px";
stars.style.top = -100 + "px";
plane.style.top = 1000 + "px";
plane.style.left = -200 + "px";


// this creates the parallax effect, when the user scroll, the image items will move based on the scroll value
window.addEventListener("scroll", () => {
  let value = window.scrollY;


  // Only when the scroll value is within the hero section, only then the elements will move
  if (value < 1500) {
    moon.style.transform = "rotate(" + value * 0.1 + "deg)";
    moon.style.top = 100 + value * 0.95 + "px";
    stars.style.top = -100 + value * 0.8 + "px";
    // For the plane, since it is moving out of the screen, the speed depends on the width of the screen
    if (window.screen.width > 1000) {
      plane.style.left = -400 + value * 0.8 + "px";
      plane.style.top = 1000 + value * 0.3 + "px";
    } else if (window.screen.width < 1000 && window.screen.width > 626) {
      plane.style.left = -400 + value * 0.5 + "px";
      plane.style.top = 1000 + value * 0.3 + "px";
    } else {
      plane.style.left = -300 + value * 0.35 + "px";
      plane.style.top = 1000 + value * 0.3 + "px";
    }
  }
});

// array of strings to be typed in the hero section
const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "Software Engineer",
    "AI/ML Engineer",
    "Data Scientist",
  ],
  typeSpeed: 70,
  backSpeed: 50,
  BackDelay: 1600,
  loop: true,
});

// reset the changing of icon and preset as now, image have to change with the global function of icon click
icon.onclick = function () {
  document.body.classList.toggle(lightTheme);
  if (document.body.classList.contains(lightTheme)) {
    icon.className = darkThemeIcon;
    for (cardContainer of cardContainerArray) {
      summaryLight(cardContainer);
    }
  } else {
    icon.className = lightThemeIcon;
    for (cardContainer of cardContainerArray) {
      summaryDark(cardContainer);
    }
  }
  localStorage.setItem("userSelectedTheme", getCurrentTheme());
  localStorage.setItem("userSelectedThemeIcon", getCurrentIcon());
};

// Check if the user has previously selected a theme and apply it
const userSelectedTheme = localStorage.getItem("userSelectedTheme");
const userSelectedThemeIcon = localStorage.getItem("userSelectedThemeIcon");

// condition to set the correct icon to match the saved theme, as well as get the glowing cards to be customise to the correct theme
if (userSelectedTheme) {
  document.body.classList[userSelectedTheme === "light" ? "add" : "remove"](
    lightTheme
  );
  icon.className = userSelectedThemeIcon;
  if (userSelectedTheme === "light") {
    for (cardContainer of cardContainerArray) {
      summaryLight(cardContainer);
    }
  } else {
    for (cardContainer of cardContainerArray) {
      summaryDark(cardContainer);
    }
  }
}
