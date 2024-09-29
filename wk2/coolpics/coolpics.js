const menuButton = document.getElementById('menu-button');

function toggleMenu() {
    const menu = document.querySelector(".menu-drop");
    menu.classList.toggle("hide")
}

menuButton.addEventListener("click", toggleMenu);
