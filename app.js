let images = document.querySelectorAll(".sub-container");
let userScoreMsg = document.querySelector("#user-score");
let compScoreMsg = document.querySelector("#comp-score");
let winningMsg = document.querySelector("#msg");
let newGame = document.querySelector("#new-game");

let userScore = 0;
let compScore = 0;

let userChoice;
let compChoice;

// this function geneerates the random computer value
const computerChoice = () => {
  let options = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * 3);
  return options[index];
};

// this function display the winner and print it on screen
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    winningMsg.style.color = "green";
    winningMsg.innerText = ` You Win! your ${userChoice} beats ${compChoice}`;
    userScore++;
    userScoreMsg.innerText = userScore;
  } else {
    winningMsg.style.color = "red";
    winningMsg.innerText = ` You Lose! ${compChoice} beats your ${userChoice}`;
    compScore++;
    compScoreMsg.innerText = compScore;
  }
};

// this function have the winning condition's
const playGame = (userChoice, computerChoice) => {
  if (userChoice === compChoice) {
    winningMsg.innerText = "Game Was Draw! ";
    winningMsg.style.color = "black";
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      userWin = compChoice == "paper" ? false : true;
    } else if (userChoice == "paper") {
      userWin = compChoice == "scissor" ? false : true;
    } else if (userChoice == "scissor") {
      userWin = compChoice == "rock" ? false : true;
    }
    //  Calling the showWinner() function
    showWinner(userWin, userChoice, compChoice);
  }
};

// onclick on images
images.forEach((image) => {
  image.addEventListener("click", () => {
    userChoice = image.getAttribute("id");
    compChoice = computerChoice();
    playGame(userChoice, compChoice);
  });
});

newGame.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreMsg.innerText = "0";
  compScoreMsg.innerText = "0";
  winningMsg.innerText = "Your Move";
  winningMsg.style.color = "black";
});
