const typingElement = document.getElementById("typing");
const words = ["Frontend Developer", "React Developer", "UI Builder", "Problem Solver"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typingElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typingEffect, 1200);
            return;
        }
    } else {
        typingElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex++;
            if (wordIndex === words.length) wordIndex = 0;
        }
    }

    setTimeout(typingEffect, deleting ? 50 : 100);
}

typingEffect();

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    themeBtn.textContent = document.body.classList.contains("light") ? "☾" : "☀";
});

const revealElements = document.querySelectorAll(".section, .project, .lab-card, .mini-card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.1 });

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});

const projects = document.querySelectorAll(".project");

projects.forEach(project => {
    project.addEventListener("mousemove", event => {
        const rect = project.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        project.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(157,124,255,0.15),
                #0d0d0d 45%
            )
        `;
    });

    project.addEventListener("mouseleave", () => {
        project.style.background = "";
    });
});
          
