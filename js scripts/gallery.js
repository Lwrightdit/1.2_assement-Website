document.addEventListener('DOMContentLoaded', () => {
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || []; // Finds and retrieves saved images in local storage
    const slidesElement = document.querySelector('ul[data-slides]'); // Selects the ul[data-slides] element for the images to be added
    
    savedImages.forEach((imageData, index) => { // Loop through each saved image with its index
        const imgElement = document.createElement('img');
        imgElement.src = imageData; // This makes it so the img source is saved data URL from const imageData = canvas.toDataURL();
        imgElement.classList.add('gallery-image'); // This adds the class gallery-image to each image so I can edit them with CSS
        
        const slideElement = document.createElement('li'); // Create a new li element for each image
        slideElement.classList.add('slide'); // Adds the slide class so the carousel can work
        if (index === 0) slideElement.dataset.active = true; // Make the first image be activated 

        slideElement.appendChild(imgElement); // Add the img element to the li.slide
        slidesElement.appendChild(slideElement); // Add the li.slide to the ul[data-slides]
    });
    // This whole part basically goes through each saved image and creates an img element for them all
});

const buttons = document.querySelectorAll("[data-carousel-button]"); // Select all carousel buttons

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1; // Determine if we move forward or backward
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]'); // Find the slides container

        const activeSlide = slides.querySelector("[data-active]"); // Find the currently active slide
        let newIndex = [...slides.children].indexOf(activeSlide) + offset; // Calculate the new slide index
        if (newIndex < 0) newIndex = slides.children.length - 1; // Wrap around to the last slide if moving backward from the first slide
        if (newIndex >= slides.children.length) newIndex = 0; // Wrap around to the first slide if moving forward from the last slide

        slides.children[newIndex].dataset.active = true; // Set the new active slide
        delete activeSlide.dataset.active; // Remove the active status from the previous slide
    });
});
