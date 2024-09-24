let score1 = document.querySelector(".score1");
let ball = document.querySelector(".ball1");
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let color = document.getElementsByClassName("gaming1")[0];
let color2 = document.getElementsByClassName("gaming2")[0];
let score2 = document.querySelector(".score2");
let ochqo = document.querySelector(".ball2");
let textContainer = document.querySelector(".textContainer");
let textContainer2 = document.querySelector(".textContainer2");

button1.addEventListener("click", function () {
  let res = Math.floor(Math.random() * 10);
  ball.textContent = res;
  score1.textContent = (+score1.textContent || 0) + res;
  if (+score1.textContent >= 10) {
    score1.textContent = 10;
  }
  if (+score1.textContent === 10) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "WIN";
    textContainer.appendChild(newParagraph);
    newParagraph.style.color = "white";
    newParagraph.style.backgroundColor = "gold";
    newParagraph.style.paddingTop = "10px";
    newParagraph.style.marginTop = "10px";
    newParagraph.style.fontSize = "30px";
  }
});
button1.addEventListener("click", function () {
  if (color.style.backgroundColor === "rgb(0, 255, 68)") {
    color.style.backgroundColor = " rgb(0, 255, 72)";
  } else {
    color.style.backgroundColor = "rgb(0, 255, 68)";
  }
});

button1.addEventListener("click", function () {
  if (color2.style.backgroundColor === "red") {
    color2.style.backgroundColor = "rgb(0, 255, 68)";
  } else {
    color2.style.backgroundColor = "red";
  }
});

button2.addEventListener("click", function () {
  if (color2.style.backgroundColor === "rgb(0, 255, 68)") {
    color2.style.backgroundColor = "rgb(0, 255, 68)";
  } else {
    color2.style.backgroundColor = "rgb(0, 255, 68)";
  }
});

button2.addEventListener("click", function () {
  if (color.style.backgroundColor === "red") {
    color.style.backgroundColor = "red";
  } else {
    color.style.backgroundColor = "red";
  }
});
// --------------------------------------
button2.addEventListener("click", function () {
  let res = Math.floor(Math.random() * 10);
  ochqo.textContent = res;
  score2.textContent = (+score2.textContent || 0) + res;
  if (+score2.textContent >= 10) {
    score2.textContent = 10;
  }
  if (+score2.textContent === 10) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "WIN";
    textContainer2.appendChild(newParagraph);
    newParagraph.style.color = "white";
    newParagraph.style.backgroundColor = "gold";
    newParagraph.style.paddingTop = "10px";
    newParagraph.style.marginTop = "10px";
    newParagraph.style.fontSize = "30px";
  }
});
