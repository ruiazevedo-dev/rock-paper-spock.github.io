
const totalScore = { computerScore: 0, playerScore: 0 };
function getComputerChoice() {
  const rpsChoice = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  const randomNumber = Math.floor(Math.random() * 5);
  return rpsChoice[randomNumber];
}


function getResult(playerChoice, computerChoice) {
  
  let score = 0;

  if (playerChoice == computerChoice) {
    score = 0;
  }

  else if (playerChoice == "Rock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Rock") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Rock" && computerChoice == "Lizard") {
    score = 1;
  } else if (playerChoice == "Lizard" && computerChoice == "Spock") {
    score = 1;
  } else if (playerChoice == "Spock" && computerChoice == "Scissors") {
    score = 1;
  } else if (playerChoice == "Scissors" && computerChoice == "Lizard") {
    score = 1;
  } else if (playerChoice == "Lizard" && computerChoice == "Paper") {
    score = 1;
  } else if (playerChoice == "Paper" && computerChoice == "Spock") {
    score = 1;
  } else if (playerChoice == "Spock" && computerChoice == "Rock") {
    score = 1;
  }

  else {
    score = -1;
  }

  return score;
}

function showResult(score, playerChoice, computerChoice) {

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");
  if (score == -1) {
    resultDiv.innerText = "You Lose!";
  } else if (score == 0) {
    resultDiv.innerText = "You Tie!";
  } else {
    resultDiv.innerText = "You Won!";
  }

  handsDiv.innerText = ` ${playerChoice} vs ${computerChoice}`;
  playerScoreDiv.innerText = `Your score: ${totalScore["playerScore"]}`;
}


function onClickRPS(playerChoice) {
  console.log({ playerChoice });
  const computerChoice = getComputerChoice();
  console.log({ computerChoice });
  const score = getResult(playerChoice, computerChoice);
  totalScore["playerScore"] += score;
  showResult(score, playerChoice, computerChoice);
  console.log({ score });
  console.log(totalScore);
}


function playGame() {

  const rpsButtons = document.querySelectorAll(".rpsButton");
  console.log(rpsButtons);

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });


  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame(totalScore);
}

function endGame(totalScore) {
  totalScore["playerScore"] = 0;
  totalScore["computerScore"] = 0;

  const resultDiv = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScoreDiv = document.getElementById("player-score");

  resultDiv.innerText = "";
  handsDiv.innerText = "";
  playerScoreDiv.innerText = "";
}

playGame();


const randomSelect = (fruits) => {
  const randomNumber = Math.floor(Math.random() * fruits.length);
  return fruits[randomNumber];
};
fruits = ["banana", "pear", "berry"];



const weatherScorer = (weather) => {
  let score = 0;

  if (weather == "rainy") {
    score = 1;
  } else if (weather == "sunny") {
    score = -1;
  } else {
    score = 0;
  }
  return score;
};
