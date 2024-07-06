// Event to make the page scrolls up when clicked

document.addEventListener('DOMContentLoaded', function() {
    var arrowUp = document.getElementById('arrow-up');

    arrowUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

