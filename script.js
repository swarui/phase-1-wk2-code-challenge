// Fetch animal data from the server
fetch("http://localhost:3000/characters")
  .then((response) => response.json())
  .then((data) => {
    const animalNames = document.getElementById("animal-names");
    const animalDetails = document.getElementById("animal-details");
    const voteInput = document.getElementById("vote-input");
    const voteButton = document.getElementById("vote-button");

    let selectedAnimal = null;

    // Displaying animal names and attach click event listeners
    data.forEach((animal) => {
      const listItem = document.createElement("li");
      listItem.textContent = animal.name;
      listItem.addEventListener("click", () => {
        selectedAnimal = animal;
        displayAnimalDetails(animal);
      });
      animalNames.appendChild(listItem);
    });

    // Attach a click event listener to the vote button
    voteButton.addEventListener("click", () => {
      if (selectedAnimal) {
        const votes = parseInt(voteInput.value);
        selectedAnimal.votes += votes;
        const voteCount = document.getElementById("vote-count");
        voteCount.textContent = selectedAnimal.votes;
        voteInput.value = "0";
      }
    });

    // Displaying animal details
    function displayAnimalDetails(animal) {
      console.log("Displaying animal details for:", animal.name);
      animalDetails.innerHTML = `
        <h2>${animal.name}</h2>
        <img src="${animal.image}" alt="${animal.name}">
        <p>Votes: <span id="vote-count">${animal.votes}</span></p>
      `;
    }
  });

// Reset votes
const resetButton = document.getElementById("reset-button");
resetButton.addEventListener("click", () => {
  fetch("http://localhost:3000/characters")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((animal) => {
        animal.votes = 0;
      });

      const voteCounts = document.querySelectorAll("#vote-count");
      voteCounts.forEach((count) => {
        count.textContent = "0";
      });

      const voteInput = document.getElementById("vote-input");
      voteInput.value = "0";
    });
});

// Add new animal
const animalForm = document.getElementById("animal-form");
animalForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nameInput = document.getElementById("animal-name");
  const imageInput = document.getElementById("animal-image");
  const votesInput = document.getElementById("animal-votes");

  const newAnimal = {
    name: nameInput.value,
    image: imageInput.value,
    votes: parseInt(votesInput.value),
  };

  fetch("http://localhost:3000/characters", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newAnimal),
  })
    .then((response) => response.json())
    .then((data) => {
      const animalNames = document.getElementById("animal-names");
      const listItem = document.createElement("li");
      listItem.textContent = data.name;
      listItem.addEventListener("click", () => {
        selectedAnimal = data;
        displayAnimalDetails(data);
      });
      animalNames.appendChild(listItem);

      nameInput.value = "";
      imageInput.value = "";
      votesInput.value = "0";
    });
});
