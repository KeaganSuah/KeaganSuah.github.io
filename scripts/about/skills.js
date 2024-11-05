// DOM object of the overall scroller container
const scrollers = document.querySelectorAll(".scroll_container");

// Check if the media query suits for the function to run
if (!window.matchMedia("(prefers-reduced-motion:reduce)").matches) {
  addAnimation();
}

// Animation for the skills scroller to move
function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    // Get the varbles for the inner scroll of the scroller container
    const scrollerInner = scroller.querySelector(".scroller_inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // To create the duplicates for the empty slots
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
