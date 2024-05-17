function changeLanguage(lang) {
    localStorage.setItem('selectedLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    var elements = document.querySelectorAll('[data-lang]');
    elements.forEach(function(element) {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    var selectedLanguage = localStorage.getItem('selectedLanguage') || 'zh';
    applyLanguage(selectedLanguage);
});
