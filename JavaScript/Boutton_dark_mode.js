document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme) {
        document.querySelectorAll('body, header, nav, nav a, nav a:hover, .container, .main-content, .form-container, .form-container input, .form-container select, .form-container button, .form-container button:hover, .news-article, .news-article h2, table, th, td, th, .cell, img, .contact-form, .contact-form input, .contact-form textarea, .contact-form button, .contact-form button:hover, .clickable-image, footer').forEach(element => {
            element.classList.toggle('dark', currentTheme === 'dark');
        });
    }

    toggleButton.addEventListener('click', () => {

        document.querySelectorAll('body, header, nav, nav a, nav a:hover, .container, .main-content, .form-container, .form-container input, .form-container select, .form-container button, .form-container button:hover, .news-article, .news-article h2, table, th, td, th, .cell, img, .contact-form, .contact-form input, .contact-form textarea, .contact-form button, .contact-form button:hover, .clickable-image, footer').forEach(element => {
            element.classList.toggle('dark');
        });

        const theme = document.body.classList.contains('dark') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});