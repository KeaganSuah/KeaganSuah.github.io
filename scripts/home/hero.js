window.addEventListener("load", function () {
  gsap.registerPlugin(ScrollTrigger);

  // Initial setup for rotation
  gsap.set("#astronaut", { rotate: 25 });

  const moveAstronaut = () => {
    const width = window.innerWidth;
    const maxXMovement = width * 0.05; // 20% of the viewport width

    gsap.to("#astronaut", {
      scrollTrigger: {
        trigger: "#astronaut",
        start: "top bottom", // Start when #astronaut enters the viewport
        end: "+=15000", // Extend the end point to create a long scroll range
        scrub: true, // Syncs animation with scroll position
        onUpdate: (self) => {
          const progress = self.progress * 20 * Math.PI; // Increase multiplier for more oscillations
          const oscillation = Math.sin(progress) * maxXMovement; // Oscillate x-position
          const rotation = Math.sin(progress) * 25; // Oscillate rotation

          // Apply calculated oscillation to #astronaut
          gsap.set("#astronaut", {
            x: oscillation,
            rotation: rotation,
          });
        },
        invalidateOnRefresh: true, // Recalculates positions on refresh
      },
    });
  };

  // Initial call
  moveAstronaut();

  const moveMoon = () => {
    // Moon Rotation and Upward Movement
    gsap.to("#moon", {
      y: -888, // Moves up as the user scrolls
      rotation: 360, // Rotates the moon slowly
      scrollTrigger: {
        start: "top top",
        end: "bottom+=2000", // Extended end point
        scrub: 2, // Syncs animation with scroll
        invalidateOnRefresh: true, // Recalculates positions on refresh
      },
    });
  };

  // Initial call
  moveMoon();

  // Plane Horizontal Movement with Responsive Adjustments
  const movePlane = () => {
    const width = window.innerWidth;
    const maxXMovement = width; // 95% of the viewport width
    let xMovement;

    if (width > 1000) {
      xMovement = Math.min(1200, maxXMovement); // Move plane more on larger screens
    } else if (width > 626) {
      xMovement = Math.min(800, maxXMovement);
    } else {
      xMovement = Math.min(600, maxXMovement);
    }

    gsap.to("#plane", {
      x: xMovement, // Moves the plane to the right based on screen size
      scrollTrigger: {
        trigger: "#plane",
        start: "top bottom",
        end: "bottom top",
        scrub: 0.1,
        invalidateOnRefresh: true, // Recalculates positions on refresh
      },
    });
  };

  // Initial call
  movePlane();

  // Refresh all ScrollTriggers on load to ensure correct positioning
  ScrollTrigger.refresh();
});

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
