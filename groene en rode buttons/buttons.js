const container = document.getElementById('container');
const numButtons = 30; // Change this to adjust the number of buttons

for (let i = 1; i <= numButtons; i++) {
  const button = document.createElement('button');
  button.innerText = i;
  button.onclick = function() {
    if (button.classList.contains('red')) {
      button.classList.remove('red');
    } else {
      button.classList.add('red');
    }
  };
  container.appendChild(button);
}
