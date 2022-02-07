// Welcome USER
// Enter a maximum number
// Enter first guess -> feedback if the guess is low or high
// Guess again until guess right
// use q to quit the game

// let inputName = prompt('Enter your name:');
// let inputMax = parseInt(prompt(`Hello ${inputName}, enter a maximum number:`));
// const targetNum = Math.floor(Math.random() * inputMax) + 1;
// let inputGuess = prompt('Enter your first guess:');
// let numTry = 1;
// while (numTry <= inputMax) {
//     if (inputGuess === 'q') {
//         console.log(`You have made ${numTry - 1} guesses`)
//         break;
//     }
//     if (inputGuess < targetNum) {
//         inputGuess = prompt('Too low. Guess again!');
//     } else if (inputGuess > targetNum) {
//         inputGuess = prompt('Too high. Guess again!');
//     } else {
//         console.log(`Congratulation!!! Your guess is right after ${numTry} entry/entries`);
//         break;
//     }
//     ++numTry;
// }

let maximum = parseInt(prompt('Enter a maximum number:'));
while (!maximum) {
    maximum = parseInt(prompt('Enter a valid number:'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt('Enter your first guess:');
let attempt = 1;
const h2 = document.querySelector('h2');
while (parseInt(guess) !== targetNum) {
    if (guess === 'q') {
        break;
    }
    attempt++;
    if (guess < targetNum) {
        guess = prompt('Too low. Guess again!');
    } else {
        guess = prompt('Too high. Guess again!');
    }
}
if (guess === 'q') {
    console.log('Ok, you quit');
} else {
    console.log('Congrats. You win.');
    console.log(`You got it! It took you ${attempt} guesses`);
}



