const btnDarkMode = document.querySelector('.dark-mode-btn');

//Проверека темной темы на уровне системных настроек 

if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.add('dark');
}

//Проверка темной темы в  localstorage

if (localStorage.getItem('darkmode') === 'dark') {
    btnDarkMode.classList.toggle("dark-mode-btn--active");
    document.body.classList.add('dark');
}

//Если меняются системные настройки 

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event)=> {
   const newColorScheme = event.matches ? 'dark' : 'light';

   alert('Change!!!')
   
   if (newColorScheme === "dark") {
        btnDarkMode.classList.toggle("dark-mode-btn--active");
        document.body.classList.add('dark');
   } else {
        btnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove('dark');
   }
})

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