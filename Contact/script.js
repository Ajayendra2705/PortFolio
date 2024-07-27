document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add the 'navbar-visible' class to trigger the animation
    setTimeout(() => {
        navbar.classList.add('navbar-visible');
    }, 750); // Delay to ensure the transition is visible
});

document.getElementById('toggleButton').addEventListener('click', function() {
    var hiddenSection = document.getElementById('hiddenSection');
    if (hiddenSection.classList.contains('hidden')) {
        hiddenSection.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        hiddenSection.classList.add('hidden');
        this.textContent = 'Show More';
    }
});



