document.addEventListener('DOMContentLoaded', initializeGallery);
document.addEventListener('updateGallery', initializeGallery);
// Adds two event listeners to link to html
function initializeGallery() {
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || []; // Gtes our saved canvas images from local storage
    const slidesElement = document.querySelector('ul[data-slides]'); // This find were the slides go by seraching the html page

    if (!slidesElement) return;// Makes sures there are slides to go through

    slidesElement.innerHTML = ''; // Clears anything that was orignal in the slides

    if (savedImages.length === 0) {// Checks if there are saved images for the slides
        const noImagesMessage = document.createElement('li');// If no saved images makes a list element
        noImagesMessage.textContent = 'No images available'; // Adds the text in the list that there is no images so user know
        noImagesMessage.classList.add('slide');  // Gives the text a class content
        noImagesMessage.dataset.active = true; // Sets no images message to active
        slidesElement.appendChild(noImagesMessage);// Ands message to img container
    } else { // If saved images run this
        savedImages.forEach((imageData, index) => { // Loops for all the images
            const slideElement = document.createElement('li'); // Creates list for all images
            slideElement.classList.add('slide');// Adds the slide class to them

            const imgElement = document.createElement('img'); // Creates the image class for the images
            imgElement.src = imageData;// Sets the source to the saved image data
            imgElement.classList.add('gallery-image');// Adds gallery-image class for the images

            if (index === 0) slideElement.dataset.active = true; // Sets the first slide to be active

            slideElement.appendChild(imgElement);// Add a saved image to the slide 
            slidesElement.appendChild(slideElement);// Adds the slides into the slides container
        });
    }
}

const buttons = document.querySelectorAll("[data-carousel-button]"); // Gets the carousel buttons with the element data-carousel-button

buttons.forEach(button => {// Runs for the loop for each button
    button.addEventListener("click", () => {// Adds the listen for when people click the button
        const offset = button.dataset.carouselButton === "next" ? 1 : -1; // Determines which direction to move the carousel via offset
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]');// Adds the closest element that has the data-carousel element then get the data-slides elemnt in them

        if (!slides || slides.children.length === 0) return;// Checks if the slides do exsit or not

        const activeSlide = slides.querySelector("[data-active]"); // Finds what slide is active 
        if (!activeSlide) return; // Finds if the avtive slide is found or not

        let newIndex = [...slides.children].indexOf(activeSlide) + offset;  // Finds the next slide by getting the index of current slide and adding a offset to it

        if (newIndex < 0) newIndex = slides.children.length - 1;// Goes to the last slide if we go beofre the first slide
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});
