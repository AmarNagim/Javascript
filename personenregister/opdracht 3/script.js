// script.js

// Retrieve the people-info div and the age filter input and button elements
const peopleInfoDiv = document.getElementById('people-info');
const ageFilterInput = document.getElementById('age-filter');
const filterButton = document.getElementById('filter-button');

// Fetch the people information from the JSON file and display it on the page
fetch('opdracht2_bijlage.json')
  .then(response => response.json())
  .then(data => {
    displayPeople(data);
  });

// Event listener for the filter button
filterButton.addEventListener('click', () => {
  // Get the age filter value
  const ageFilter = parseInt(ageFilterInput.value);

  // Fetch the people information from the JSON file and filter it by age
  fetch('opdracht2_bijlage.json')
    .then(response => response.json())
    .then(data => {
      const filteredData = data.filter(person => person.leeftijd > ageFilter);
      // Clear the current people info on the page
      clearPeople();
      // Display the filtered people info on the page
      displayPeople(filteredData);
    });
});

// Function to display the people info on the page
function displayPeople(data) {
  data.forEach(person => {
    const personDiv = document.createElement('div');
    personDiv.classList.add('person-info');
    personDiv.innerHTML = `
      <p>Voornaam: <span>${person.voornaam}</span></p>
      <p>Achternaam: <span>${person.achternaam}</span></p>
      <p>Nationaliteit: <span>${person.nationaliteit}</span></p>
      <p>Leeftijd: <span>${person.leeftijd}</span></p>
      <p>Gewicht: <span>${person.gewicht}</span></p>
    `;
    peopleInfoDiv.appendChild(personDiv);
  });
}

// Function to clear the people info on the page
function clearPeople() {
  while (peopleInfoDiv.firstChild) {
    peopleInfoDiv.removeChild(peopleInfoDiv.firstChild);
  }
}
