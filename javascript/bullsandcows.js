var numCandidates = [];
var numArray = [];
var body = document.body;
var result = document.querySelector("h2");
var form = document.querySelector("form");
var input = document.querySelector("input");
var button = document.querySelector("button");
var answerList = document.querySelector(".answer-list")




form.addEventListener("submit", function game(e) {
  e.preventDefault();
  var answer = input.value;
  console.log(answer);
  if (answer === numArray.join("")) {
    result.textContent = "πβ¨νλ°πβ¨";
    numArray = [];
    cleanAnswerList();
    input.value = "";
    input.focus();
    randomNumber();
  } else {
    var answerArray = answer.split("");
    var strike = 0;
    var ball = 0;
    var out = 0;
    for (var i = 0; i < 4; i++) {
      //κ°μ μλ¦¬μΈμ§ λ¨Όμ  κ²μ¬
      if (Number(answerArray[i]) === numArray[i]) {
        strike++;
        //κ°μ μλ¦¬λ μλμ§λ§ μ«μκ° κ²ΉμΉλμ§ κ²μ¬
      } else if (numArray.indexOf(Number(answerArray[i])) > -1) {
        ball++;
      }
      else {
        out++;
      }
    }
    if (
      out === 4
    ) {
      result.textContent = "Out!";
      showScore();
      input.focus();
      input.value = "";
    } else {
      result.textContent = strike + "S " + ball + "B";
      showScore();
      input.focus();
      input.value = "";
    }
  }
});


function randomNumber() {
  numCandidates = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (i = 0; i < 4; i++) {
    var number = numCandidates.splice(Math.floor(Math.random() * (10 - i)), 1)[0];
    numArray.push(number);
  }
  console.log(numArray);
}
randomNumber();

function showScore() {
  var p = document.createElement("p");
  p.classList.add("pre-answer")
  p.textContent = "π " + input.value + " / " + result.textContent;
  answerList.appendChild(p)
}

function checkLength(input) {
  if (input.value.length > 4) {
    alert("μ«μλ 4κ°λ§ μλ ₯ν΄μ£ΌμΈμ!")
    input.value = ""
  }
}

function cleanAnswerList() {
  var preAnswers = document.querySelectorAll('.pre-answer');
  for (i = 0; i < preAnswers.length; i++) {
    answerList.removeChild(preAnswers[i]);
  }
}

