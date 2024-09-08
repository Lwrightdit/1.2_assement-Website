const prompts = [
    // Existing prompts...
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
    "Draw a whimsical carnival.",
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
    "Create a vibrant underwater reef scene.",
    "Draw an intricate ancient ruin.",
    "Illustrate a serene zen garden.",
    "Design a futuristic landscape.",
    "Depict a legendary hero.",
    "Create a whimsical character portrait.",
    "Draw a mythical landscape at twilight.",
    "Illustrate an elaborate clockwork mechanism.",
    "Design a fantastical flying machine.",
    "Depict a surreal dreamscape with floating islands.",
    "Draw a detailed historical setting.",
    "Illustrate a magical spell or enchantment.",
    "Design a futuristic space vehicle.",
    "Depict an epic journey through unknown lands.",
    "Create a space alien.",
    "Illustrate a dreamlike carnival.",
    "Design a magical artifact.",
    "Depict a whimsical garden gnome.",
    "Draw an underwater castle.",
    "Illustrate a surreal floating city.",
    "Design a heroic statue.",
    "Depict a steampunk airship.",
    "Create a mythical underwater creature.",
    "Draw a serene mountain landscape.",
    "Illustrate an enchanted forest creature.",
    "Design a whimsical house in a tree.",
    "Depict a fantasy potion bottle.",
    "Create a detailed clock tower.",
    "Draw a mythical creature's lair.",
    "Illustrate an enchanted castle.",
    "Design a futuristic hovercraft.",
    "Depict an otherworldly portal.",
    "Create a whimsical creature from folklore.",
    "Draw a scene from a dream.",
    "Illustrate a legendary beast.",
    "Design a futuristic amusement park.",
    "Depict a magical forest creature.",
    "Create a detailed fantasy character.",
    "Draw a steampunk inventor’s workshop.",
    "Illustrate a mythical jungle scene.",
    "Design an elaborate fairy tale kingdom.",
    "Depict a cosmic event.",
    "Create a unique fantasy weapon.",
    "Draw a whimsical underwater festival.",
    "Illustrate a charming medieval village.",
    "Design a mythical flying island.",
    "Depict a magical forest with glowing creatures.",
    "Create a fantastical underwater exploration.",
    "Draw a surreal futuristic landscape.",
    "Illustrate a peaceful rural setting.",
    "Design a whimsical enchanted object.",
    "Depict an intergalactic space adventure.",
    "Create a detailed ancient ruin.",
    "Draw a futuristic energy source.",
    "Illustrate a magical animal companion.",
    "Design a mystical portal gateway.",
    "Depict a vibrant underwater cityscape.",
    "Create a whimsical fantasy land.",
    "Draw a legendary creature’s treasure trove.",
    "Illustrate a magical woodland creature’s home.",
    "Design a futuristic underwater city.",
    "Depict a mythical magical forest.",
    "Create an intricate mechanical invention.",
    "Draw a fantastical journey through space.",
    "Illustrate a surreal dream world.",
    "Design a futuristic fantasy environment.",
    "Depict a magical floating island.",
    "Create a vibrant otherworldly scene.",
    "Draw a unique space phenomenon.",
    "Illustrate a mythical cosmic entity.",
    "Design a whimsical fairy tale creature.",
    "Depict a magical artifact from a legend.",
    "Create a detailed enchanted forest.",
    "Draw a cosmic creature.",
    "Illustrate a legendary landscape.",
    "Design an otherworldly space station.",
    "Depict a surreal dream city.",
    "Create a vibrant mythical realm.",
    "Draw a magical celestial being.",
    "Illustrate a fantasy adventure map.",
    "Design a futuristic magical object.",
    "Depict an ancient mythological creature.",
    "Create a whimsical underwater world.",
    "Draw a detailed cosmic landscape.",
    "Illustrate a unique alien city.",
    "Design a legendary enchanted artifact.",
    "Red panda"
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

    if (!lastUpdate || now - lastUpdate > 43200000) { // Checks if 12 hours has past, checks in ms so 43200000ms is eqaul to 12hours
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