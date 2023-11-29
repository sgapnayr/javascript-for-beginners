const button = document.getElementById("button");
const countDisplay = document.getElementById("countDisplay");

let count = 0;

button.addEventListener("click", handleButtonClick);

function handleButtonClick() {
  count += 1;
  countDisplay.textContent = `Count: ${count}`;
}
