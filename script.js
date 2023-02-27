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
    userChoice == "rock";
});

paper.addEventListener('click', () => {
    userChoice == "paper";
});

scissors.addEventListener('click', () => {
    userChoice == "scissors";
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
}

function game() {
    for (let i = 0; countUser < 5 && countComputer < 5; i++) {
        playRound(); 
        score.textContent = `You have ${countUser} points, while the computer has ${countComputer} points.`;
    }
}   

 game ();

 if (countUser > countComputer) {
    results1.textContent = `You have won the game! Congratulations!`
 } else {
    results1.textContent = `You have fucking lost! Uncogratulations!`
 }