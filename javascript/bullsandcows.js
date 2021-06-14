var numCandidates = [];
var numArray = [];
var body = document.body;
var result = document.querySelector("h2");
var form = document.querySelector("form");
var input = document.querySelector("input");
var button = document.querySelector("button");
var answerList = document.querySelector(".answer-list")
input.maxLength = 4;



function randomNumber() {
  numCandidates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (i = 0; i < 4; i++) {
    var number = numCandidates.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
    numArray.push(number);
  }
}

randomNumber();
console.log(numArray);

form.addEventListener("submit", function game(e) {
  e.preventDefault();
  var answer = input.value;
  console.log(answer);
  if (answer == numArray.join("")) {
    result.textContent = "🎉✨홈런🎉✨";
    input.value = "";
    input.focus();
    randomNumber();
  } else {
    var answerArray = answer.split("");
    var strike = 0;
    var ball = 0;
    for (var i = 0; i < 4; i++) {
      //같은 자리인지 먼저 검사
      if (Number(answerArray[i]) === numArray[i]) {
        strike++;
        //같은 자리는 아니지만 숫자가 겹치는지 검사
      } else if (numArray.indexOf(Number(answerArray[i])) > -1) {
        ball++;
      }
    }
    if (
      numArray.indexOf(Number(answerArray[0])) &&
      numArray.indexOf(Number(answerArray[1])) &&
      numArray.indexOf(Number(answerArray[2])) &&
      numArray.indexOf(Number(answerArray[3])) == -1
    ) {
      result.textContent = "Out!";
      showScore();
      input.focus();
    } else {
      result.textContent = strike + "S " + ball + "B";
      showScore();
      input.focus();
    }
  }
});

function showScore() {
  var p = document.createElement("p");
  p.classList.add("pre-answer")
  p.textContent = "🏏 " + input.value + " / " + result.textContent;
  answerList.appendChild(p)
}

function checkLength(input) {
  if (input.value.length > 4) {
    alert("숫자는 4개만 입력해주세요!")
    input.value = ""
  }
}