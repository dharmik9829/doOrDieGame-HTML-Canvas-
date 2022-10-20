document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowUp") {
    moveUp();
  } else if (e.key === "ArrowDown") {
    moveDown();
  } else if (e.key === "ArrowLeft") {
    moveLeft();
  } else if (e.key === "ArrowRight") {
    moveRight();
  }
});
