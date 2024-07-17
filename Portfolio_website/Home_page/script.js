document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add the 'navbar-visible' class to trigger the animation
    setTimeout(() => {
        navbar.classList.add('navbar-visible');
    }, 750); // Delay to ensure the transition is visible
});


document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    setInterval(function() {
        slides[currentSlide].style.left = '100%'; // Slide current slide out to the right
        currentSlide = (currentSlide + 1) % slides.length; // Move to next slide
        slides[currentSlide].style.left = '0'; // Slide next slide in from the right
    }, 750); // Adjust slide duration (milliseconds)
});

