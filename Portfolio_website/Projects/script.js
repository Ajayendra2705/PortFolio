document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add the 'navbar-visible' class to trigger the animation
    setTimeout(() => {
        navbar.classList.add('navbar-visible');
    }, 750); // Delay to ensure the transition is visible
});

