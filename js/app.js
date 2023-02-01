const bar = document.querySelector("#bar"),
  body = document.querySelector("body");
menu = document.querySelector(".header__container--menu"),
btnn = document.querySelector("#btnn")

function show() {
  menu.classList.add("show");
  body.style.overflow = "hidden";
}

function delet() {
  menu.classList.remove("show");
  body.style.overflow = "scroll";
}

bar.addEventListener("click", show);
btnn.addEventListener("click", delet)

