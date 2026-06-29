// =========================
// Typing Effect
// =========================

const text = "Cybersecurity Student";
const typingElement = document.querySelector(".home h2");

if (typingElement) {
    typingElement.textContent = "";

    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, 100);
        }
    }

    typeWriter();
}

// =========================
// Reveal Sections on Scroll
// =========================

const sections = document.querySelectorAll("section");

function revealSections() {

    const triggerBottom = window.innerHeight * 0.8;

    sections.forEach(section => {

        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

}

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);

// =========================
// Active Navigation
// =========================

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================
// Smooth Scroll
// =========================

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});