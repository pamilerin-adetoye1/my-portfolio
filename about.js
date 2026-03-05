// === Floating Hamburger Menu ===
const hamburger = document.querySelector(".hamburger");
const menuOverlay = document.getElementById("menuOverlay");
const menuClose = document.getElementById("menuClose");

// Open menu
hamburger.addEventListener("click", () => {
  menuOverlay.style.display = "flex";
});

// Close menu
menuClose.addEventListener("click", () => {
  menuOverlay.style.display = "none";
});

// Close when clicking outside
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.style.display = "none";
  }
});

// === Handle active link automatically ===
const links = document.querySelectorAll(".menu-links a");
links.forEach((link) => {
  // compare the current link’s href to the browser URL
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// (Optional improvement: close menu when clicking a link)
links.forEach((link) => {
  link.addEventListener("click", () => {
    menuOverlay.style.display = "none";
  });
});


// Scroll Animation for fade-in elements
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2, // trigger when 20% visible
  rootMargin: "0px 0px -50px 0px" // slight offset
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target); // animate only once
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

