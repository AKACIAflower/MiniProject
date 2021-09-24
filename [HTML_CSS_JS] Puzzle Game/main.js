const container = document.querySelector(".image-container");
const startButton = document.querySelector(".start-button");
const gameText = document.querySelector(".game-text");
const playTime = document.querySelector(".play-time");

const tileCount = 16;

Array(tileCount)
  .fill()
  .forEach((_, i) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", i);
    li.classList.add(`list${i}`);
    container.appendChild(li);
  });

function shuffle(array) {
  let index = array.length - 1;
  while (index > 0) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[randomIndex]] = [array[randomIndex], array[index]];
    index--;
  }
  return array;
}
