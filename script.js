
/* SCREEN NAVIGATION */
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const next = document.getElementById(id);
  if (next) next.classList.add("active");
}

/* INVITATION */
function openInvitation() {
  showScreen("welcome");
}

/* QUESTION 1 */
function karelaChosen() {
  document.getElementById("karelaBtn").classList.add("hidden");
  document.getElementById("ekkiInputArea").classList.remove("hidden");
  document.getElementById("inputMessage").textContent =
    "Karela is not the answer. Type the correct one! 😭";
}

function ekkiTyped() {
  showScreen("q2");
}

function checkEkki() {
  const answer = document.getElementById("ekkiInput").value.trim().toLowerCase();

  if (answer === "ekki") {
    showScreen("q2");
  } else {
    document.getElementById("inputMessage").textContent =
      "NOOO 😭 Try typing Ekki!";
  }
}

/* QUESTION 2 */
let ekkiTappedOnce = false;

function chooseEkki() {
  const button = document.getElementById("ekkiLoveBtn");
  const parent = button.parentElement;

  if (!ekkiTappedOnce) {
    parent.insertBefore(button, document.getElementById("simuLoveBtn"));
    ekkiTappedOnce = true;
    document.getElementById("loveHint").textContent =
      "Now tap Ekki again, jaanu. ❤️";
  } else {
    showScreen("q3");
  }
}

function chooseSimu() {
  document.getElementById("loveHint").textContent =
    "Hehehe. Try the other answer, Simuuu. 😭";
}

/* QUESTION 3 */
function runningChosen() {
  document.getElementById("runningBtn").classList.add("hidden");
}

/* QUESTION 4 */
function ekkiGreatness() {
  document.getElementById("ekkiGreatBtn").classList.add("hidden");
}

/* NO NEXT BUTTON */
function runAwayNo() {
  const button = document.querySelector("#page2 .secondary");
  const card = document.querySelector("#page2 .card");

  if (!button || !card) return;

  button.style.position = "relative";
  button.style.left = (Math.random() * 150 - 75) + "px";
  button.style.top = (Math.random() * 70 - 35) + "px";
}

/* HEART COLLECTOR GAME */
const GRID_WIDTH = 10;
const GRID_HEIGHT = 6;

let playerX = 0;
let playerY = 0;
let score = 0;
let gameRunning = false;

const hazards = [
  { x: 4, y: 1 },
  { x: 7, y: 3 },
  { x: 2, y: 4 }
];

let heartX = 8;
let heartY = 4;

function startGame() {
  playerX = 0;
  playerY = 0;
  score = 0;
  gameRunning = true;

  placeHeart();
  updateGame();
  showScreen("game");

  document.getElementById("gameMessage").textContent =
    "Collect 10 hearts and avoid the obstacles. Good luck, Simu! ❤️";
}

function placeHeart() {
  let valid = false;

  while (!valid) {
    heartX = Math.floor(Math.random() * GRID_WIDTH);
    heartY = Math.floor(Math.random() * GRID_HEIGHT);

    valid =
      !(heartX === playerX && heartY === playerY) &&
      !hazards.some(h => h.x === heartX && h.y === heartY);
  }
}

function updateGame() {
  const player = document.getElementById("player");
  const collectible = document.getElementById("collectible");

  player.style.left = (playerX * 10) + "%";
  player.style.top = (playerY * (100 / GRID_HEIGHT)) + "%";

  collectible.style.left = (heartX * 10) + "%";
  collectible.style.top = (heartY * (100 / GRID_HEIGHT)) + "%";

  document.getElementById("score").textContent = score;
  document.getElementById("progress").style.width = (score * 10) + "%";
}

function movePlayer(dx, dy) {
  if (!gameRunning) return;

  const nextX = Math.max(0, Math.min(GRID_WIDTH - 1, playerX + dx));
  const nextY = Math.max(0, Math.min(GRID_HEIGHT - 1, playerY + dy));

  playerX = nextX;
  playerY = nextY;

  const hitObstacle = hazards.some(h => h.x === playerX && h.y === playerY);

  if (hitObstacle) {
    playerX = 0;
    playerY = 0;
    document.getElementById("gameMessage").textContent =
      "Oops! You hit an obstacle. Back to the start, jaanu! 😭";
    updateGame();
    return;
  }

  if (playerX === heartX && playerY === heartY) {
    score++;

    if (score >= 10) {
      gameRunning = false;
      document.getElementById("score").textContent = "10";
      document.getElementById("progress").style.width = "100%";
      document.getElementById("gameMessage").textContent =
        "YOU DID IT, SIMUUU! ❤️";
      setTimeout(() => showScreen("reward"), 900);
      return;
    }

    placeHeart();
    document.getElementById("gameMessage").textContent =
      "YAY! Another heart collected. Keep going! ❤️";
  }

  updateGame();
}

/* KEYBOARD CONTROLS */
document.addEventListener("keydown", event => {
  const gameScreen = document.getElementById("game");

  if (!gameScreen.classList.contains("active")) return;

  if (event.key === "ArrowUp" || event.key.toLowerCase() === "w") {
    event.preventDefault();
    movePlayer(0, -1);
  } else if (event.key === "ArrowDown" || event.key.toLowerCase() === "s") {
    event.preventDefault();
    movePlayer(0, 1);
  } else if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
    event.preventDefault();
    movePlayer(-1, 0);
  } else if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
    event.preventDefault();
    movePlayer(1, 0);
  }
});
