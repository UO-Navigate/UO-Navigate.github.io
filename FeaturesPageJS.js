const searchInput = document.querySelector('.search-input');
const searchSection = document.querySelector('.search-section');

searchInput.addEventListener('input', function() {
    if (this.value.trim().length > 0) {
        searchSection.style.display = 'block';
    } else {
        searchSection.style.display = 'none';
    }
});

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
});
