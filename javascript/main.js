const title = document.querySelector(".title");
const buildings = document.getElementsByClassName("building");
const footer = document.querySelector("footer");
const cycle = document.querySelector("#cycle");
const description = document.querySelector("#introduction");
const cloud = document.querySelector("#cloud");
const clouds = document.querySelector("#clouds");
const sun = document.querySelector("#sun");

title.addEventListener("click", disapear);

function disapear() {
  for (i = 0; i < buildings.length; i++) {
    buildings[i].classList.add("buildings-disapear");
  }
  footer.classList.add("footer-disapear");
  cycle.classList.add("cycle-disapear");
  title.classList.add("title-disapear");
  description.classList.add("description-disapear");
  cloud.classList.add("sky-disapear");
  sun.classList.add("sky-disapear");
  clouds.classList.add("clouds-disapear");
}
