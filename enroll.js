const courses = {
  web: {
    title: "Web Development",
    description: "Build responsive websites and interactive web apps with HTML, CSS, JavaScript, and React.",
    duration: "12 weeks",
    level: "Beginner to advanced",
    fee: "Rs. 7,999",
    visual: "web",
    icon: "fa-solid fa-code",
    modules: [
      "HTML5 structure and semantic pages",
      "Responsive CSS layouts with Flexbox and Grid",
      "JavaScript fundamentals and DOM projects",
      "React components, state, and project deployment"
    ]
  },
  python: {
    title: "Python Programming",
    description: "Learn Python from basics to backend development with Django, APIs, automation, and practical projects.",
    duration: "10 weeks",
    level: "Beginner friendly",
    fee: "Rs. 6,999",
    visual: "python",
    icon: "fa-brands fa-python",
    modules: [
      "Python syntax, data types, and functions",
      "File handling, modules, and automation scripts",
      "Django basics and database integration",
      "REST API development and mini projects"
    ]
  },
  "machine-learning": {
    title: "Machine Learning",
    description: "Understand data analysis, model building, and prediction workflows with Python ML libraries.",
    duration: "14 weeks",
    level: "Intermediate",
    fee: "Rs. 9,999",
    visual: "machine",
    icon: "fa-solid fa-chart-line",
    modules: [
      "Data cleaning with Pandas and NumPy",
      "Visualization and exploratory data analysis",
      "Supervised learning with Scikit-Learn",
      "Model evaluation and capstone prediction project"
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const courseKey = params.get("course") || "web";
const course = courses[courseKey] || courses.web;

const setText = (id, value) => {
  const element = document.getElementById(id);
  if (element) element.textContent = value;
};

setText("courseTitle", course.title);
setText("courseDescription", course.description);
setText("courseDuration", course.duration);
setText("courseLevel", course.level);
setText("courseFee", course.fee);

document.title = `Enroll in ${course.title} | SkillHub Pro`;

const selectedCourse = document.getElementById("selectedCourse");
if (selectedCourse) selectedCourse.value = course.title;

const courseVisual = document.getElementById("courseVisual");
if (courseVisual) {
  courseVisual.className = `course-media ${course.visual}`;
}

const courseIcon = document.getElementById("courseIcon");
if (courseIcon) {
  courseIcon.className = course.icon;
}

const moduleList = document.getElementById("moduleList");
if (moduleList) {
  moduleList.innerHTML = course.modules
    .map((module) => `<li><i class="fa-solid fa-check" aria-hidden="true"></i><span>${module}</span></li>`)
    .join("");
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");
    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });
}

const enrollForm = document.getElementById("enrollForm");

if (enrollForm) {
  enrollForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const email = document.getElementById("studentEmail").value.trim();
    const phone = document.getElementById("studentPhone").value.trim();
    const mode = document.getElementById("learningMode").value;
    const goal = document.getElementById("studentGoal").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (name.length < 3) {
      alert("Please enter your full name");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (phone.replace(/\D/g, "").length < 10) {
      alert("Please enter a valid phone number");
      return;
    }

    if (!mode) {
      alert("Please select a learning mode");
      return;
    }

    if (goal.length < 10) {
      alert("Please write your learning goal");
      return;
    }

    alert(`Enrollment submitted for ${course.title}. Our team will contact you soon.`);
    enrollForm.reset();
    selectedCourse.value = course.title;
  });
}
