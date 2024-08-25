document.addEventListener('DOMContentLoaded', () => {
    const savedImages = JSON.parse(localStorage.getItem('savedImages')) || []; // Finds and retrived saved images in local storage
    const galleryContainer = document.getElementById('galleryContainer'); // Finds the container were it will display the saved images

    savedImages.forEach(imageData => {
        const imgElement = document.createElement('img');
        imgElement.src = imageData; // This makes it so the img source is saved data url from const imageData = canvas.toDataURL();
        galleryContainer.appendChild(imgElement); // This add the img to a  container 
    });
    // This whole part bassicly goes through each saved images and creates a img element for them all
});

