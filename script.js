const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.createElement('div');
const results1 = document.createElement('p')
const score = document.createElement('p');
const body = document.querySelector('body');


body.appendChild(score);
body.appendChild(results);
body.appendChild(results1);

let userChoice = ""

rock.addEventListener('click', () => {
    userChoice = 0;
    console.log(userChoice);
});

paper.addEventListener('click', () => {
    userChoice = 1;
    console.log(userChoice);
});

scissors.addEventListener('click', () => {
    userChoice = 2;
    console.log(userChoice);
});

function printChoice(index) {
    if (index == 0) {
        return 'rock';
    } else if (index == 1) {
        return 'paper';
    } else if (index == 2) {
        return 'scissors';
    }       
}

function translateChoice(myString) {
    myString = myString.toLowerCase();
    if (myString == "rock") {
        return 0;
    } else if (myString == "paper") {
        return 1;
    } else {
        return 2;
    }
}

let countComputer = 0;
let countUser = 0;

function playRound() {
    let computedChoice = Math.floor(Math.random() * 3);
    if (userChoice == (computedChoice + 1) % 3) {
        results.textContent = `You win! ${printChoice(userChoice)} beats ${printChoice(computedChoice)}`
        countUser = (countUser + 1);
    } else if (computedChoice == (userChoice + 1) % 3){
        results.textContent = `You fucking lose! ${printChoice(computedChoice)} beats ${printChoice(userChoice)}`;
        countComputer = (countComputer + 1);
    } else {
        results.textContent = `Anish Giri`;
    }
};

function game() {
    playRound();
    score.textContent = `You have ${countUser} points, while the computer has ${countComputer} points.`
    if (countUser == 5) {
        results1.textContent = `You have won!`;
    } else if (countComputer == 5) {
        results1.textContent = `You have lost!`;
    }
}

 function addEventListenerByClass(className, event, fn) {
    var list = document.getElementsByClassName(className);
    for (var i = 0, len = list.length; i < len; i++) {
        list[i].addEventListener(event, fn, false);
    }
}

addEventListenerByClass("butt", "click", game);