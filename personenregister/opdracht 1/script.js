// script.js

fetch('opdracht1_bijlage.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('voornaam').textContent = data.voornaam;
    document.getElementById('achternaam').textContent = data.achternaam;
    document.getElementById('nationaliteit').textContent = data.nationaliteit;
    document.getElementById('leeftijd').textContent = data.leeftijd;
    document.getElementById('gewicht').textContent = data.gewicht;
  });
