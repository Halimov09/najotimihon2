const bar = document.querySelector("#bar"),
  body = document.querySelector("body"),
  menu = document.querySelector(".header__container--menu"),
  btnn = document.querySelector("#btnn");

bar.addEventListener("click", () => {
  menu.classList.toggle("show");
});
btnn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
