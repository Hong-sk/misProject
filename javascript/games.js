const body = document.body;
var stars = [];
var twinkleCandidates = [];
var moveCandidates = [];

init();

function init() {
  setTimeout(setBgColor, 2900);
  createStars();
  twinkleStars();
  moveStars();
}

//좌우로 왔다갔다
function moveStars() {
  for (i = 0; i < 10; i++) {
    var moveCandidate = stars.splice(
      Math.floor(Math.random() * (stars.length - i)),
      1
    )[0];
    moveCandidates.push(moveCandidate);
    moveCandidates[i].classList.add("move");
  }
}
//별들의 크기를 확대,축소시켜 반짝거리는 것처럼 표현
function twinkleStars() {
  for (i = 0; i < 10; i++) {
    var twinkleCandidate = stars.splice(
      Math.floor(Math.random() * (stars.length - i)),
      1
    )[0];
    twinkleCandidates.push(twinkleCandidate);
    twinkleCandidates[i].classList.add("scale");
  }
}

//색깔들을 랜덤으로 정할 수 있는 함수, 다른 색깔 추가할 경우 colorArray에 추가하고 Math.random()에 색의 총 갯수만큼 곱해줄 것
function setStarColor() {
  const colorArray = ["white"];
  return colorArray[Math.floor(Math.random())];
}

// 무작위 좌표에 무작위 크기로 별들을 생성
function createStars() {
  const fragment = document.createDocumentFragment();
  for (var i = 0; i < 50; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    stars.push(star);
    stars[i].style.width = Math.random() * 20 + "px";
    stars[i].style.height = stars[i].style.width;
    stars[i].style.borderRadius = "50%";
    stars[i].style.top = parseFloat(Math.random() * 100) + "%";
    //양옆으로 움직이기 때문에 가로스크롤 생기는 거 방지하기 위해 100보다 작은 수 입력
    stars[i].style.left = parseFloat(Math.random() * 98) + "%";
    stars[i].style.backgroundColor = setStarColor();
    fragment.appendChild(stars[i]);
  }
  body.appendChild(fragment);
}

//css animation으로 background-image를 gradient로 주어 배경색을 서서히 바꾸고 싶었으나 바로바로 색깔이 바뀌는 문제 발견
//gradient의 색상 차이가 크지않고 거의 비슷하므로 그냥 애니메이션에 background-color를 gradient의 색상 중 하나로 바꾸고
//background-image가 background-color보다 우선함을 이용하여 애니메이션에 background-color를 바뀌게끔 하고
//자바스크립트 setTimeout를 통해 애니메이션이 끝나고 얼마 지나지 않아 background-image를 설정하게끔 하여
//색상의 변화 차이를 잘 모르게끔 임시방편으로 해결

function setBgColor() {
  body.style.backgroundImage = "linear-gradient(#cfdef3, #e0eafc, white)";
}
