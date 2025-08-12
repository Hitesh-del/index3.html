let score = JSON.parse(localStorage.getItem('score'));

if (!score) {
    score = {
        Wins: 0,
        Losses: 0,
        Ties: 0,
    }
}

function playGame(playerMove) {
    let computerMove = pickcomputerMove();

    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else if (computerMove === 'Scissors') {
            result = 'You win';
        }

    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You lose';
        }

    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }

    }

    if (result === 'You win') {
        score.Wins = score.Wins + 1;
    } else if (result === 'You lose') {
        score.Losses = score.Losses + 1;
    } else if (result === 'Tie') {
        score.Ties = score.Ties + 1;
    }

    localStorage.setItem('score', JSON.stringify(score));
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML =
        `You <img src="${playerMove}-emoji.png" class="moves-icon">
        <img src="${computerMove}-emoji.png" class="moves-icon"> Computer`;

    updateScoreElement();

}
function updateScoreElement() {
    document.querySelector('.js-score').innerHTML =
        `Wins:${score.Wins}, Losses:${score.Losses}, Ties:${score.Ties}`;
}


function pickcomputerMove() {
    let computerMove = '';

    let randomMove = Math.random();
    if (randomMove >= 0 && randomMove < 1 / 3) {
        computerMove = 'Rock';
    } else if (randomMove >= 1 / 3 && randomMove < 2 / 3) {
        computerMove = 'Paper';
    } else if (randomMove >= 2 / 3 && randomMove < 1) {
        computerMove = 'Scissors';
    }

    return computerMove;
}
