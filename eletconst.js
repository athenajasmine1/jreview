// Scenario 1: Temperature Conversion
const factor = 9 / 5;  // Constant conversion factor
let celsius = 25;      // celsius can be reassigned
const fahrenheit = (celsius * factor) + 32;

console.log(celsius + ' degrees celsius is ' + fahrenheit + ' degrees fahrenheit');
console.log();


const ROCK = 'R';
const PAPER = 'P';
const SCISSORS = 'S';

let player1Score = 0;  // Scores can change
let player2Score = 0;

function rockPaperScissors(player1, player2) {
    if (player1 === ROCK) {
        if (player2 === ROCK) {
            return;
        } else if (player2 === PAPER) {
            player2Score += 10;
        } else if (player2 === SCISSORS) {
            player1Score += 10;
        }
    } else if (player1 === PAPER) {
        if (player2 === ROCK) {
            player1Score += 10;
        } else if (player2 === SCISSORS) {
            player2Score += 10;
        }
    } else if (player1 === SCISSORS) {
        if (player2 === ROCK) {
            player2Score += 10;
        } else if (player2 === PAPER) {
            player1Score += 10;
        }
    }
}

let player1 = ROCK;
let player2 = PAPER;

rockPaperScissors(player1, player2);

player1 = SCISSORS;
player2 = PAPER;

rockPaperScissors(player1, player2);

player1 = ROCK;
player2 = ROCK;

rockPaperScissors(player1, player2);

player1 = PAPER;
player2 = SCISSORS;

rockPaperScissors(player1, player2);

console.log('Player 1: ' + player1Score);
console.log('Player 2: ' + player2Score);
console.log();


const names = [
    'Santa',
    'Rudolph',
    'Dasher',
    'Dancer',
    'Prancer',
    'Vixen',
    'Comet',
    'Cupid',
    'Donner',
    'Blitzen'
];

console.log('Workers:');
names.forEach((name) => console.log(name));
