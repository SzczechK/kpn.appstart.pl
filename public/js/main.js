const pickArray = ['rock', 'papper', 'scissors'];
const cpuChatWin = [];
const cpuChatLoss = [];
const chooseRock = document.querySelector('#item-rock');
const choosePapper = document.querySelector('#item-papper');
const chooseScissors = document.querySelector('#item-scissors');
const winField = document.querySelector('.win');
const lossField = document.querySelector('.loss');
const drawField = document.querySelector('.draw');
const bestWinField = document.querySelector('.best-win');
const winInaRowField = document.querySelector('.win-in-a-row');
const resultField = document.querySelector('.result-text');
let win = 0;
let loss = 0;
let draw = 0;
let winsInaRow = 0;
let bestWinsNumber = 0;

chooseRock.addEventListener('click', () => {
  showPlayerChoice(chooseRock.dataset.type);
  let result = checkWinner(cpuPick(), chooseRock.dataset.type);
  showResult(result);
});

choosePapper.addEventListener('click', () => {
  showPlayerChoice(choosePapper.dataset.type);
  let result = checkWinner(cpuPick(), choosePapper.dataset.type);
  showResult(result);
});

chooseScissors.addEventListener('click', () => {
  showPlayerChoice(chooseScissors.dataset.type);
  let result = checkWinner(cpuPick(), chooseScissors.dataset.type);
  showResult(result);
});

// Function here

function cpuPick() {
  let cpuPick = pickArray[Math.floor(Math.random() * pickArray.length)];
  return cpuPick;
}

function checkWinner(pc, player) {
  showPcChoice(pc);
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
  if (result == 'win') {
    win++;
    winField.textContent = win;
    winsInaRow++;
    winInaRowField.textContent = winsInaRow;
    if (winsInaRow > bestWinsNumber) {
      bestWinsNumber = winsInaRow;
      bestWinField.textContent = bestWinsNumber;
    }
    resultField.style.color = 'green';
    resultField.textContent = 'Wygrana!';
  } else if (result == 'loss') {
    loss++;
    lossField.textContent = loss;
    winsInaRow = 0;
    winInaRowField.textContent = winsInaRow;
    resultField.style.color = 'red';
    resultField.textContent = 'Niestety... przegrana';
  } else {
    draw++;
    drawField.textContent = draw;
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
