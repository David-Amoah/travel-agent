const menu = document.querySelector(".menu");
const nav = document.querySelector(".main");

menu.addEventListener("click", () => {
    nav.classList.toggle("open");
});