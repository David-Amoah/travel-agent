const menu = document.querySelector(".menu");
const exit = document.querySelector(".exit");

menu.addEventListener("click", () => {
    exit.classList.toggle("open");
});