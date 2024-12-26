function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputNum = document.querySelector("input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");


createBtn.addEventListener("click", handleCreate);
destroyBtn.addEventListener("click", destroyBoxes);


function handleCreate() {
  
  const boxesNum = parseInt(inputNum.value);

  if (boxesNum >= 1 && boxesNum <= 100) {
    createBoxes(boxesNum);
    inputNum.value = "";
    return;
  } 

  alert("Enter number between 1 and 100!");
};


function createBoxes(amount) {
  destroyBoxes();
  const markup = [];
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = `<div style=" width: ${size}px; height: ${size}px; background-color: ${getRandomHexColor()}; "></div>`;
    markup.push(box);
  }
  
  boxesContainer.insertAdjacentHTML("beforeend", markup.join(""));


};

function destroyBoxes() {
  boxesContainer.innerHTML = "";
};






