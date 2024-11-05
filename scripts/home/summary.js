// get the DOM of all the summary cards
var summary_cards = document.querySelectorAll(".summary_card");
var boxIndex = [1, 2, 10, 15];
var pictureIndex = [
  "url(/static/home/whyme/uol.jpg)",
  "url(/static/home/whyme/singapore.jpg)",
  "url(/static/about/hero/myFace.PNG)",
  "url(/static/home/whyme/code.jpg)",
];

placePictureInBox(boxIndex);

// Change card container style from light to dark mode, as dark mode box shadow is narrower, card container variable change depending on which page user is currently on
function summaryDark(cardContainer) {
  for (const card of cardContainer) {
    card.style.background = "rgb(var(--gray-200), 0.02)";
    card.style.boxShadow = "0px 0px 3px 1.2px rgb(var(--gray-700))";
    placePictureInBox(boxIndex);
  }
}

// Change card container style from dark to light mode, as light mode box shadow is wider, card container variable change depending on which page user is currently on
function summaryLight(cardContainer) {
  for (const card of cardContainer) {
    card.style.background =
      "linear-gradient(331deg, rgb(var(--gray-700), 0.3), rgb(var(--gray-900)))";
    card.style.boxShadow = "0px 0px 10px 2px rgb(var(--gray-600),0.5)";
    placePictureInBox(boxIndex);
  }
}

function placePictureInBox(array) {
  for (let x = 0; x < array.length; x++) {
    var main_card = summary_cards[array[x]];
    main_card.style.background = pictureIndex[x];
    main_card.style.backgroundSize = "cover";
    main_card.style.backgroundPosition = "center center";
    main_card.style.justifyContent = "flex-start";
  }
}

// Loop through all the summary_card class to implement the function in it
gridGlows(summary_cards);

// push all the glowable cards container into an array that collects all glowable cards section
cardContainerArray.push(summary_cards);
