var body = document.body;
var waves = [];
var cards = document.querySelectorAll(".card");

init();

function init() {
  makeWave();
  showCard();
}

//옆으로 이동하는 거 없는 버전 x
function showCard() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.left = i * 20 + 5 + "%";
    cards[i].style.animation = `float`;
    cards[i].style.animationDelay = 0.05 + 0.2 * i + "s";
    cards[i].style.animationDuration = "1s";
    cards[i].style.animationIterationCount = "infinite";
    cards[i].style.animationFillMode = "forwards";
    cards[i].style.animationTimingFunction = "linear";
  }
}

// loop 횟수를 높일수록 보다 더 자연스러운 파도 연출 가능하나 화면에 버벅거리는 현상 발견하여 250으로 설정
function makeWave() {
  for (i = 0; i < 250; i++) {
    var wave = document.createElement("div");
    wave.classList.add("wave");
    waves.push(wave);
    waves[i].style.left = 0.4 * i + "%";
    waves[i].style.animation = "waving";
    waves[i].style.animationDelay = `${(1 / 250) * i}s`;
    waves[i].style.animationDuration = "1s";
    waves[i].style.animationIterationCount = "infinite";
  }
  for (i = 0; i < 250; i++) {
    body.append(waves[i]);
  }
}
