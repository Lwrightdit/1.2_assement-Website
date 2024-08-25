const prompts = [
    "Draw your favorite animal.",
    "Sketch a scene from your favorite movie.",
    "Create a fantasy landscape.",
    "Illustrate a mythical creature.",
    "Design a futuristic cityscape.",
    "Depict an underwater adventure.",
    "Draw a historical figure.",
    "Create an abstract geometric pattern.",
    "Sketch a superhero in action.",
    "Illustrate a magical forest.",
    "Draw an object from daily life.",
    "Create a portrait of a famous person.",
    "Depict an epic battle scene.",
    "Design a unique fashion outfit.",
    "Illustrate a serene nature scene.",
    "Sketch a technological gadget.",
    "Draw a festive celebration.",
    "Create a detailed wildlife scene.",
    "Depict an emotional expression.",
    "Illustrate a classic art style.",
    "Design a character from a fantasy world.",
    "Sketch a modern urban landscape.",
    "Create a whimsical fairy tale scene.",
    "Draw a surreal dreamscape.",
    "Illustrate a detailed food dish.",
    "Design an ancient artifact.",
    "Depict a scene from your favorite book.",
    "Create an artwork inspired by a historical event.",
    "Draw an imaginary creature's habitat.",
    "Illustrate a comic book cover.",
    "Design a unique logo or emblem.",
    "Sketch a steampunk machine.",
    "Create a piece of futuristic technology.",
    "Draw a serene beach scene.",
    "Illustrate a cozy interior space.",
    "Design a unique vehicle or mode of transportation.",
    "Depict a fantasy castle.",
    "Sketch a vibrant street market.",
    "Create an artwork inspired by a famous song.",
    "Draw a whimsical circus scene.",
    "Illustrate a dramatic weather event.",
    "Design a character from a sci-fi story.",
    "Depict a magical potion or elixir.",
    "Create a detailed map of an imaginary land.",
    "Draw a playful animal in a humorous situation.",
    "Illustrate a dynamic sports action.",
    "Design an otherworldly landscape.",
    "Depict an iconic landmark.",
    "Sketch a charming village or town.",
    "Create a dreamlike surreal scene.",
    "Draw a beautiful garden or park.",
    "Illustrate a lively festival or parade.",
    "Design a unique character from folklore.",
    "Depict a futuristic space scene.",
    "Create an intricate mandala or pattern.",
    "Draw an adventurous explorer.",
    "Illustrate a nostalgic childhood memory.",
    "Design a fantastical creature's habitat.",
    "Depict a famous historical event.",
    "Create a piece of abstract art.",
    "Sketch a vibrant city skyline at night.",
    "Draw a magical library.",
    "Illustrate a fantastical underwater city.",
    "Design a unique space station.",
    "Depict a cozy winter scene.",
    "Create a mythical creature's lair.",
    "Draw a futuristic robot companion.",
    "Illustrate a whimsical dream sequence.",
    "Design a surrealist artwork.",
    "Depict a hidden treasure.",
    "Create a vibrant carnival scene.",
    "Draw an enchanting fairy garden.",
    "Illustrate a bustling marketplace.",
    "Design a fantasy creature's costume.",
    "Depict an epic fantasy battle.",
    "Create a detailed portrait of a pet.",
    "Draw an intricate ancient ruin.",
    "Illustrate a serene zen garden.",
    "Design a futuristic landscape.",
    "Depict a legendary hero.",
    "Create a whimsical character portrait.",
    "Draw a mythical landscape at twilight.",
    "Illustrate an elaborate clockwork mechanism.",
    "Design a fantastical flying machine.",
    "Depict a surreal dreamscape with floating islands.",
    "Create a vibrant underwater reef scene.",
    "Draw a detailed historical setting.",
    "Illustrate a magical spell or enchantment.",
    "Design a futuristic space vehicle.",
    "Depict an epic journey through unknown lands."
];

// Sets up libary of prompts

const promptLabel = document.getElementById('promptLabel');
// Gets the label so it can be updated to change the prompts

// Uses random maths to grab a random prompt from the libary
function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * prompts.length);
    return prompts[randomIndex];
}
// Adds that random prompt onto the prompt label
const currentPrompt = getRandomPrompt();
promptLabel.textContent += ` ${currentPrompt}`;

// This gets the last time the prompt was updated 
function updatePromptAndClearStorage() {
    const lastUpdate = localStorage.getItem('lastUpdate');
    const now = new Date().getTime();

    if (!lastUpdate || now - lastUpdate > 86400000) { // Checks if 24 hours has past, checks in ms so 86400000ms is eqaul to 24hours
        const newPrompt = getRandomPrompt(); // Gets the new prompt
        promptLabel.textContent = `Prompt: ${newPrompt}`; //Adds it to label
        // Stores the new prompts and time
        localStorage.setItem('currentPrompt', newPrompt);
        localStorage.setItem('lastUpdate', now);
        // Clears all the prevouily saved Images in the local storage
        localStorage.removeItem('savedImages');
    } else { //If 24 hours has not passed get the current prompt and label
        const savedPrompt = localStorage.getItem('currentPrompt');
        promptLabel.textContent = `Prompt: ${savedPrompt}`;
    }
}

updatePromptAndClearStorage();
// Calls it all when loaded