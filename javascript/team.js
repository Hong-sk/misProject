var body = document.body;
var waves = [];
var cards = document.querySelectorAll(".card");

init();

function init() {
  makeWave();
  showCard();
}

function showCard() {
  for (i = 0; i < cards.length; i++) {
    cards[i].style.animation = `go-right${i}, float`;
    cards[i].style.animationDelay = `${i}s, 0s`;
    cards
  }
}

animation-duration: 5s, 1.5s;
  animation-iteration-count: 1, infinite;
  animation-fill-mode: forwards, forwards;
  animation-timing-function: linear;

function makeWave() {
  for (i = 0; i < 100; i++) {
    var wave = document.createElement("div");
    wave.classList.add("wave");
    waves.push(wave);
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
