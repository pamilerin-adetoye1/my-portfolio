/* ===========================
   MENTORSHIP PAGE LOGIC
   =========================== */

// PAYSTACK PUBLIC KEY (Replace with your actual public key)
const PAYSTACK_PUBLIC_KEY = "pk_live_e8ebafb1d34eb05288dcd8292641187d3b5e60ff"; // Your Paystack public key

// MENTORSHIP PLANS DATA
const mentorshipPlans = [
  {
    id: "motion-graphics",
    title: "Motion Graphics",
    duration: "3 Months",
    schedule: "3 Days Per Week",
    price: 60000,
    icons: [
      "https://upload.wikimedia.org/wikipedia/commons/c/cb/Adobe_After_Effects_CC_icon.svg",
      "./images/mentorship/Ciname 4 D.jfif",
    ],
    includes: [
      "After Effects basics",
      "Keyframe animation",
      "Visual effects (VFX)",
      "Audio Effects",
      "Shapes Animation",
      "Motion design principles",
    ],
    featured: false,
  },
  {
    id: "brand-identity",
    title: "Brand & Identity Design",
    duration: "2 Months",
    schedule: "3 Days Per Week",
    price: 20000,
    icons: [
      "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
    ],
    includes: [
      "Logo systems",
      "Brand strategy basics",
      "Identity systems",
      "Typography",
      "Mockups",
      "Color theory",
      "Visual direction",
    ],
    featured: false,
  },
  {
    id: "frontend-dev",
    title: "Frontend Development",
    duration: "3 Months",
    schedule: "3 Days Per Week",
    price: 50000,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      "./images/mentorship/nextjs.jpg",
    ],
    includes: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "React Fundamentals",
      "Next.js Basics",
      "Best Practices",
    ],
    featured: true,
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    duration: "2 Months",
    schedule: "3 Days Per Week",
    price: 50000,
    icons: [
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      "./images/mentorship/balsamiq.png",
    ],
    includes: [
      "Figma",
      "Balsamiq",
      "Wireframing",
      "Prototyping",
      "UX principles",
    ],
    featured: false,
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking (Intermediate)",
    duration: "2 Months",
    schedule: "3 Days Per Week",
    price: 50000,
    icons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kalilinux/kalilinux-original.svg",
    ],
    includes: [
      "Networking Basics",
      "System vulnerabilities",
      "Kali Linux",
      "Ethical penetration principles",
    ],
    featured: false,
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance",
    duration: "2 Months",
    schedule: "3 Days Per Week",
    price: 80000,
    icons: [
      "https://www.vectorlogo.zone/logos/google_gsuite/google_gsuite-icon.svg",
      "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
      "https://www.vectorlogo.zone/logos/trello/trello-icon.svg",
      "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
    ],
    includes: [
      "Administrative Support",
      "Calendar Management",
      "Email Organization",
      "Digital Tool Proficiency",
      "Client Communication",
      "Task Prioritization",
    ],
    featured: false,
    affiliated: true,
  },
  {
    id: "data-science",
    title: "Data Science",
    duration: "3 Months",
    schedule: "3 Days Per Week",
    price: 150000,
    icons: [
      "https://www.vectorlogo.zone/logos/python/python-icon.svg",
      "./images/pandas-icon.svg",
      "https://www.vectorlogo.zone/logos/jupyter/jupyter-icon.svg",
      "./images/tableau-icon.svg",
    ],
    includes: [
      "Python for Data Science",
      "Data Cleaning & Analysis",
      "Statistical Modeling",
      "Data Visualization",
      "Machine Learning Basics",
      "SQL Fundamentals",
    ],
    featured: false,
    affiliated: true,
  },
  {
    id: "sales-mentorship",
    title: "Sales Mentorship Program",
    duration: "Flexible",
    schedule: "2 Days Per Week",
    price: 50000,
    icons: ["https://cdn-icons-png.flaticon.com/512/3121/3121809.png"],
    includes: [
      "Closing techniques",
      "Digital sales systems",
      "Persuasion basics",
    ],
    featured: false,
  },
];

// TESTIMONIALS DATA
const testimonials = [
  {
    name: "Tunde Adeyemi",
    role: "Junior Frontend Developer",
    message:
      "Pamilerin's Frontend Development program went beyond theory. I built 3 production-ready React projects during the mentorship and landed a job 2 weeks after completion!",
    initials: "TA",
  },
  {
    name: "Tunde Adeyemi",
    role: "Junior Frontend Developer",
    message:
      "Pamilerin's Frontend Development program went beyond theory. I built 3 production-ready React projects during the mentorship and landed a job 2 weeks after completion!",
    initials: "TA",
  },
  {
    name: "Tunde Adeyemi",
    role: "Junior Frontend Developer",
    message:
      "Pamilerin's Frontend Development program went beyond theory. I built 3 production-ready React projects during the mentorship and landed a job 2 weeks after completion!",
    initials: "TA",
  },
  {
    name: "Tunde Adeyemi",
    role: "Junior Frontend Developer",
    message:
      "Pamilerin's Frontend Development program went beyond theory. I built 3 production-ready React projects during the mentorship and landed a job 2 weeks after completion!",
    initials: "TA",
  },
  {
    name: "Tunde Adeyemi",
    role: "Junior Frontend Developer",
    message:
      "Pamilerin's Frontend Development program went beyond theory. I built 3 production-ready React projects during the mentorship and landed a job 2 weeks after completion!",
    initials: "TA",
  },
  {
    name: "Tunde Adeyemi",
    role: "Junior Frontend Developer",
    message:
      "Pamilerin's Frontend Development program went beyond theory. I built 3 production-ready React projects during the mentorship and landed a job 2 weeks after completion!",
    initials: "TA",
  },
];

// FAQ DATA
const faqItems = [
  {
    question: "What's the difference between remote and physical sessions?",
    answer:
      "Remote sessions are conducted via Zoom or Google Meet, allowing flexibility and access from anywhere. Physical sessions happen in-person in Ibadan, providing more hands-on collaboration.",
  },
  {
    question: "Can I reschedule sessions if needed?",
    answer:
      "Yes, we're flexible with scheduling. Reach out via email with your mentorship confirmation, and we'll work out a suitable time.",
  },
  {
    question: "What happens after I complete the program?",
    answer:
      "You'll receive a mentorship certificate, continued access to resources, and priority support for 30 days after completion.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Mentorship bookings are non-refundable but transferable. If you need to pause or reschedule, contact support within 7 days of booking.",
  },
  {
    question: "How do payments work on Netlify?",
    answer:
      "Payments are processed through Paystack on the frontend. Your transaction is secure, and you'll receive an email confirmation immediately.",
  },
];

// === INITIALIZE MENTORSHIP PAGE ===
function initMentorshipPage() {
  console.log("🔧 Initializing mentorship page...");
  renderMentorshipCards();
  console.log(
    "✅ Rendered " +
      document.querySelectorAll(".mentorship-card").length +
      " mentorship cards",
  );
  renderTestimonials();
  console.log(
    "✅ Rendered " +
      document.querySelectorAll(".testimonial-card").length +
      " testimonials",
  );
  loadMenteeSubmissions();
  renderFAQ();
  console.log(
    "✅ Rendered " +
      document.querySelectorAll(".faq-item").length +
      " FAQ items",
  );
  setupEventListeners();
  console.log("✅ Event listeners setup complete");
}

// === RENDER MENTORSHIP CARDS ===
function renderMentorshipCards() {
  const grid = document.getElementById("mentorshipGrid");
  grid.innerHTML = "";

  mentorshipPlans.forEach((plan) => {
    const card = document.createElement("div");
    card.className = `mentorship-card ${plan.featured ? "featured" : ""}`;
    card.innerHTML = `
      ${plan.featured ? '<span class="card-badge">Most Popular</span>' : ""}
      ${
        plan.affiliated
          ? `
        <div class="affiliated-tag">
          <img src="./Logos/craftudy.png" alt="Craftudy" class="affiliated-logo">
          <span>Affiliated with Craftudy</span>
        </div>`
          : ""
      }
      <div class="card-header">
        <div class="card-icons">
          ${plan.icons
            .map(
              (icon) =>
                `<div class="tool-logo-box"><img src="${icon}" alt="Tool logo" class="tool-logo" referrerpolicy="no-referrer" onerror="this.style.display='none'"></div>`,
            )
            .join("")}
        </div>
        <h3 class="card-title">${plan.title}</h3>
        <p class="card-subtitle">${plan.duration}</p>
      </div>

      <div class="card-body">
        <div class="card-duration">
          <i class="fa-solid fa-calendar"></i>
          <span>${plan.duration}</span>
        </div>
        <div class="card-schedule">
          <i class="fa-solid fa-clock"></i>
          <span>${plan.schedule}</span>
        </div>

        <div class="card-includes">
          <p class="card-includes-label">What's Included</p>
          <ul class="card-includes-list">
            ${plan.includes.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </div>

        <div class="card-price">₦${plan.price.toLocaleString()}</div>
        <p class="card-price-label">One-time payment</p>
      </div>

      <button class="card-btn" onclick="openBookingModal('${plan.id}')">
        Book Now <i class="fa-solid fa-arrow-right"></i>
      </button>
    `;
    grid.appendChild(card);
  });
}

// === RENDER TESTIMONIALS ===
function renderTestimonials() {
  const container = document.getElementById("testimonialsGrid");
  if (!container) {
    console.warn("Testimonials container not found");
    return;
  }
  container.innerHTML = "";

  testimonials.forEach((testimonial) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <div class="testimonial-header">
        <div class="testimonial-avatar">${testimonial.initials}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.role}</p>
        </div>
      </div>
      <p class="testimonial-text">"${testimonial.message}"</p>
    `;
    container.appendChild(card);
  });
}

// === RENDER FAQ ===
function renderFAQ() {
  const container = document.getElementById("faqContainer");
  container.innerHTML = "";

  faqItems.forEach((item, index) => {
    const faqItem = document.createElement("div");
    faqItem.className = "faq-item";
    if (index === 0) faqItem.classList.add("active");

    faqItem.innerHTML = `
      <div class="faq-header" onclick="toggleFAQ(this)">
        <span class="faq-title">${item.question}</span>
        <div class="faq-icon"><i class="fa-solid fa-plus"></i></div>
      </div>
      <div class="faq-content">
        <div class="faq-text">${item.answer}</div>
      </div>
    `;
    container.appendChild(faqItem);
  });
}

// === FAQ TOGGLE ===
function toggleFAQ(header) {
  const faqItem = header.parentElement;
  const isActive = faqItem.classList.contains("active");

  // Close all FAQs
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked FAQ if it was closed
  if (!isActive) {
    faqItem.classList.add("active");
  }
}

// === LOAD NETLIFY FORM SUBMISSIONS (Mentees) ===
async function loadMenteeSubmissions() {
  const grid = document.getElementById("testimonialsGrid");
  if (!grid) return;
  try {
    const res = await fetch("/.netlify/functions/comments?per_page=20");
    if (!res.ok) {
      console.warn("Unable to load mentee submissions:", res.status);
      return;
    }
    const data = await res.json();
    const subs = data.submissions || [];

    // Clear existing dynamic comments before re-rendering
    // (We keep static testimonials if any, but usually we clear and render all)
    // For this implementation, we append them to the existing grid

    subs.forEach((s) => {
      const card = document.createElement("div");
      card.className = "testimonial-card fade-in";
      card.innerHTML = `
        <div class="testimonial-header">
          <div class="testimonial-avatar">${(s.name || "A?")
            .split(" ")
            .map((p) => p[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}</div>
          <div class="testimonial-info">
            <h4>${s.name || "Anonymous"}</h4>
            <p>${s.profession || "Mentee"}</p>
          </div>
        </div>
        <p class="testimonial-text">"${s.message || ""}"</p>
      `;
      grid.appendChild(card);
    });
  } catch (e) {
    console.warn("Error loading mentee submissions:", e);
  }
}
// === BOOKING MODAL STATE ===
let currentStep = 1;
let selectedPlanId = null;
let bookingData = {
  plan: null,
  delivery: "remote",
  location: "",
  fullName: "",
  email: "",
  phone: "",
};

// === OPEN BOOKING MODAL ===
function openBookingModal(planId) {
  selectedPlanId = planId;
  bookingData.plan = mentorshipPlans.find((p) => p.id === planId);
  currentStep = 1;

  const modal = document.getElementById("bookingModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  renderPlanSelection();
  showStep(1);
}

// === CLOSE BOOKING MODAL ===
function closeBookingModal() {
  const modal = document.getElementById("bookingModal");
  if (modal) {
    modal.classList.remove("active");
  }
  document.body.style.overflow = "auto";
  currentStep = 1;
  selectedPlanId = null;
  bookingData = {
    plan: null,
    delivery: "remote",
    location: "",
    fullName: "",
    email: "",
    phone: "",
  };
}

// === RENDER PLAN SELECTION ===
function renderPlanSelection() {
  const selection = document.getElementById("planSelection");
  if (!selection) return;
  selection.innerHTML = "";

  mentorshipPlans.forEach((plan) => {
    const isSelected = selectedPlanId === plan.id;
    const label = document.createElement("label");
    label.className = `plan-option ${isSelected ? "selected" : ""}`;
    label.innerHTML = `
      <input type="radio" name="plan" value="${plan.id}" ${
        isSelected ? "checked" : ""
      } onchange="selectPlan('${plan.id}')">
      <div class="plan-name">${plan.title}</div>
      <div class="plan-price">₦${plan.price.toLocaleString()}</div>
      <div class="plan-info">${plan.duration}</div>
    `;

    // Fallback click listener for better mobile support
    label.addEventListener("click", (e) => {
      const input = label.querySelector("input");
      if (input && !input.checked) {
        input.checked = true;
        selectPlan(plan.id);
      }
    });

    selection.appendChild(label);
  });
}

// === SELECT PLAN ===
function selectPlan(planId) {
  selectedPlanId = planId;
  bookingData.plan = mentorshipPlans.find((p) => p.id === planId);

  // Update UI visuals immediately
  document.querySelectorAll(".plan-option").forEach((opt) => {
    const input = opt.querySelector("input");
    if (input && input.value === planId) {
      opt.classList.add("selected");
    } else {
      opt.classList.remove("selected");
    }
  });

  // Enable Continue button when plan is selected
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
  }

  // Optional: Automatically move to delivery method step after short delay
  setTimeout(() => {
    if (currentStep === 1) showStep(2);
  }, 400);
}

// === SHOW STEP ===
function showStep(step) {
  currentStep = step;

  // Hide all steps
  document.querySelectorAll(".booking-step").forEach((s) => {
    s.classList.remove("active");
  });

  // Show current step
  document.getElementById(`step${step}`).classList.add("active");

  // Update button visibility
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  if (step === 1) {
    prevBtn.style.display = "none";
    nextBtn.innerHTML = 'Continue <i class="fa-solid fa-arrow-right"></i>';
    // Disable button until a plan is selected
    const selectedPlan = document.querySelector('input[name="plan"]:checked');
    if (nextBtn) {
      nextBtn.disabled = !selectedPlan;
      nextBtn.style.opacity = selectedPlan ? "1" : "0.5";
      nextBtn.style.cursor = selectedPlan ? "pointer" : "not-allowed";
    }
  } else if (step === 4) {
    prevBtn.style.display = "flex";
    nextBtn.innerHTML = 'Proceed to Payment <i class="fa-solid fa-check"></i>';
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
  } else {
    prevBtn.style.display = "flex";
    nextBtn.innerHTML = 'Continue <i class="fa-solid fa-arrow-right"></i>';
    nextBtn.disabled = false;
    nextBtn.style.opacity = "1";
    nextBtn.style.cursor = "pointer";
  }

  // Update confirmation summary on step 4
  if (step === 4) {
    updateConfirmationSummary();
  }

  // Scroll to top of modal
  document.querySelector(".booking-modal-content").scrollTop = 0;
}

// === UPDATE CONFIRMATION SUMMARY ===
function updateConfirmationSummary() {
  const summary = document.getElementById("confirmationSummary");
  summary.innerHTML = `
    <div class="summary-item">
      <span class="summary-label">Mentorship Program</span>
      <span class="summary-value">${bookingData.plan.title}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Duration</span>
      <span class="summary-value">${bookingData.plan.duration}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Delivery Method</span>
      <span class="summary-value">${
        bookingData.delivery === "remote" ? "Remote" : "Physical (Ibadan)"
      }</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Location</span>
      <span class="summary-value">${bookingData.location}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Your Name</span>
      <span class="summary-value">${bookingData.fullName}</span>
    </div>
    <div class="summary-item">
      <span class="summary-label">Email</span>
      <span class="summary-value">${bookingData.email}</span>
    </div>
    <div class="summary-item total">
      <span class="summary-label">Total Amount</span>
      <span class="summary-value">₦${bookingData.plan.price.toLocaleString()}</span>
    </div>
  `;
}

// === VALIDATE STEP ===
function validateStep(step) {
  const errorMsg = document.getElementById("errorMessage");
  errorMsg.classList.remove("show");

  if (step === 1) {
    if (!selectedPlanId) {
      showError("Please select a mentorship plan");
      return false;
    }
  } else if (step === 2) {
    const delivery = document.querySelector('input[name="delivery"]:checked');
    if (!delivery) {
      showError("Please select a delivery method");
      return false;
    }
    bookingData.delivery = delivery.value;

    // If physical delivery, check location confirmation
    if (delivery.value === "physical") {
      const locationConfirm = document.getElementById("locationConfirm");
      if (!locationConfirm || !locationConfirm.checked) {
        showError(
          "Please confirm that you are in Ibadan or able to attend in-person sessions",
        );
        return false;
      }
      bookingData.location = "Ibadan, Nigeria";
    } else {
      bookingData.location = "Online";
    }
  } else if (step === 3) {
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!fullName) {
      showError("Please enter your full name");
      return false;
    }

    if (!validateEmail(email)) {
      showError("Please enter a valid email address");
      return false;
    }

    bookingData.fullName = fullName;
    bookingData.email = email;
    bookingData.phone = document.getElementById("phone").value.trim();
  }

  return true;
}

// === VALIDATE EMAIL ===
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// === SHOW ERROR ===
function showError(message) {
  const errorMsg = document.getElementById("errorMessage");
  if (errorMsg) {
    errorMsg.textContent = message;
    errorMsg.classList.add("show");
  }
}

// === SETUP EVENT LISTENERS (Safe) ===
function setupEventListeners() {
  // === NEXT BUTTON ===
  const nextBtn = document.getElementById("nextBtn");
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      if (!validateStep(currentStep)) return;
      if (currentStep === 4) {
        initiatePayment();
      } else {
        showStep(currentStep + 1);
      }
    });
  }

  // === PREV BUTTON ===
  const prevBtn = document.getElementById("prevBtn");
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      if (currentStep > 1) {
        showStep(currentStep - 1);
      }
    });
  }

  // === DELIVERY OPTION CHANGE ===
  document.querySelectorAll('input[name="delivery"]').forEach((radio) => {
    radio.addEventListener("change", (e) => {
      const physicalNote = document.getElementById("physicalNote");
      const locationConfirmSection = document.getElementById(
        "locationConfirmSection",
      );
      if (physicalNote) {
        if (e.target.value === "physical") {
          physicalNote.classList.remove("hidden");
          if (locationConfirmSection) {
            locationConfirmSection.classList.remove("hidden");
          }
        } else {
          physicalNote.classList.add("hidden");
          if (locationConfirmSection) {
            locationConfirmSection.classList.add("hidden");
          }
        }
      }
    });
  });

  // === CLOSE BUTTON ===
  const closeBooking = document.getElementById("closeBooking");
  if (closeBooking) {
    // Remove any existing listeners first to prevent duplication
    const newCloseBooking = closeBooking.cloneNode(true);
    closeBooking.parentNode.replaceChild(newCloseBooking, closeBooking);
    newCloseBooking.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeBookingModal();
      return false;
    });
  }

  // === CLOSE ON OVERLAY CLICK ===
  const bookingOverlay = document.getElementById("bookingOverlay");
  if (bookingOverlay) {
    bookingOverlay.addEventListener("click", (e) => {
      if (e.target === bookingOverlay) {
        closeBookingModal();
      }
    });
  }

  // === SCROLL TO PLANS ===
  const scrollToPlans = document.getElementById("scrollToPlans");
  if (scrollToPlans) {
    scrollToPlans.addEventListener("click", () => {
      const grid = document.getElementById("mentorshipGrid");
      if (grid) {
        grid.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  // === MENTEE FORM HANDLERS ===
  const openMenteeBtn = document.getElementById("openMenteeForm");
  const closeMenteeBtn = document.getElementById("closeMenteeForm");
  const menteeModal = document.getElementById("menteeModal");
  const menteeOverlay = document.getElementById("menteeOverlay");
  const menteeForm = document.getElementById("menteeForm");

  if (openMenteeBtn) {
    openMenteeBtn.addEventListener("click", () => {
      menteeModal.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  }

  function closeMenteeModal() {
    if (menteeModal) {
      menteeModal.classList.remove("active");
      document.body.style.overflow = "auto";
      menteeForm?.reset();
    }
  }

  if (closeMenteeBtn) {
    closeMenteeBtn.addEventListener("click", closeMenteeModal);
  }

  if (menteeOverlay) {
    menteeOverlay.addEventListener("click", closeMenteeModal);
  }

  if (menteeForm) {
    menteeForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = menteeForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      try {
        submitBtn.disabled = true;
        submitBtn.innerHTML =
          '<i class="fa-solid fa-spinner fa-spin"></i> Posting...';

        const formData = new FormData(menteeForm);
        const response = await fetch("/", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          closeMenteeModal();
          // Refresh comments after a short delay to allow Netlify to process
          setTimeout(() => {
            loadNetlifyComments();
          }, 2000);
        } else {
          throw new Error("Form submission failed");
        }
      } catch (error) {
        console.error("Submission error:", error);
        alert("Something went wrong. Please try again.");
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }
  // === CLOSE SUCCESS MODAL ===
  const closeSuccess = document.getElementById("closeSuccess");
  if (closeSuccess) {
    closeSuccess.addEventListener("click", () => {
      const successModal = document.getElementById("successModal");
      if (successModal) {
        successModal.classList.remove("active");
      }
      resetBookingData();
    });
  }
}

// === PAYMENT INTEGRATION ===
function initiatePayment() {
  // Check if Paystack is loaded
  if (typeof PaystackPop === "undefined") {
    showError("Payment system is loading. Please try again.");
    return;
  }

  // Check if public key is set (user should replace with their own)
  if (PAYSTACK_PUBLIC_KEY.includes("YOUR_PUBLIC_KEY")) {
    showError(
      "Payment system is not configured. Contact the site administrator.",
    );
    return;
  }

  // Generate payment reference
  const reference = generatePaymentReference();

  // Initialize Paystack
  const handler = PaystackPop.setup({
    key: PAYSTACK_PUBLIC_KEY,
    email: bookingData.email,
    amount: bookingData.plan.price * 100, // Convert to kobo
    ref: reference,
    onClose: function () {
      showError("Payment window closed. Try again when ready.");
    },
    onSuccess: function (response) {
      handlePaymentSuccess(response, reference);
    },
  });

  handler.openIframe();
}

// === GENERATE PAYMENT REFERENCE ===
function generatePaymentReference() {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * 10000);
  return `MENTOR_${timestamp}_${random}`;
}

// === HANDLE PAYMENT SUCCESS ===
function handlePaymentSuccess(response, reference) {
  // Close booking modal
  closeBookingModal();

  // Show success modal
  const successModal = document.getElementById("successModal");
  successModal.classList.add("active");

  // Update success details
  const successDetails = document.getElementById("successDetails");
  successDetails.innerHTML = `
    <p><strong>Mentorship Program:</strong> ${bookingData.plan.title}</p>
    <p><strong>Amount Paid:</strong> ₦${bookingData.plan.price.toLocaleString()}</p>
    <p><strong>Reference:</strong> ${reference}</p>
    <p><strong>Delivery Method:</strong> ${
      bookingData.delivery === "remote" ? "Remote" : "Physical (Ibadan)"
    }</p>
    <p style="margin-top: 1rem; font-size: 0.9rem; color: #999;">
      Check your email for next steps and mentorship start details.
    </p>
  `;

  // Log booking (in production, this would be sent to backend)
  console.log("Booking Confirmed:", {
    ...bookingData,
    reference: reference,
    paymentStatus: "success",
    timestamp: new Date().toISOString(),
  });
}

// === RESET BOOKING DATA ===
function resetBookingData() {
  currentStep = 1;
  selectedPlanId = null;
  bookingData = {
    plan: null,
    delivery: "remote",
    fullName: "",
    email: "",
    phone: "",
  };

  // Clear form inputs
  const fullNameInput = document.getElementById("fullName");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");

  if (fullNameInput) fullNameInput.value = "";
  if (emailInput) emailInput.value = "";
  if (phoneInput) phoneInput.value = "";
  document.querySelector('input[name="delivery"][value="remote"]').checked =
    true;
  document.getElementById("physicalNote").classList.add("hidden");
  document.getElementById("errorMessage").classList.remove("show");
}

// === INITIALIZE ON MENTORSHIP TAB CLICK ===
// This will be called from index.js when mentorship tab is activated
function initializeMentorshipPageOnTabSwitch() {
  const grid = document.getElementById("mentorshipGrid");
  if (grid && !grid.children.length) {
    initMentorshipPage();
  }
}

// Initialize when page loads (if mentorship is active)
document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("mentorshipGrid");
  if (grid && !grid.children.length) {
    initMentorshipPage();
  }
});
