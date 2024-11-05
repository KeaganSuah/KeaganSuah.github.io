// Loop through all the journey_card class to implement the function in it
journey_cards = document.querySelectorAll(".journey_card");

// Loop through all the journey_cards class to implement the function in it
flexboxGlows(journey_cards);

// push all the glowable cards container into an array that collects all glowable cards section
cardContainerArray.push(journey_cards);

// Create the clicking effect for each journey card to list more content when user click on the card
journey_cards.forEach((card) => {
  card.addEventListener("click", () => {
    const readMoreText = card.querySelector(".read_more");
    const status = card.querySelector(".status");

    // Toggle the visibility of the read more text
    readMoreText.classList.toggle("read_more_more");

    // Update the status text based on the current state
    status.textContent = status.textContent.includes("Read More")
      ? "Read Less"
      : "Read More";
  });
});
