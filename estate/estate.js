function toggleMenu() {
    const menu = document.querySelector("nav");
    menu.classList.toggle("hide")
}

window.addEventListener("resize", function() {
    const nav = document.querySelector('nav');
    
    if (window.innerWidth >= 950) {
      nav.classList.remove('hide');
    } else {
      nav.classList.add('hide');
    }
});

document.querySelector('.menuButton').addEventListener('click', toggleMenu);
