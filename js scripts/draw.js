// Gets the elements for linewidth and color and lineWidth label (so it can update) clear button and submit button
const colorPicker = document.getElementById('stroke');
const lineWidthRange = document.getElementById('LineWidth');
const lineWidthValueLabel = document.getElementById('LineWidthValue');
const clearButton = document.getElementById('clear');
const submitButton = document.getElementById('submit');
const eraserButton = document.getElementById('eraser')
const drawButton = document.getElementById('draw')
// Get the canvas element and its context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

ctx.fillStyle = '#FFFFFF'; // Set fill color to white
ctx.fillRect(0, 0, canvas.width, canvas.height); // Gives canvas white backround
// Variable to keep track of whether the user is drawing
let drawing = false;
//Varible to see if the user has started drawing
let hasDrawing = false;

// Add event listeners for mouse events and touch screen events and gives each one a function
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchstart', startDrawingTouch);
canvas.addEventListener('touchend', stopDrawing);
canvas.addEventListener('touchmove', drawTouch)

// Function to start drawing
function startDrawing(event) {
    drawing = true;
    draw(event); // Call draw to ensure a dot is drawn even on a simple click
    hasDrawing = true; // Shows the user has started drawing
}

// Function to stop drawing
function stopDrawing() {
    drawing = false;
    ctx.beginPath(); // Reset the path to prevent connecting lines between strokes
}

// Function to handle the drawing
function draw(event) {
    if (!drawing) return; // Do nothing if the mouse is not pressed

    // Set drawing parameters
    ctx.lineWidth = lineWidthRange.value; // Width of the line based on what user picked
    ctx.lineCap = 'round'; // Smooth line endings 

    if (!eraserActive) { //Changes depenind on drawing or not drawing so color picker works
        ctx.strokeStyle = colorPicker.value; // Line color based on what the user picked
    }

    // Draw a line to the current mouse position
    ctx.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
    ctx.stroke(); // Render the line
    ctx.beginPath(); // Start a new path to prevent continuous lines
    ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop); // Move to the new mouse position
}
// Addevent lister so when the line width is changed this will be called
lineWidthRange.addEventListener('input', function () {
    lineWidthValueLabel.textContent = this.value; //Changes the line width label to the line width value so its updated
});
// Adds a event listen so when the clear buttlon is clicked it will call this function
clearButton.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears anything within the canvas width and height (so whole canvas)
    hasDrawing = false; // Goes back to you havent drawn
    ctx.fillStyle = '#FFFFFF'; // Set fill color to white
    ctx.fillRect(0, 0, canvas.width, canvas.height); // Gives canvas white backround
});
// Adds a event lister for the submit button
submitButton.addEventListener('click', function () {
    if (!hasDrawing) { // Check if anything has been drawn
        alert('You cannot submit an empty canvas. Please draw something before submitting.'); // Alert if canvas is empty
    } else {
        const imageData = canvas.toDataURL(); // Converts the content of the canvas into an image data URL

        const savedImages = JSON.parse(localStorage.getItem('savedImages')) || []; // Get any previously saved images from local storage

        savedImages.push(imageData); // Add the new image data URL to the array of saved images
        localStorage.setItem('savedImages', JSON.stringify(savedImages)); // Save the updated array to local storage

        //* Local storage doesn’t allow direct saving of images. Therefore, you need to retrieve all previously saved images,
        // add the new image to the array, and then save the entire array back to local storage to preserve previously saved images.

        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the entire canvas
        ctx.fillStyle = '#FFFFFF'; // Set fill color to white
        ctx.fillRect(0, 0, canvas.width, canvas.height); // Gives canvas white backround
        hasDrawing = false; // Goes back to you havent drawn anything
    }
});
const targetSection = document.querySelector('.canvas'); // Target the canvas element (the class below get applyed to it) element
// Adds draw and erase, pretty simple
eraserButton.addEventListener('click', function () {
    eraserActive = true; // Set eraser mode to active
    ctx.strokeStyle = 'white';
    targetSection.classList.remove('draw-active');// Removes draw active incase its activated
    targetSection.classList.toggle('erase-active'); // Toggle the erase-active class on the section
});

drawButton.addEventListener('click', function () {
    eraserActive = false// Sets eraser mode to of
    // Set eraser mode to of
    targetSection.classList.remove('erase-active');// Removes erase active incase its activated
    targetSection.classList.toggle('draw-active'); // Toggle the draw-active class on the section
});

// These functions allow touch screen drawings
function startDrawingTouch(event) {
    event.preventDefault(); // This stops you from scrolling while drawing
    drawing = true;
    hasDrawing = true; // Shows the user has started drawing
    drawTouch(event); // Makes sure even if you tap once it will draw (same as mouse drawing code)
}

function drawTouch(event) {
    if (!drawing) return; // Does nothing if the user isnet drawingc (same as mouse)

    const touch = event.touches[0]; // Get the first point that they touch

    // Set drawing parameters
    ctx.lineWidth = lineWidthRange.value; // Width of the line based on what user picked
    ctx.lineCap = 'round'; // Smooth line endings

    if (!eraserActive) {
        ctx.strokeStyle = colorPicker.value; // Line color based on what the user picked
    }

    // This draws a line to were on the canvas is being touched
    ctx.lineTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop);
    ctx.stroke(); // This reneders the lie, same as mouse drawing 
    ctx.beginPath(); // Start a new path to prevent continuous lines
    ctx.moveTo(touch.clientX - canvas.offsetLeft, touch.clientY - canvas.offsetTop); // Moves to whereer they next touch
}
