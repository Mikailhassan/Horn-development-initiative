const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('nav div:nth-child(2)');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
});
