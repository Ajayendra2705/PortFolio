// Get the preloader element
const preloader = document.getElementById('preloader');

// Hide the preloader after 2 seconds
setTimeout(() => {
  preloader.style.display = 'none';
  window.location.href = 'http://127.0.0.1:5500/Home_page/index.html'
}, 2000); // 2000 milliseconds = 2 seconds