let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice () {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  const smallUser = 'user'.fontsize(3).sub();
  const smallComp = 'comp'.fontsize(3).sub();
  userScore++;
  userScore_span.innerHTML= userScore;
  computerScore_span.innerHTML= computerScore;
  result_div.innerHTML = userChoice + smallUser + ' beats ' + computerChoice + smallComp + ' .You win!';
}
function lose(userChoice, computerChoice) {
  const smallUser = 'user'.fontsize(3).sub();
  const smallComp = 'comp'.fontsize(3).sub();
  computerScore++;
  computerScore_span.innerHtml= computerScore;
  userScore_span.innerHtml= userScore;
  result_div.innerHTML = userChoice + smallUser + ' looses to ' + computerChoice + smallComp + ' .You lost...';
}
function draw(userChoice, computerChoice) {
  const smallUser = 'user'.fontsize(3).sub();
  const smallComp = 'comp'.fontsize(3).sub();
  result_div.innerHTML = userChoice + smallUser + ' equals ' + computerChoice + smallComp + ". It's a draw.";
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  // console.log(computerChoice);
  switch (userChoice + computerChoice) {
    case 'rock' + 'scissors':
    case 'paper' + 'rock':
    case 'scissors' + 'paper':
    // console.log('you win');
      win(userChoice, computerChoice);
      break;
    case 'rock' + 'paper':
    case 'paper' + 'scissors':
    case 'scissors' + 'rock':
      // console.log('you loose!');
      lose(userChoice, computerChoice);
      break;
    case 'rock' + 'rock':
    case 'paper' + 'paper':
    case 'scissors' + 'scissors':
      // console.log("it's a draw!");
      draw(userChoice, computerChoice);
      break;
  }
}


function click() {
  rock_div.addEventListener('click', function() {
    game('rock');
  })

  paper_div.addEventListener('click', function() {
    game('paper');
  })

  scissors_div.addEventListener('click', function() {
    game('scissors');
  })

}

click();
