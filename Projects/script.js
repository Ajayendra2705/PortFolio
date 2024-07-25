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
    }); // Adjust slide duration (milliseconds)
});

document.addEventListener("DOMContentLoaded", () => {
  const projects1BoxElement = document.querySelector('.projects_1_box'); // Select only .projects_1_box

  const projects1BoxObserverOptions = {
      root: null,
      threshold: 1.0 // Adjust if needed
  };

  let projects1BoxAnimationTriggered = false;

  const projects1BoxObserverCallback = (entries) => {
      if (entries.length > 0 && entries[0].isIntersecting && !projects1BoxAnimationTriggered) {
          projects1BoxAnimationTriggered = true;
          projects1BoxObserver.unobserve(projects1BoxElement); // Stop observing the element
          setTimeout(() => {
              projects1BoxElement.classList.add('animate'); // Add the class to .projects_1_box
          }, 500); // Add a 0.5-second delay before triggering the animation
      }
  };

  const projects1BoxObserver = new IntersectionObserver(projects1BoxObserverCallback, projects1BoxObserverOptions);
  projects1BoxObserver.observe(projects1BoxElement);
});

document.addEventListener("DOMContentLoaded", () => {
  const projects1BoxElement = document.querySelector('.projects_1_box'); // Select only .projects_1_box

  const projects1BoxObserverOptions = {
      root: null,
      threshold: 0.1 // Adjust threshold to ensure the element is fully in view
  };

  let projects1BoxAnimationTriggered = false;

  const projects1BoxObserverCallback = (entries) => {
      if (entries.length > 0 && entries[0].isIntersecting && !projects1BoxAnimationTriggered) {
          projects1BoxAnimationTriggered = true;
          projects1BoxObserver.unobserve(projects1BoxElement); // Stop observing the element
          setTimeout(() => {
              projects1BoxElement.classList.add('animate'); // Add the class to .projects_1_box
          }, 500); // Add a 0.5-second delay before triggering the animation
      }
  };

  const projects1BoxObserver = new IntersectionObserver(projects1BoxObserverCallback, projects1BoxObserverOptions);
  projects1BoxObserver.observe(projects1BoxElement);
});

document.addEventListener("DOMContentLoaded", () => {
  const projects2BoxElement = document.querySelector('.projects_2_box'); // Select only .projects_2_box

  const projects2BoxObserverOptions = {
      root: null,
      threshold: 0.1 // Adjust threshold to ensure the element is fully in view
  };

  let projects2BoxAnimationTriggered = false;

  const projects2BoxObserverCallback = (entries) => {
      if (entries.length > 0 && entries[0].isIntersecting && !projects2BoxAnimationTriggered) {
          projects2BoxAnimationTriggered = true;
          projects2BoxObserver.unobserve(projects2BoxElement); // Stop observing the element
          setTimeout(() => {
              projects2BoxElement.classList.add('animate'); // Add the class to .projects_2_box
          }, 500); // Add a 0.5-second delay before triggering the animation
      }
  };

  const projects2BoxObserver = new IntersectionObserver(projects2BoxObserverCallback, projects2BoxObserverOptions);
  projects2BoxObserver.observe(projects2BoxElement);
});

document.addEventListener("DOMContentLoaded", () => {
    const projects1BoxElement = document.querySelector('#Projects_new_box'); // Select only .projects_1_box_machine_learn
  
    const projects1BoxObserverOptions = {
        root: null,
        threshold: 0.1 // Adjust threshold to ensure the element is fully in view
    };
  
    let projects1BoxAnimationTriggered = false;
  
    const projects1BoxObserverCallback = (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting && !projects1BoxAnimationTriggered) {
            projects1BoxAnimationTriggered = true;
            projects1BoxObserverMachineLearn.unobserve(projects1BoxElement); // Stop observing the element
            setTimeout(() => {
                projects1BoxElement.classList.add('animate'); // Add the class to .projects_1_box_machine_learn
            }, 500); // Add a 0.5-second delay before triggering the animation
        }
    };
  
    const projects1BoxObserverMachineLearn = new IntersectionObserver(projects1BoxObserverCallback, projects1BoxObserverOptions);
    projects1BoxObserverMachineLearn.observe(projects1BoxElement);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const projects2BoxElement = document.querySelector('#projects_2_new_box'); // Select only .projects_2_box_machine_learn
  
    const projects2BoxObserverOptions = {
        root: null,
        threshold: 0.1 // Adjust threshold to ensure the element is fully in view
    };
  
    let projects2BoxAnimationTriggered = false;
  
    const projects2BoxObserverCallback = (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting && !projects2BoxAnimationTriggered) {
            projects2BoxAnimationTriggered = true;
            projects2BoxObserverMachineLearn2.unobserve(projects2BoxElement); // Stop observing the element
            setTimeout(() => {
                projects2BoxElement.classList.add('animate'); // Add the class to .projects_2_box_machine_learn
            }, 500); // Add a 0.5-second delay before triggering the animation
        }
    };
  
    const projects2BoxObserverMachineLearn2 = new IntersectionObserver(projects2BoxObserverCallback, projects2BoxObserverOptions);
    projects2BoxObserverMachineLearn2.observe(projects2BoxElement);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const projects1BoxElement = document.querySelector('#Projects_new_box_data'); // Select only .projects_1_box_data
  
    const projects1BoxObserverOptions = {
        root: null,
        threshold: 0.1 // Adjust threshold to ensure the element is fully in view
    };
  
    let projects1BoxAnimationTriggered = false;
  
    const projects1BoxObserverCallback = (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting && !projects1BoxAnimationTriggered) {
            projects1BoxAnimationTriggered = true;
            projects1BoxObserverData.unobserve(projects1BoxElement); // Stop observing the element
            setTimeout(() => {
                projects1BoxElement.classList.add('animate'); // Add the class to .projects_1_box_data
            }, 500); // Add a 0.5-second delay before triggering the animation
        }
    };
  
    const projects1BoxObserverData = new IntersectionObserver(projects1BoxObserverCallback, projects1BoxObserverOptions);
    projects1BoxObserverData.observe(projects1BoxElement);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const projects2BoxElement = document.querySelector('#projects_2_new_box_data'); // Select only .projects_2_box_data
  
    const projects2BoxObserverOptions = {
        root: null,
        threshold: 0.1 // Adjust threshold to ensure the element is fully in view
    };
  
    let projects2BoxAnimationTriggered = false;
  
    const projects2BoxObserverCallback = (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting && !projects2BoxAnimationTriggered) {
            projects2BoxAnimationTriggered = true;
            projects2BoxObserverData2.unobserve(projects2BoxElement); // Stop observing the element
            setTimeout(() => {
                projects2BoxElement.classList.add('animate'); // Add the class to .projects_2_box_data
            }, 500); // Add a 0.5-second delay before triggering the animation
        }
    };
  
    const projects2BoxObserverData2 = new IntersectionObserver(projects2BoxObserverCallback, projects2BoxObserverOptions);
    projects2BoxObserverData2.observe(projects2BoxElement);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const projects1BoxElement = document.querySelector('#projects_1_box_finance'); // Select only .projects_1_box_finance
  
    const projects1BoxObserverOptions = {
        root: null,
        threshold: 0.1 // Adjust threshold to ensure the element is fully in view
    };
  
    let projects1BoxAnimationTriggered = false;
  
    const projects1BoxObserverCallback = (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting && !projects1BoxAnimationTriggered) {
            projects1BoxAnimationTriggered = true;
            projects1BoxObserverFinance.unobserve(projects1BoxElement); // Stop observing the element
            setTimeout(() => {
                projects1BoxElement.classList.add('animate'); // Add the class to .projects_1_box_finance
            }, 500); // Add a 0.5-second delay before triggering the animation
        }
    };
  
    const projects1BoxObserverFinance = new IntersectionObserver(projects1BoxObserverCallback, projects1BoxObserverOptions);
    projects1BoxObserverFinance.observe(projects1BoxElement);
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const projects2BoxElement = document.querySelector('#projects_2_box_finance'); // Select only .projects_2_box_finance
  
    const projects2BoxObserverOptions = {
        root: null,
        threshold: 0.1 // Adjust threshold to ensure the element is fully in view
    };
  
    let projects2BoxAnimationTriggered = false;
  
    const projects2BoxObserverCallback = (entries) => {
        if (entries.length > 0 && entries[0].isIntersecting && !projects2BoxAnimationTriggered) {
            projects2BoxAnimationTriggered = true;
            projects2BoxObserverFinance2.unobserve(projects2BoxElement); // Stop observing the element
            setTimeout(() => {
                projects2BoxElement.classList.add('animate'); // Add the class to .projects_2_box_finance
            }, 500); // Add a 0.5-second delay before triggering the animation
        }
    };
  
    const projects2BoxObserverFinance2 = new IntersectionObserver(projects2BoxObserverCallback, projects2BoxObserverOptions);
    projects2BoxObserverFinance2.observe(projects2BoxElement);
  });
  
  