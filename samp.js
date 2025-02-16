document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
});
const words = ["Yuva Surya", "Frontend Developer"];
let index = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    const typingSpan = document.querySelector(".typing");

    if (!isDeleting) {
        currentWord = words[index].substring(0, letterIndex + 1);
        letterIndex++;
    } else {
        currentWord = words[index].substring(0, letterIndex - 1);
        letterIndex--;
    }

    typingSpan.textContent = currentWord;

    if (!isDeleting && currentWord === words[index]) {
        setTimeout(() => (isDeleting = true), 1000);
    } else if (isDeleting && currentWord === "") {
        isDeleting = false;
        index = (index + 1) % words.length;
    }

    setTimeout(typeEffect, isDeleting ? 100 : 150);
}

document.addEventListener("DOMContentLoaded", typeEffect);
