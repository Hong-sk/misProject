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

function makeWave() {
  for (i = 0; i < 100; i++) {
    var wave = document.createElement("div");
    wave.classList.add("wave");
    waves.push(wave);
    waves[i].style.border = "1px solid black";
    waves[i].style.left = i + "%";
    waves[i].style.animation = "waving";
    waves[i].style.animationDelay = `${(1 / 100) * i}s`;
    waves[i].style.animationDuration = "1s";
    waves[i].style.animationIterationCount = "infinite";
  }
  for (i = 0; i < 100; i++) {
    body.append(waves[i]);
  }
}
