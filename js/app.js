const bar = document.querySelector("#bar"),
  menu = document.querySelector(".header__container--menu");

bar.addEventListener("click", () => {
    menu.classList.toggle("show")
});
