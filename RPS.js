const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    }
    if (userChoice === 'rock') {
      return computerChoice === 'scissors' ? 'You win!' : 'You lose!';
    } else if (userChoice === 'paper') {
      return computerChoice === 'rock' ? 'You win!' : 'You lose!';
    } else if (userChoice === 'scissors') {
      return computerChoice === 'paper' ? 'You win!' : 'You lose!';
    } else {
      return "Invalid choice";
    }
  }
  
  function playGame() {
    readline.question("Choose rock, paper, or scissors: ", userChoice => {
      userChoice = userChoice.toLowerCase();
      const computerChoice = getComputerChoice();
      console.log(`You chose: ${userChoice}`);
      console.log(`The computer chose: ${computerChoice}`);
      console.log(determineWinner(userChoice, computerChoice));
      readline.close();
    });
  }
  
  playGame();
  