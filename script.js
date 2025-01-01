// Target elements
const overlay = document.getElementById('overlay');
const startButton = document.getElementById('start-button');
const mainContainer = document.querySelector('.container');
const mainImage = document.getElementById('main-image');
const mainText = document.getElementById('main-text');
const yesButton = document.getElementById('yes-btn');
const noButton = document.getElementById('no-btn');

let noClickCount = 0;
let happyAudio;
let bgAudio;

// Start the website after user interaction
startButton.addEventListener('click', () => {
    overlay.style.display = 'none'; // Hide overlay
    mainContainer.style.display = 'block'; // Show main content
    playBackgroundSound('bg.mp3'); // Play background sound
});

// Event listener for "Yes" button
yesButton.addEventListener('click', () => {
    stopBackgroundSound('bg.mp3'); // Stop the background sound
    playHappySong('yes.mp3'); // Play the happy song
    mainImage.src = "xyz1.jpg";
    mainText.textContent = "YAY I can't wait to go out with you!!!!";
    yesButton.style.display = "none"; // Hide Yes button
    noButton.style.display = "none"; // Hide No button
});

// Event listener for "No" button
noButton.addEventListener('click', () => {
    stopBackgroundSound('bg.mp3'); // Stop the background sound
    noClickCount++;

    if (noClickCount === 1) {
        mainImage.src = "xyz2.jpg";
        mainText.textContent = "Are you sure?";
        yesButton.style.transform = "scale(1.5)";
        playSound('nope.mp3');
        playSound('sus.mp3');

        // Move buttons slightly lower
        const buttonContainer = document.querySelector('.buttons');
        buttonContainer.style.marginTop = '50px'; // Add extra spacing


    } else if (noClickCount === 2) {
        mainImage.src = "xyz3.jpg";
        mainText.textContent = "ARE YOU REALLY SURE??";
        yesButton.style.transform = "scale(2.5)";
        playSound('nope.mp3');
        playSound('sus.mp3');

        // Move buttons slightly lower
        const buttonContainer = document.querySelector('.buttons');
        buttonContainer.style.marginTop = '60px'; // Add extra spacing

    } else if (noClickCount === 3) {
        mainImage.src = "xyz4.jpg";
        mainText.textContent = "WELP TOO BAD YOU HAVE NO OTHER CHOICE MUEHEHEHEHEHEHHEHE";
        yesButton.style.transform = "scale(3.5)";
        playSound('hehe.mp3');
        
        // Move buttons slightly lower
        const buttonContainer = document.querySelector('.buttons');
        buttonContainer.style.marginTop = '50px'; // Add extra spacing
    }
});

// Function to play a one-time sound
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// Function to play the happy song in a loop
function playHappySong() {
    if (!happyAudio) {
        happyAudio = new Audio('yes.mp3');
        happyAudio.loop = true;
        happyAudio.play();
    }
}

// Function to play the background sound
function playBackgroundSound() {
    if (!bgAudio) {
        bgAudio = new Audio('bg.mp3');
        bgAudio.loop = true;
        bgAudio.play();
    }
}

// Function to stop the background sound
function stopBackgroundSound() {
    if (bgAudio) {
        bgAudio.pause();
        bgAudio.currentTime = 0;
    }
}
