// Fibonacci-functie die het n-de getal in de reeks berekent
function fibonacci(n) {
  if (n < 2) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

// Variabele om het aantal getallen in de reeks op te slaan
const count = 20;

// Loop om elk getal in de reeks te berekenen en weer te geven
for (let i = 0; i < count; i++) {
  console.log(fibonacci(i));
}
