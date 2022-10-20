function start() {
  let x = 0;
  let y = 0;

  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 25; j++) {
      //   c.fillStyle = "Yellow";
      c.drawImage(mySpike, x, y, fixedSize, fixedSize);

      x += 30;
    }
    y += 30;
    x = 0;
  }

  c.drawImage(
    myPlayer,
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  c.drawImage(myCoin, 30, 30, fixedSize, fixedSize);
  for (let i = 0; i < 38; i++) {
    let x = randomIntFromInterval(0, 24);
    let y = randomIntFromInterval(0, 14);
    //   ctx.beginPath();
    tresureArray.push([x, y]);
    if (x == 12 && y == 7) continue;
    c.drawImage(myCoin, x * fixedSize, y * fixedSize, fixedSize, fixedSize);
  }
}

function moveUp() {
  attemptLabel.textContent = currentAttempt;
  console.log(currentPlayerPosition.y);
  if (currentPlayerPosition.y === 0) {
    return;
  }
  //   console.log("up");
  c.clearRect(
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  currentPlayerPosition.y -= 30;
  c.drawImage(
    myPlayer,
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  for (const item of tresureArray) {
    console.log(item[0], item[1]);
    if (
      currentPlayerPosition.x == item[0] * 30 &&
      currentPlayerPosition.y == item[1] * 30
    ) {
      currentScore += 110;
    }
  }
  currentScore -= 10;
  scoreLabel.textContent = currentScore;
  currentAttempt -= 1;
  if (currentAttempt < 1) {
    alert("You Lost The Game");
    return;
  }
}

function moveDown() {
  currentAttempt -= 1;
  if (currentAttempt < 1) {
    alert("You Lost The Game");
    return;
  }
  attemptLabel.textContent = currentAttempt;
  console.log(currentPlayerPosition.y);
  if (currentPlayerPosition.y === 420) {
    return;
  }
  //   console.log("");
  c.clearRect(
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  currentPlayerPosition.y += 30;
  c.drawImage(
    myPlayer,
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  for (const item of tresureArray) {
    console.log(item[0], item[1]);
    if (
      currentPlayerPosition.x == item[0] * 30 &&
      currentPlayerPosition.y == item[1] * 30
    ) {
      currentScore += 110;
    }
  }
  currentScore -= 10;
  scoreLabel.textContent = currentScore;
}
function moveLeft() {
  currentAttempt -= 1;
  if (currentAttempt < 1) {
    alert("You Lost The Game");
    return;
  }
  attemptLabel.textContent = currentAttempt;
  console.log(currentPlayerPosition.y);
  if (currentPlayerPosition.x === 0) {
    return;
  }
  //   console.log("");
  c.clearRect(
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  currentPlayerPosition.x -= 30;
  c.drawImage(
    myPlayer,
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  for (const item of tresureArray) {
    console.log(item[0], item[1]);
    if (
      currentPlayerPosition.x == item[0] * 30 &&
      currentPlayerPosition.y == item[1] * 30
    ) {
      currentScore += 110;
    }
  }
  currentScore -= 10;
  scoreLabel.textContent = currentScore;
}
function moveRight() {
  currentAttempt -= 1;
  if (currentAttempt < 1) {
    attemptLabel.textContent = currentAttempt;
    alert("You Lost The Game");
    return;
  }
  attemptLabel.textContent = currentAttempt;
  console.log(currentPlayerPosition.x);
  if (currentPlayerPosition.x === 720) {
    return;
  }
  //   console.log("");
  c.clearRect(
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  currentPlayerPosition.x += 30;
  c.drawImage(
    myPlayer,
    currentPlayerPosition.x,
    currentPlayerPosition.y,
    fixedSize,
    fixedSize
  );
  for (const item of tresureArray) {
    console.log(item[0], item[1]);
    if (
      currentPlayerPosition.x == item[0] * 30 &&
      currentPlayerPosition.y == item[1] * 30
    ) {
      currentScore += 110;
    }
  }
  currentScore -= 10;
  scoreLabel.textContent = currentScore;
}
function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
