const title = document.querySelector(".title");
const space = document.getElementById("space");
const div = "box";

title.addEventListener("click", fillDisplay);

function fillDisplay() {
  const box = document.createElement("div");
  box.classList.add(div);
  space.append(box);
}
