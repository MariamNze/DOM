const button = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown-menu-content");

button.addEventListener("click", () => {
    dropdown.classList.toggle("visible");
});