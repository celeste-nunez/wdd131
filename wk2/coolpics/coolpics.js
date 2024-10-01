const menuButton = document.getElementById('menu-button');

function toggleMenu() {
    const menu = document.querySelector(".menu-drop");
    menu.classList.toggle("hide")
}

menuButton.addEventListener("click", toggleMenu);


function updateImages() {
const images = document.querySelectorAll('.gallery img');
const screenWidth = window.innerWidth;

images.forEach((img) => {
    if (screenWidth > 1000) {
    img.src = "norris-full.jpeg";
    } else {
    img.src = "norris-sm.jpeg";
    }
});
}


window.addEventListener('load', updateImages);
window.addEventListener('resize', updateImages);
