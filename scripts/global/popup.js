// Variables for pop up
const closeModalButtons = document.querySelectorAll(".close_button");
const overlay = document.getElementById("overlay");
const backLink = document.querySelector(".back_link");

// when the go back link is clicked, it will close the popup modal
backLink.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  closeModal(modal);
});

// when the overlay is clicked, it will close the popup modal
overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  closeModal(modal);
});

// when the close button is clicked, it will close the popup modal
closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(".modal");
    closeModal(modal);
  });
});

// function to open the popup modal, as well as update the title, image and description
function openModal(modal, title, image, alternative, popups) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");

  currentTitle = modal.querySelector(".title");
  currentTitle.textContent = title;

  currentImage = modal.getElementsByTagName("img");
  currentImage[0].src = image;
  currentImage[0].alt = alternative;

  currentDescription = modal.querySelector(".description");
  for (popup of popups) {
    if (popup.title == currentTitle.textContent) {
      currentDescription.textContent = popup.description;
      resetAndAddtechnology(popup.technology);
      resetAndAddSkills(popup.skills);
      createNewTags(popup.links);
    }
  }
}

// Function to create a new h3 and a tag and append them to the container
function createNewTags(linksArray) {
  // Get the container div
  const container = document.querySelector(".modal_body");

  const oldH4s = container.querySelectorAll("h4.new-class"); // Change 'new-class' to the class of h4 elements, or remove it if you want all h4 tags
  const oldLinks = container.querySelectorAll("a.new-link"); // Change 'new-link' to the class of a tags, or remove it if you want all a tags

  // Loop through all h4 elements and remove them
  oldH4s.forEach((h4) => {
    container.removeChild(h4);
  });

  // Loop through all a elements and remove them
  oldLinks.forEach((link) => {
    container.removeChild(link);
  });

  // Loop through the array of objects
  linksArray.forEach((item) => {
    // Create a new h3 element
    const newH4 = document.createElement("h4");
    newH4.innerHTML = item.title; // Set the title with the icon
    newH4.className = "new-class"; // Optionally add a class

    // Create a new a (anchor) element
    const newLink = document.createElement("a");
    newLink.href = item.link; // Set the link
    newLink.target = "_blank"; // Open in a new tab
    newLink.rel = "noopener noreferrer"; // Security best practice
    newLink.textContent = `Link to ${item.title.replace(
      /<\/?[^>]+(>|$)/g,
      ""
    )}`;
    newLink.className = "new-link";

    // Append the new h3 and a elements to the container
    container.appendChild(newH4);
    container.appendChild(newLink);
  });
}

function resetAndAddtechnology(newSkills) {
  const ul = document.querySelector(".technology");

  // Clear the current list
  ul.innerHTML = "";

  // Add new skills from the provided array
  newSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  });
}

function resetAndAddSkills(newSkills) {
  const ul = document.querySelector(".skills");

  // Clear the current list
  ul.innerHTML = "";

  // Add new skills from the provided array
  newSkills.forEach((skill) => {
    const li = document.createElement("li");
    li.textContent = skill;
    ul.appendChild(li);
  });
}

// function to close the popup modal
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
