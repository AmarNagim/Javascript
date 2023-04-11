const container = document.getElementById("container");
const numButtons = 30;

for (let i = 1; i <= numButtons; i++) {
  const button = document.createElement("button");
  button.innerHTML = i;

  let clickCount = 0;

  button.onclick = function() {
    clickCount++;

    switch(clickCount) {
      case 1:
        button.classList.add("red");
        break;
      case 2:
        button.classList.remove("red");
        button.classList.add("purple");
        break;
      case 3:
        button.classList.remove("purple");
        button.classList.add("blue");
        break;
      case 4:
        button.classList.remove("blue");
        button.classList.add("black");
        break;
      case 5:
        button.classList.add("hide");
        break;
    }
  };

  container.appendChild(button);
}
