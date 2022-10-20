window.oncontextmenu = (e) => {
  e.preventDefault();
};
window.onresize = () => {
  resize(false);
};
window.onload = start;
let currentPlayerPosition = { x: 360, y: 210 };
const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const fixedSize = 30;
const myPlayer = document.getElementById("source");
const mySpike = document.getElementById("spike");
const myCoin = document.getElementById("coin");
const scoreLabel = document.getElementById("scoreInNumber");
const attemptLabel = document.getElementById("attempt");
canvas.width = 750;
canvas.height = 450;
const totalAttempt = 40;
let currentScore = 0;
let currentAttempt = totalAttempt;
let tresureArray = [];
