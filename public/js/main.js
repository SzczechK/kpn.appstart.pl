const selections = document.querySelectorAll('.pick img');
const cpuChatWin = [];
const cpuChatLoss = [];

const gameSummary = {
  win: 0,
  loss: 0,
  draw: 0,
  winsInaRow: 0,
  bestWinsNumber: 0,
};

const game = {
  playerSelection: null,
  cpuSelection: null,
};

selections.forEach((selection) =>
  selection.addEventListener('click', gameStart)
);

// Function here

function gameStart(e) {
  game.cpuSelection =
    selections[Math.floor(Math.random() * selections.length)].dataset.type;
  game.playerSelection = e.target.dataset.type;
  showPcChoice(game.cpuSelection);
  showPlayerChoice(game.playerSelection);
  let gameResult = checkWinner(game.cpuSelection, game.playerSelection);
  showResult(gameResult);
}

function checkWinner(pc, player) {
  let result = '';
  if (player == 'rock') {
    switch (pc) {
      case 'rock':
        result = 'draw';
        break;
      case 'papper':
        result = 'loss';
        break;
      case 'scissors':
        result = 'win';
        break;
      default:
        console.log('error, pick not found');
    }
  } else if (player == 'papper') {
    switch (pc) {
      case 'papper':
        result = 'draw';
        break;
      case 'scissors':
        result = 'loss';
        break;
      case 'rock':
        result = 'win';
        break;
      default:
        console.log('error, pick not found');
    }
  } else if (player == 'scissors') {
    switch (pc) {
      case 'scissors':
        result = 'draw';
        break;
      case 'rock':
        result = 'loss';
        break;
      case 'papper':
        result = 'win';
        break;
      default:
        console.log('error, pick not found');
    }
  } else {
    console.log('error, input value not recognized');
  }
  return result;
}

function showResult(result) {
  const winField = document.querySelector('.win');
  const lossField = document.querySelector('.loss');
  const drawField = document.querySelector('.draw');
  const bestWinField = document.querySelector('.best-win');
  const winInaRowField = document.querySelector('.win-in-a-row');
  const resultField = document.querySelector('.result-text');
  if (result == 'win') {
    gameSummary.win++;
    winField.textContent = gameSummary.win;
    gameSummary.winsInaRow++;
    winInaRowField.textContent = gameSummary.winsInaRow;
    if (gameSummary.winsInaRow > gameSummary.bestWinsNumber) {
      gameSummary.bestWinsNumber = gameSummary.winsInaRow;
      bestWinField.textContent = gameSummary.bestWinsNumber;
    }
    resultField.style.color = 'green';
    resultField.textContent = 'Wygrana!';
  } else if (result == 'loss') {
    gameSummary.loss++;
    lossField.textContent = gameSummary.loss;
    gameSummary.winsInaRow = 0;
    winInaRowField.textContent = gameSummary.winsInaRow;
    resultField.style.color = 'red';
    resultField.textContent = 'Niestety... przegrana';
  } else {
    gameSummary.draw++;
    drawField.textContent = gameSummary.draw;
    resultField.style.color = 'black';
    resultField.textContent = 'Remis';
  }
}

function showPcChoice(pc) {
  const pcField = document.querySelector('.pc');
  pcField.innerHTML = '';
  const img = document.createElement('div');
  img.classList.add('pick-box');

  if (pc == 'rock') {
    img.style.backgroundImage = 'url("../img/rock.webp")';
  } else if (pc == 'papper') {
    img.style.backgroundImage = 'url("../img/papper.webp")';
  } else {
    img.style.backgroundImage = 'url("../img/scissors.webp")';
  }
  pcField.appendChild(img);
}

function showPlayerChoice(player) {
  const playerField = document.querySelector('.player');
  playerField.innerHTML = '';
  const img = document.createElement('div');
  img.classList.add('pick-box');

  if (player == 'rock') {
    img.style.backgroundImage = 'url("../img/rock.webp")';
  } else if (player == 'papper') {
    img.style.backgroundImage = 'url("../img/papper.webp")';
  } else {
    img.style.backgroundImage = 'url("../img/scissors.webp")';
  }
  playerField.appendChild(img);
}
