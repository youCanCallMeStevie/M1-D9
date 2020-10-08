
const numberOfSquares = 76;
const maxNumber = 76;
const numbersCalled = [];

function Random() {
    const rnd = Math.floor((Math.random() * (maxNumber - 1)) + 1);
    document.getElementById('tb').value = rnd;
}

window.onload = function () {
    let board = document.querySelector("#board"); // getting a reference for the calendar div

    const generateRandomNumber = function () {
        return Math.floor((Math.random() * (maxNumber - 1)) + 1)
    }
    for (let i = 0; i < numberOfSquares; i++) {
        let bingoSquare = document.createElement("div");
        bingoSquare.innerText = generateRandomNumber().toString();

        board.appendChild(bingoSquare)
        console.log(bingoSquare);
    }
}


// const showNumbersCalled = function () {


//     let bingoNumbers = numbersCalled
//     bingoNumbers.innerText = generateRandomNumber().toString();

//     board.appendChild(bingoNumbers)
//     console.log(bingoNumbers);
// };

// document.querySelector("#numbersCalled").style.display = "block"; // sets the appointments section to be visible!
// let numbersList = document.querySelector("#numbersList"); // here I target the unordered list in html
// numbersList.innerHTML = ""; // and here to be sure I erase any old trace

// for (let i = 0; i < bingoNumbers.length; i++) {
//     // for every event in that day...
//     let li = document.createElement("li"); // create an empty list element
//     li.innerHTML = bingoNumbers[i]; // sets the content for it with the correct event in todaysAppointments
//     numbersList.appendChild(li); // appends the newly created list element to the unordered list!
// };