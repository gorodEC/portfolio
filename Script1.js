// JavaScript source code
// Переключение темы
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

// Счетчик опыта
const startYear = 2020;
const currentYear = new Date().getFullYear();

document.getElementById('yearsCounter').textContent =
    currentYear - startYear;

// Фильтрация проектов
const buttons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        projects.forEach(project => {
            if (
                filter === 'all' ||
                project.dataset.category === filter
            ) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});