let darkMode = true;
const buttonToggle = document.querySelector('.theme-changer')

buttonToggle.addEventListener('click', (event) => {
    document.documentElement.classList.toggle('light')

    const mode = darkMode ? 'light' : 'dark'
    event.currentTarget.querySelector('span').textContent = `${mode} mode enabled`

    darkMode = !darkMode
})