// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


// Navbar Shadow on Scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 4px 10px rgba(0,0,0,0.5)";
  } else {
    navbar.style.boxShadow = "none";
  }
});


// Typing Effect
const text = "Frontend Developer | PHP Developer | Problem Solver";
let index = 0;

function typeEffect() {
  const element = document.querySelector(".hero-content p");
  
  if (index < text.length) {
    element.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}

// Clear text before typing starts
window.onload = () => {
  document.querySelector(".hero-content p").textContent = "";
  typeEffect();
};


// Reveal Sections on Scroll
const sections = document.querySelectorAll(".about, .contact");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();