let score = JSON.parse(localStorage.getItem('score')) || {
        Wins: 0,
        Loses: 0,
        Ties: 0
    }

    updateScoreElement();

    /*
if (score === null) {
    score = {
        Wins: 0,
        Loses: 0,
        Ties: 0
    }
}
*/

function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lose.';
        } else if (computerMove === 'Paper') {
            result = 'You Win!';
        } else if (computerMove === 'Scissors') {
            result = 'Tie.';
        }

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Win!';
        } else if (computerMove === 'Paper') {
            result = 'Tie.';
        } else if (computerMove === 'Scissors') {
            result = 'You Lose.';
        }

    } else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie.';
        } else if (computerMove === 'Paper') {
            result = 'You Lose.';
        } else if (computerMove === 'Scissors') {
            result = 'You Win!';
        }
        
    }

    if (result === 'You Win!') {
        score.Wins += 1;
    } else if (result === 'You Lose.') {
        score.Loses += 1;
    } else if (result === 'Tie.') {
        score.Ties += 1; 
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScoreElement();

    document.querySelector('.js-result')
        .innerHTML = result;

    document.querySelector('.js-moves')
        .innerHTML = `You
        <img class="move-icon" src="icon_source/${playerMove}-emoji.png" alt="">
        <img class="move-icon" src="icon_source/${computerMove}-emoji.png" alt="">
        Computer`;

    
    console.log(`You picked ${playerMove} and Computer picked ${computerMove} so ${result}`);
    }

    function updateScoreElement() {
        document.querySelector('.js-score')
        .innerHTML = `Wins: ${score.Wins}, Loses: ${score.Loses}, Ties: ${score.Ties}`;

    }

function pickComputerMove() {

    let computerMove = '';
    const randomNumber = Math.random(); 
    
    if (randomNumber >=0 && randomNumber <1/3) {
        computerMove = 'Rock';
    } else if (randomNumber >=1/3 && randomNumber <2/3) {
        computerMove = 'Paper';
    } else if (randomNumber >=2/3 && randomNumber < 1 ) {
        computerMove = 'Scissors';
    }
    return computerMove;
}
