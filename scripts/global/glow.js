// Function to check the mouse position to display the glow
const glowOnMouse = (e) => {
  // Condition to check if light theme is on, if it is, do not run the function
  if (!document.body.classList.contains("light_theme")) {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
};

// glowing effect for elements in a flexbox layout
function flexboxGlows(cardContainer) {
  for (const card of cardContainer) {
    card.onmousemove = (e) => glowOnMouse(e);

    card.addEventListener("mouseenter", function () {
      // remove the transititon delay after the elements have shown already
      card.style.transitionDelay = "0s";
      if (!document.body.classList.contains("light_theme")) {
        card.style.setProperty("--before_opacity", "1");
      }
    });

    card.addEventListener("mouseleave", function () {
      card.style.setProperty("--before_opacity", "0");
    });
  }
}

// glowing effect for element in a grid layout, different as the size is different and may need a larger glow
function gridGlows(cardContainer) {
  // Loop through all the portfolio_card class to implement the function in it
  for (const card of cardContainer) {
    card.onmousemove = (e) => glowOnMouse(e);

    // Hover effect for the card within the container
    card.addEventListener("mouseenter", function () {
      // remove the transititon delay after the elements have shown already
      card.style.transitionDelay = "0s";
      if (!document.body.classList.contains("light_theme")) {
        card.style.setProperty("--before_opacity", "1");
      }
      // If the card is larger, increase the size of the glow
      if (card.classList.contains("large")) {
        card.style.setProperty("--glow_size", "1400px");
      }
    });

    // reset back to the old styles when no longer hover
    card.addEventListener("mouseleave", function () {
      card.style.setProperty("--before_opacity", "0");
      card.style.setProperty("--glow_size", "800px");
    });
  }
}
