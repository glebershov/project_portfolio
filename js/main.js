const btnDarkMode = document.querySelector('.dark-mode-btn');


//Проверка темной темы в  localstorage
if (localStorage.getItem('darkmode') === 'dark') {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.add('dark');
} else if (localStorage.getItem('darkmode') === 'light') {

}
//Включение ночного режима по кнопке 
btnDarkMode.addEventListener('click', () => {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle("dark");

    if (isDark) {
        localStorage.setItem('darkmode', 'dark')
    } else {
        localStorage.setItem('darkmode', 'light');
    }

})