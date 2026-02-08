function checkAnswers() {
    let answer1 = document.getElementById("q1").value.trim().toLowerCase();
    let answer2 = document.getElementById("q2").value.trim().toLowerCase();
    let answer3 = document.getElementById("q3").value.trim().toLowerCase();
    let answer4 = document.getElementById("q4").value.trim().toLowerCase();
    let answer5 = document.getElementById("q5").value.trim().toLowerCase();

    let correctAnswer1 = "01282025"; 
    let correctAnswer2 = "fiesta"; 
    let correctAnswer3 = "ecopark"; 
    let correctAnswer4 = "you"; 
    let correctAnswer5 = "ml"; 

    if (answer1 === correctAnswer1 && answer2 === correctAnswer2 && answer3 === correctAnswer3 && answer4 === correctAnswer4 && answer5 === correctAnswer5) {
        document.getElementById("quiz").classList.add("hidden");
        setTimeout(() => document.getElementById("message").classList.add("show"), 50);

        // Start hearts animation only if on mobile
        if (isMobileDevice()) {
            startHearts();
        }
    } else {
        alert("Oops! Try again, lovey!");
    }
}

// ✅ Fixed Function to Detect Mobile Devices
function isMobileDevice() {
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());
}

// ✅ Optimized Floating Heart Animation
function startHearts() {
    let heartContainer = document.createElement("div");
    heartContainer.classList.add("heart-container");
    document.body.appendChild(heartContainer);

    let heartCount = 30; // Limit number of hearts to avoid lag
    let interval = 200; // Delay between heart spawns

    for (let i = 0; i < heartCount; i++) {
        setTimeout(() => createHeart(heartContainer), i * interval);
    }
}

// ✅ Function to Create Heart and Remove After 5 Seconds
function createHeart(container) {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    container.appendChild(heart);

    setTimeout(() => heart.remove(), 5000); // Remove heart after animation
}