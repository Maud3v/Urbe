const toggle = document.getElementById('themeToggle');
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        });
            if(localStorage.getItem('theme') === 'dark'){
                document.body.classList.add('dark');
            }

const navbarToggle = document.querySelector ('.navbar-toggle');
const navbarMenu = document.querySelector ('.navbar-menu');
navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});