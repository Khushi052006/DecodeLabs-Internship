const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navLinks.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.classList.remove("menu-open");
    });
  });
}

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = Number(counter.getAttribute("data-target"));
    const duration = 1200;
    const start = performance.now();

    const updateCounter = (time) => {
      const progress = Math.min((time - start) / duration, 1);
      counter.innerText = Math.floor(progress * target);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    requestAnimationFrame(updateCounter);
    counterObserver.unobserve(counter);
  });
}, { threshold: 0.45 });

counters.forEach((counter) => counterObserver.observe(counter));

document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = question.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".faq-question").forEach((item) => {
      item.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll(".faq-answer").forEach((item) => {
      item.style.display = "none";
    });

    if (!isOpen) {
      question.setAttribute("aria-expanded", "true");
      answer.style.display = "block";
    }
  });
});

const searchInput = document.getElementById("searchInput");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase().trim();

    document.querySelectorAll(".course-card").forEach((card) => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      const description = card.querySelector("p").innerText.toLowerCase();
      card.style.display = title.includes(value) || description.includes(value) ? "" : "none";
    });
  });
}

const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (name.length < 3) {
      alert("Please enter a valid name");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    if (message.length < 10) {
      alert("Message must be at least 10 characters");
      return;
    }

    alert("Message sent successfully!");
    contactForm.reset();
  });
}

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((link) => {
    link.classList.toggle("active-link", link.getAttribute("href") === `#${current}`);
  });
});

const backToTop = document.createElement("button");
backToTop.innerHTML = '<i class="fa-solid fa-arrow-up" aria-hidden="true"></i>';
backToTop.className = "back-to-top";
backToTop.type = "button";
backToTop.setAttribute("aria-label", "Back to top");
document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show-btn", window.scrollY > 400);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
