// Show list menu on toggle with addEventListener method
const toggleMenu = document.getElementById('toggleMenu');
const listMenu = document.getElementById('listMenu');

toggleMenu.addEventListener('click', () => {
    listMenu.classList.toggle('active');
});