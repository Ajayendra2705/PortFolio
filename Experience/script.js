document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add the 'navbar-visible' class to trigger the animation
    setTimeout(() => {
        navbar.classList.add('navbar-visible');
    }, 750); // Delay to ensure the transition is visible
});

let animationTriggered = false;

const iitkgpElement = document.querySelector('#iit_image_image');

const observerOptions = {
  root: null,
  threshold: 1.0
};

const observerCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !animationTriggered) {
    animationTriggered = true;
    observer.unobserve(iitkgpElement); // Stop observing the element
    setTimeout(() => {
      iitkgpElement.classList.add('animate');
    }, 500); // Add a 1-second delay before triggering the animation
  }
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
observer.observe(iitkgpElement);

let writtenAnimationTriggered = false;

const itWrittenPartElement = document.querySelector('.iit_written_part');

const writtenObserverOptions = {
  root: null,
  threshold: 1.0
};

const writtenObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !writtenAnimationTriggered) {
    writtenAnimationTriggered = true;
    writtenObserver.unobserve(itWrittenPartElement); // Stop observing the element
    setTimeout(() => {
      itWrittenPartElement.classList.add('animate');
    }, 500); // Add a 1-second delay before triggering the animation
  }
};

const writtenObserver = new IntersectionObserver(writtenObserverCallback, writtenObserverOptions);
writtenObserver.observe(itWrittenPartElement);

let megalithAnimationTriggered = false;

const megalithElement = document.querySelector('#megalith_image_image');

const megalithObserverOptions = {
  root: null,
  threshold: 1.0
};

const megalithObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !megalithAnimationTriggered) {
    megalithAnimationTriggered = true;
    megalithObserver.unobserve(megalithElement); // Stop observing the element
    setTimeout(() => {
      megalithElement.classList.add('animate');
    }, 500); // Add a 1-second delay before triggering the animation
  }
};

const megalithObserver = new IntersectionObserver(megalithObserverCallback, megalithObserverOptions);
megalithObserver.observe(megalithElement);

let megalithWrittenAnimationTriggered = false;

const megalithWrittenPartElement = document.querySelector('.megalith_written_part');

const megalithWrittenObserverOptions = {
  root: null,
  threshold: 1.0
};

const megalithWrittenObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !megalithWrittenAnimationTriggered) {
    megalithWrittenAnimationTriggered = true;
    megalithWrittenObserver.unobserve(megalithWrittenPartElement); // Stop observing the element
    setTimeout(() => {
      megalithWrittenPartElement.classList.add('animate');
    }, 500); // Add a 1-second delay before triggering the animation
  }
};

const megalithWrittenObserver = new IntersectionObserver(megalithWrittenObserverCallback, megalithWrittenObserverOptions);
megalithWrittenObserver.observe(megalithWrittenPartElement);

let ppgsAnimationTriggered = false;

const ppgsElement = document.querySelector('#ppgs_image_image');

const ppgsObserverOptions = {
  root: null,
  threshold: 1.0
};

const ppgsObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !ppgsAnimationTriggered) {
    ppgsAnimationTriggered = true;
    ppgsObserver.unobserve(ppgsElement); // Stop observing the element
    setTimeout(() => {
      ppgsElement.classList.add('animate');
    }, 500); // Add a 1-second delay before triggering the animation
  }
};

const ppgsObserver = new IntersectionObserver(ppgsObserverCallback, ppgsObserverOptions);
ppgsObserver.observe(ppgsElement);

let ppgsWrittenAnimationTriggered = false;

const ppgsWrittenPartElement = document.querySelector('.ppgs_written_part');

const ppgsWrittenObserverOptions = {
  root: null,
  threshold: 1.0
};

const ppgsWrittenObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !ppgsWrittenAnimationTriggered) {
    ppgsWrittenAnimationTriggered = true;
    ppgsWrittenObserver.unobserve(ppgsWrittenPartElement); // Stop observing the element
    setTimeout(() => {
      ppgsWrittenPartElement.classList.add('animate');
    }, 500); // Add a 1-second delay before triggering the animation
  }
};

const ppgsWrittenObserver = new IntersectionObserver(ppgsWrittenObserverCallback, ppgsWrittenObserverOptions);
ppgsWrittenObserver.observe(ppgsWrittenPartElement);

document.getElementById('toggleButton').addEventListener('click', function() {
  var hiddenSection = document.getElementById('hiddenSection');
  if (hiddenSection.classList.contains('hidden')) {
      hiddenSection.classList.remove('hidden');
      this.textContent = 'Position of Responsibility ⬆️';
  } else {
      hiddenSection.classList.add('hidden');
      this.textContent = 'Position of Responsibility ⬇️';
  }
});

document.getElementById('toggleButton_new').addEventListener('click', function() {
  var hiddenSection = document.getElementById('hiddenSection_new');
  if (hiddenSection.classList.contains('hidden_new')) {
      hiddenSection.classList.remove('hidden_new');
      this.textContent = 'Conference Attended ⬆️';
  } else {
      hiddenSection.classList.add('hidden_new');
      this.textContent = 'Conference Attended ⬇️';
  }
});

document.getElementById('toggleButton_new_new').addEventListener('click', function() {
  var hiddenSection = document.getElementById('hiddenSection_new_new');
  if (hiddenSection.classList.contains('hidden_new_new')) {
      hiddenSection.classList.remove('hidden_new_new');
      this.textContent = 'Internships ⬆️';
  } else {
      hiddenSection.classList.add('hidden_new_new');
      this.textContent = 'Internships ⬇️';
  }
});


const hpairElement = document.querySelector('#hpair_image_image');

const hpairObserverOptions = {
  root: null,
  threshold: 1.0
};

let hpairAnimationTriggered = false;

const hpairObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !hpairAnimationTriggered) {
    hpairAnimationTriggered = true;
    hpairObserver.unobserve(hpairElement); // Stop observing the element
    setTimeout(() => {
      hpairElement.classList.add('animate');
    }, 500); // Add a 0.5-second delay before triggering the animation
  }
};

const hpairObserver = new IntersectionObserver(hpairObserverCallback, hpairObserverOptions);
hpairObserver.observe(hpairElement);

let hpairWrittenAnimationTriggered = false;

const hpairWrittenPartElement = document.querySelector('.hpair_written_part');

const hpairWrittenObserverOptions = {
  root: null,
  threshold: 1.0
};

const hpairWrittenObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !hpairWrittenAnimationTriggered) {
    hpairWrittenAnimationTriggered = true;
    hpairWrittenObserver.unobserve(hpairWrittenPartElement); // Stop observing the element
    setTimeout(() => {
      hpairWrittenPartElement.classList.add('animate');
    }, 500); // Add a 0.5-second delay before triggering the animation
  }
};

const hpairWrittenObserver = new IntersectionObserver(hpairWrittenObserverCallback, hpairWrittenObserverOptions);
hpairWrittenObserver.observe(hpairWrittenPartElement);

// Observing the image element
const intern1ImageElement = document.querySelector('#intern1_image_image');

const intern1ImageObserverOptions = {
  root: null,
  threshold: 1.0
};

let intern1ImageAnimationTriggered = false;

const intern1ImageObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !intern1ImageAnimationTriggered) {
    intern1ImageAnimationTriggered = true;
    intern1ImageObserver.unobserve(intern1ImageElement); // Stop observing the element
    setTimeout(() => {
      intern1ImageElement.classList.add('animate');
    }, 500); // Add a 0.5-second delay before triggering the animation
  }
};

const intern1ImageObserver = new IntersectionObserver(intern1ImageObserverCallback, intern1ImageObserverOptions);
intern1ImageObserver.observe(intern1ImageElement);

// Observing the written part element
let intern1WrittenAnimationTriggered = false;

const intern1WrittenPartElement = document.querySelector('.intern1_written_part');

const intern1WrittenObserverOptions = {
  root: null,
  threshold: 1.0
};

const intern1WrittenObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !intern1WrittenAnimationTriggered) {
    intern1WrittenAnimationTriggered = true;
    intern1WrittenObserver.unobserve(intern1WrittenPartElement); // Stop observing the element
    setTimeout(() => {
      intern1WrittenPartElement.classList.add('animate');
    }, 500); // Add a 0.5-second delay before triggering the animation
  }
};

const intern1WrittenObserver = new IntersectionObserver(intern1WrittenObserverCallback, intern1WrittenObserverOptions);
intern1WrittenObserver.observe(intern1WrittenPartElement);

document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const experienceImages = document.querySelectorAll('.experience_image');

  setInterval(function() {
      experienceImages[currentSlide].style.right = '0'; // Slide current slide out to the right
      currentSlide = (currentSlide + 1) % experienceImages.length; // Move to next slide
      experienceImages[currentSlide].style.right = '100%'; // Slide next slide in from the right
  }, 750); // Adjust slide duration (milliseconds)
});

