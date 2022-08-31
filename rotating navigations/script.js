const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");
function openNav() {
  container.classList.add("show-nav");
}

function closeNav() {
  container.classList.remove("show-nav");
}

open.addEventListener("click", openNav);
close.addEventListener("click", closeNav);