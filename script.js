document.addEventListener("DOMContentLoaded", function() {
    // Get the navbar element
    const navbar = document.querySelector('.navbar');

    // Add the 'navbar-visible' class to trigger the animation
    setTimeout(() => {
        navbar.classList.add('navbar-visible');
    }, 500); // Delay to ensure the transition is visible
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

let kv12AnimationTriggered = false;

const kv12ImageImageElement = document.querySelector('#kv12_image_image');

const kv12ObserverOptions = {
  root: null,
  threshold: 1.0
};

const kv12ObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !kv12AnimationTriggered) {
    kv12AnimationTriggered = true;
    kv12Observer.unobserve(kv12ImageImageElement); // Stop observing the element
    setTimeout(() => {
      kv12ImageImageElement.classList.add('animate');
    }, 500); // Add a 0.5-second delay before triggering the animation
  }
};

const kv12Observer = new IntersectionObserver(kv12ObserverCallback, kv12ObserverOptions);
kv12Observer.observe(kv12ImageImageElement);

let kv12WrittenAnimationTriggered = false;

const kv12WrittenPartElement = document.querySelector('.kv12_written_part');

const kv12WrittenObserverOptions = {
  root: null,
  threshold: 1.0
};

const kv12WrittenObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting && !kv12WrittenAnimationTriggered) {
    kv12WrittenAnimationTriggered = true;
    kv12WrittenObserver.unobserve(kv12WrittenPartElement); // Stop observing the element
    setTimeout(() => {
      kv12WrittenPartElement.classList.add('animate');
    }, 500); // Add a 1-second delay before triggering the animation
  }
};

const kv12WrittenObserver = new IntersectionObserver(kv12WrittenObserverCallback, kv12WrittenObserverOptions);
kv12WrittenObserver.observe(kv12WrittenPartElement);

let kv10AnimationTriggered = false;

const kv10ImageImageElement = document.querySelector('#kv10_image_image');

const kv10ObserverOptions = {
  root: null,
  threshold: 1.0
};

const kv10ObserverCallback = (entries) => {
  if (entries.length > 0 && entries[0].isIntersecting &&!kv10AnimationTriggered) {
    kv10AnimationTriggered = true;
    kv10Observer.unobserve(kv10ImageImageElement); // Stop observing the element
    setTimeout(() => {
      kv10ImageImageElement.classList.add('animate');
    }, 500); // Add a 0.5-second delay before triggering the animation
  }
};

const kv10Observer = new IntersectionObserver(kv10ObserverCallback, kv10ObserverOptions);
kv10Observer.observe(kv10ImageImageElement);

let kv10WrittenPartAnimationTriggered = false;

const kv10WrittenPartElements = document.querySelectorAll('.kv10_written_part');

const kv10WrittenPartObserverOptions = {
  root: null,
  threshold: 1.0
};

const kv10WrittenPartCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting && !kv10WrittenPartAnimationTriggered) {
      kv10WrittenPartAnimationTriggered = true;
      kv10WrittenPartObserver.unobserve(entry.target); // Stop observing the element
      setTimeout(() => {
        entry.target.classList.add('animate');
      }, 500); // Add a 0.5-second delay before triggering the animation
    }
  });
};

const kv10WrittenPartObserver = new IntersectionObserver(kv10WrittenPartCallback, kv10WrittenPartObserverOptions);
kv10WrittenPartElements.forEach((element) => {
  kv10WrittenPartObserver.observe(element);
});

function openImage(imageUrl) {
  window.open(imageUrl, '_blank');
}
