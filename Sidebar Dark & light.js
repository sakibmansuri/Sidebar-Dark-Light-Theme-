const sidebar = document.querySelector('.sidebar');

const sidebarToggleBtn = document.querySelector('.sidebar-toggle');

const themeToggleBtn = document.querySelector('.theme-toggle');

const themeIcon = themeToggleBtn.querySelector('.theme-icon')

const searchForm = document.querySelector('.search')

const updateThemeIcon = () => {
    const isDark = document.body.classList.contains('dark-theme');  
    themeIcon.textContent = sidebar.classList.contains('collapsed') ? (isDark ? 'light_mode' : 'dark_mode') : 'dark_mode';
};

const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia
('(prefers-color: dark)').matches;
const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

document.body.classList.toggle('dark-theme', shouldUseDark);
updateThemeIcon();

// Toggle collapse
sidebarToggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    updateThemeIcon();
})

searchForm.addEventListener('click', () => {
    if(sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        searchForm.querySelector('input').focus();
    };
});

// Dark mode and keping theme selected saved
themeToggleBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-theme');

    localStorage.setItem('theme', isDark ? 'dark' : 'light');

    updateThemeIcon();
});