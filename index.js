// === Tab Switching Logic ===
const workTab = document.getElementById("work-tab");
const hustlesTab = document.getElementById("hustles-tab");
const mentorshipTab = document.getElementById("mentorship-tab");

const workSection = document.getElementById("work");
const hustlesSection = document.getElementById("hustles");
const mentorshipSection = document.getElementById("mentorship");

const tabs = [workTab, hustlesTab, mentorshipTab];
const sections = [workSection, hustlesSection, mentorshipSection];

function activateTab(selectedTab, selectedSection) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  sections.forEach((sec) => sec.classList.remove("active"));

  selectedTab.classList.add("active");
  selectedSection.classList.add("active");
}

// === Global Floating Boxes ===
const container = document.querySelector(".floating-boxes");
const boxCount = 12; // More boxes for scattered look

for (let i = 0; i < boxCount; i++) {
  const blob = document.createElement("div");
  blob.classList.add("blob");

  const size = Math.random() * 40 + 20; // 25–70px
  blob.style.width = `${size}px`;
  blob.style.height = `${size}px`;

  blob.style.left = `${Math.random() * 100}%`;
  blob.style.top = `${Math.random() * 100}%`;

  blob.style.opacity = Math.random() * 0.4 + 0.2;
  blob.style.transform = `rotate(${Math.random() * 40 - 20}deg)`;

  blob.style.animationDelay = `-${Math.random() * 20}s`;
  blob.style.animationDuration = `${15 + Math.random() * 10}s`;

  container.appendChild(blob);
}

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

// Close menu when clicking outside
menuOverlay.addEventListener("click", (e) => {
  if (e.target === menuOverlay) {
    menuOverlay.style.display = "none";
  }
});

// === Draggable Marquee for Brands Section (Fixed) ===
let brandTrack = null;
let isDragging = false;
let startX = 0;
let currentTranslate = 0;
let initialTranslate = 0;

// Reusable function to initialize drag
function initBrandTrackDrag() {
  brandTrack = document.querySelector("#work .brand-track");
  if (!brandTrack || brandTrack.dataset.dragInitialized) return;

  let animationId;

  // Mouse Events
  brandTrack.addEventListener("mousedown", startDrag);
  document.addEventListener("mousemove", drag);
  document.addEventListener("mouseup", endDrag);

  // Touch Events
  brandTrack.addEventListener("touchstart", startDrag, { passive: false });
  document.addEventListener("touchmove", drag, { passive: false });
  document.addEventListener("touchend", endDrag);

  function startDrag(e) {
    isDragging = true;
    brandTrack.classList.add("dragging");
    initialTranslate = currentTranslate;
    startX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    cancelAnimationFrame(animationId);
    e.preventDefault();
  }

  function drag(e) {
    if (!isDragging) return;
    e.preventDefault();

    const currentX = e.type.includes("mouse")
      ? e.clientX
      : e.touches[0].clientX;
    const deltaX = currentX - startX;
    currentTranslate = initialTranslate + deltaX;

    const maxTranslate = 0;
    const minTranslate = -brandTrack.offsetWidth / 2;
    currentTranslate = Math.max(
      minTranslate,
      Math.min(maxTranslate, currentTranslate),
    );

    brandTrack.style.transform = `translateX(${currentTranslate}px)`;
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    brandTrack.classList.remove("dragging");

    // Smooth reset to loop
    setTimeout(() => {
      brandTrack.style.transition = "transform 0.5s ease-out";
      brandTrack.style.transform = "translateX(0px)";
      setTimeout(() => {
        brandTrack.style.transition = "";
      }, 500);
    }, 50);
  }

  // Mark as initialized
  brandTrack.dataset.dragInitialized = "true";
}

// === Draggable Scroll for Hustles Section ===
function initHustleScroll() {
  const container = document.querySelector(".hustle-container");
  if (!container || container.dataset.scrollInitialized) return;

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    isDown = true;
    container.classList.add("active");
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
    container.classList.remove("active");
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    container.scrollLeft = scrollLeft - walk;
  });

  // Mark as initialized
  container.dataset.scrollInitialized = "true";
}

// Run when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  initBrandTrackDrag();
  initHustleScroll();
  const hustlesActive = hustlesSection.classList.contains("active");
  if (hustlesActive) {
    const hint = document.querySelector(".hustle-hint");
    const container = document.querySelector(".hustle-container");
    if (hint && container) {
      hint.classList.remove("hidden");
      const onScroll = () => {
        if (container.scrollLeft > 30) {
          hint.classList.add("hidden");
          container.removeEventListener("scroll", onScroll);
        }
      };
      container.addEventListener("scroll", onScroll);
    }
  }
});

// Re-run every time Work or Hustles tab is activated
workTab.addEventListener("click", () => {
  activateTab(workTab, workSection);
  setTimeout(initBrandTrackDrag, 100);
});

hustlesTab.addEventListener("click", () => {
  activateTab(hustlesTab, hustlesSection);
  setTimeout(initHustleScroll, 100);
  const hint = document.querySelector(".hustle-hint");
  const container = document.querySelector(".hustle-container");
  if (hint && container) {
    hint.classList.remove("hidden");
    const onScroll = () => {
      if (container.scrollLeft > 30) {
        hint.classList.add("hidden");
        container.removeEventListener("scroll", onScroll);
      }
    };
    container.addEventListener("scroll", onScroll);
  }
});

mentorshipTab.addEventListener("click", () => {
  activateTab(mentorshipTab, mentorshipSection);
  // Initialize mentorship page when tab is clicked
  if (typeof initializeMentorshipPageOnTabSwitch === "function") {
    setTimeout(initializeMentorshipPageOnTabSwitch, 100);
  }
});

const profileIcon = document.querySelector(".profile-icon");
if (profileIcon) {
  profileIcon.addEventListener("click", () => {
    activateTab(workTab, workSection);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
// === Project Modal Logic ===
const projectModal = document.getElementById("projectModal");
const projectFrame = document.getElementById("projectFrame");
const modalClose = document.getElementById("modalClose");

function openProject(url) {
  if (url === "#" || !url) return;

  // Behance and some other sites block being embedded in iframes for security reasons
  if (url.includes("behance.net")) {
    window.open(url, "_blank");
    return;
  }

  projectFrame.src = url;
  projectModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scroll
}

function closeProject() {
  projectModal.classList.remove("active");
  document.body.style.overflow = ""; // Restore scroll
  // Delay clearing src to avoid flicker during closing animation
  setTimeout(() => {
    projectFrame.src = "";
  }, 400);
}

modalClose.addEventListener("click", closeProject);

// Close modal on background click
projectModal.addEventListener("click", (e) => {
  if (e.target === projectModal) {
    closeProject();
  }
});

// Close modal on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal.classList.contains("active")) {
    closeProject();
  }
});

// Expose openProject to global scope for onclick handlers
window.openProject = openProject;

// === Cheers Counter Logic ===
const cheerBtn = document.getElementById("cheerBtn");
const cheerCountSpan = document.getElementById("cheerCount");
const CHEER_API_URL = "https://api.counterapi.dev/v1/pamilerin-portfolio/cheers";

async function getCheers() {
  try {
    const response = await fetch(CHEER_API_URL);
    const data = await response.json();
    if (data.count !== undefined) {
      cheerCountSpan.innerText = data.count.toLocaleString();
    }
  } catch (error) {
    console.error("Error fetching cheers:", error);
    // Fallback to a random-ish number if API fails
    cheerCountSpan.innerText = "1,240";
  }
}

async function hitCheer() {
  try {
    // Add temporary animation class
    cheerBtn.classList.add("clicking");
    setTimeout(() => cheerBtn.classList.remove("clicking"), 200);

    const response = await fetch(`${CHEER_API_URL}/up`);
    const data = await response.json();
    if (data.count !== undefined) {
      cheerCountSpan.innerText = data.count.toLocaleString();
      
      // Cool success animation for the star
      const star = document.querySelector(".star-icon");
      star.style.animation = "none";
      void star.offsetWidth; // trigger reflow
      star.style.animation = "starPulse 0.5s ease-in-out 3";
    }
  } catch (error) {
    console.error("Error hitting cheer:", error);
    // Local increment fallback
    const current = parseInt(cheerCountSpan.innerText.replace(/,/g, "")) || 0;
    cheerCountSpan.innerText = (current + 1).toLocaleString();
  }
}

if (cheerBtn) {
  cheerBtn.addEventListener("click", hitCheer);
  // Initial load
  getCheers();
}
