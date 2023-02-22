
// Understand the problem : A game of rock, paper and scissors against a computer. The computer is going to output a random variable out of these 3. Variables will be compared, if I win the text should be "You win" if I lose the text should be "You lose"""
// Inputs: x, y, z. Desired output should be random. 
// Pseudocode from here. 
// Create a function getComputerChoice to randomly choose a variable
// Ask the user for an input
// Create a function that takes two parameters: the computer choice and userchoice
// Create a conditional if input === rock rock beats scissors, but loses to paper. Same with others.
// Alert appropriate text "You lose! ..."
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

let countComputer = 0
let countUser = 0

function playRound() {
    let computedChoice = Math.floor(Math.random() * 3);
    let userChoice = translateChoice(prompt("Choose your weapon"))
    if (userChoice == (computedChoice + 1) % 3) {
        alert(`You win! ${printChoice(userChoice)} beats ${printChoice(computedChoice)}.`);
        countUser = (countUser + 1);
    } else if (computedChoice == (userChoice + 1) % 3){
        alert(`You fucking lose! ${printChoice(computedChoice)} beats ${printChoice(userChoice)}`);
        countComputer = (countComputer + 1);
    } else {
        alert("Anish Giri");
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound() 
       console.log(`You have ${countUser} points, while the computer has ${countComputer} points.`)
    }
}   

 game()