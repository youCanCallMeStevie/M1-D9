//creating the array of numbers for the board

const numbers = [];
const calledNumbers = [];
const nums = [];

for (let x = 1; x <= 75; x++) {
  numbers.push(x);
}

const previousNumbers = document.createElement("div");
document.querySelector(".container").appendChild(previousNumbers);
//helper function

const bingoNumbers = () => {
  if (calledNumbers.length === 75) return; //return in this case means go no further. this is a guard cause
  let unique = false; //while unique = false, keep running
  let number; //i could make number equal 0, or null, etc but i can jsut say this variable is going to exist outside of the while function
  while (unique === false) {
    number = Math.floor(Math.random() * 75 + 1);
    if (calledNumbers.includes(number)) unique = false;
    else unique = true;
  }

  calledNumbers.push(number); //filling the array of calledNumbers
  let previous = "";
  calledNumbers.forEach((num) => (previous += `${num}, `)); //forEach is a more modern syntex of 'for' 'of'
  previousNumbers.innerText = previous;

  const active = document.getElementsByClassName("active")[0];
  if (active) {
    //if find an element that has an ID of "active", then do this thing....
    active.classList.remove("active");
  }
  let currentActive = document.getElementById(`cell-${number}`);
  currentActive.classList.add("active");
};

//creating the bingo board

const bingoBoard = document.getElementById("bingo-board");
for (let num of numbers) {
  // "of" is asigning each element in the array of 'numbers' the new variable of 'num'
  const cell = document.createElement("div");
  cell.innerText = num;
  cell.id = `cell-${num}`; //anything that is outside of the {} read as a string, anything inside read as JS. interpolation
  bingoBoard.appendChild(cell);
}

//creating numbers for player board
function generateNums() {
  for (let i = 1; i <= 24; i++) {
    let num = Math.floor(Math.random() * 75);
    nums.push(num);
  }
}
generateNums();

//creating the player board
const playerBoard = document.getElementById("player-board");
for (let num of nums) {
  // "of" is asigning each element in the array of 'numbers' the new variable of 'num'
  const cell = document.createElement("div");
  cell.innerText = num;
  cell.id = `cell-${num}`; //anything that is outside of the {} read as a string, anything inside read as JS. interpolation
  playerBoard.appendChild(cell);
}

//button in JavaScript

const bingoCaller = document.getElementsByClassName("bingo-caller")[0];
const button = document.createElement("button");
button.innerText = "Generate Bingo Number";
button.onclick = bingoNumbers;
bingoCaller.appendChild(button);
