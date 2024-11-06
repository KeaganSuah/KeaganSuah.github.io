// Get the images displayed in the hero section
let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let plane = document.getElementById("plane");

// Preset all the item positions
moon.style.top = "100px";
plane.style.top = "1000px";
plane.style.left = "-200px";

// Throttle scroll updates using requestAnimationFrame
let scrollValue = 0;
let ticking = false;

window.addEventListener("scroll", () => {
  scrollValue = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
});

function updateParallax() {
  if (scrollValue < 1500) {
    moon.style.transform = `rotate(${scrollValue * 0.1}deg)`;
    moon.style.top = 100 + scrollValue * 0.95 + "px";

    // Make the stars move along with the scroll to create a "static" illusion
    stars.style.top = scrollValue * 0.95 + "px";

    if (window.innerWidth > 1000) {
      plane.style.left = -400 + scrollValue * 0.8 + "px";
      plane.style.top = 1000 + scrollValue * 0.3 + "px";
    } else if (window.innerWidth > 626) {
      plane.style.left = -400 + scrollValue * 0.5 + "px";
      plane.style.top = 1000 + scrollValue * 0.3 + "px";
    } else {
      plane.style.left = -300 + scrollValue * 0.35 + "px";
      plane.style.top = 1000 + scrollValue * 0.3 + "px";
    }
  }
}

// array of strings to be typed in the hero section
const typing = new Typed(".multiple-text-header", {
  strings: ["Print", "Console.log", "std::cout﹤﹤"],
  typeSpeed: 70,
  backSpeed: 50,
  BackDelay: 1600,
  loop: true,
});

const typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Computer Student", "Data Analyst"],
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
