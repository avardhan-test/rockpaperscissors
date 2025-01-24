const getUserChoice = userInput => {
    userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    }
    else {
        console.log('Its an invalid input !')
    }

    const getComputerChoice = () => {
        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return 'rock';
            case 1:
                return 'paper';
            case 2:
                return 'scissors';
        }
        const determineWinner = (userChoice, computerChoice) => {
            if (userChoice === computerChoice) {
                console.log('The game is a tie');
            } else if (userChoice === 'rock' && computerChoice == 'paper') {
                return 'Computer won'
            } else if (userChoice === 'paper' && computerChoice === 'rock') {
                return 'User won'
            } else if (userChoice === 'scissors' && computerChoice === 'paper') {
                return 'Computer won'
            }

        }
        const playGame = () => {
            const userChoice = getComputerChoice('rock');
            const computerChoice = getComputerChoice();

            console.log('You threw' + userChoice);
            console.log('Compuer threw' + computerChoice);
            console.log(determineWinner(userChoice, computerChoice));



        }
        playGame();

    }
}

