// Get the DOM object for the icon for changing theme
var icon = document.getElementById("theme");

// To set the array where it will go to the other scripts to collect all the sections that contains glowable cards
cardContainerArray = [];

// set variables for the light theme class, and icons
const lightTheme = "light_theme";
const darkThemeIcon = "bx bxs-moon";
const lightThemeIcon = "bx bxs-bulb";

// function to apply dark mode styles to card containers
function summaryDark(cardContainer) {
  for (const card of cardContainer) {
    card.style.background = "rgb(var(--gray-200), 0.02)";
    card.style.boxShadow = "0px 0px 3px 1.2px rgb(var(--gray-700))";
  }
}

// function to apply light mode styles to card containers
function summaryLight(cardContainer) {
  for (const card of cardContainer) {
    card.style.background =
      "linear-gradient(331deg, rgb(var(--gray-900), 0.3), rgb(var(--gray-1000)))";
    card.style.boxShadow = "0px 0px 15px 2px rgb(var(--gray-600),0.3)";
  }
}

// function to get the current theme and icon class
function getCurrentTheme() {
  return document.body.classList.contains(lightTheme) ? "light" : "dark";
}

function getCurrentIcon() {
  return document.body.classList.contains(lightTheme)
    ? (icon.className = darkThemeIcon)
    : (icon.className = lightThemeIcon);
}

// function to toggle the theme and save the selection in localStorage
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
