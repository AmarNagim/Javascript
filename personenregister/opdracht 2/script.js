// script.js

fetch('opdracht2_bijlage.json')
  .then(response => response.json())
  .then(data => {
    const peopleInfoDiv = document.getElementById('people-info');
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
  });
