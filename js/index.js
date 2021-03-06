const userBtn = getAll('.user-choice > i');
const computerRock = get('.computer-choice .fa-hand-rock');
const computerPaper = get('.computer-choice .fa-hand-paper');
const computerScissor = get('.computer-choice .fa-hand-scissors');
const resultEl = get('.result > p');
const resultContainer = get('.result');


userBtn.forEach(addClick);


function addClick(target) {
  target.addEventListener('click', playGame);
}


function playGame(target) {
  fillResult(determineWinner(takeUserChoice(target), getComputerChoice()));
  setTimeout(removeActive, 2000);
  //AnimationEvent.showresult()
}

function takeUserChoice(event) {
  const userChoice = event.target.dataset.user;
  event.target.classList.add('active');
  return userChoice;
}

function getComputerChoice() {

  const randomNum = Math.round(Math.random() * 3);
  if (randomNum === 1) {
    computerRock.classList.add('active');
    return computerChoice = "rock";} else
  if (randomNum === 2) {
    computerPaper.classList.add('active');return computerChoice = "paper";} else
  {
    computerScissor.classList.add('active');
    return computerChoice = "scissor";}
}

function determineWinner(userChoice, computerChoice) {
  let result = '';
  if (userChoice === 'rock' && computerChoice === 'rock') {
    return result = "It's a draw";} else
  if (userChoice === 'rock' && computerChoice === 'paper') {
    return result = "You loose &#128533;";} else
  if (userChoice === 'rock' && computerChoice === 'scissor') {
    return result = "You win &#128512;";} else
  if (userChoice === 'paper' && computerChoice === 'paper') {
    return result = "It's a draw";} else
  if (userChoice === 'paper' && computerChoice === 'rock') {
    return result = "You win &#128512;";} else
  if (userChoice === 'paper' && computerChoice === 'scissor') {
    return result = "You loose &#128533;";} else
  if (userChoice === 'scissor' && computerChoice === 'scissor') {
    return result = "It's a draw";} else
  if (userChoice === 'scissor' && computerChoice === 'paper') {
    return result = "You win &#128512;";} else
  {
    return result = "You loose &#128533;";}
  //(userChoice === 'scissor' && computerChoice === 'rock')
}

function fillResult(result) {
  resultEl.innerHTML = result;
  resultContainer.classList.add('animate');
}

function removeActive() {
  userBtn.forEach(btn => btn.classList.remove('active'));
  computerRock.classList.remove('active');
  computerPaper.classList.remove('active');
  computerScissor.classList.remove('active');
  resultContainer.classList.remove('animate');
}

//helper function
function getAll(sel) {
  return document.body.querySelectorAll(sel);
}
function get(sel) {
  return document.body.querySelector(sel);
}