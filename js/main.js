const btnDarkMode = document.querySelector('.dark-mode-btn');

btnDarkMode.addEventListener('click', () => {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.toggle("dark");
})