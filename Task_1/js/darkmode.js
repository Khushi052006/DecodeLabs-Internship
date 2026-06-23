const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;
const currentTheme = localStorage.getItem("theme");

const setThemeIcon = () => {
  if (!themeIcon) return;

  const isDark = document.body.classList.contains("dark-mode");
  themeIcon.classList.toggle("fa-moon", !isDark);
  themeIcon.classList.toggle("fa-sun", isDark);
};

if (currentTheme === "dark") {
  document.body.classList.add("dark-mode");
}

setThemeIcon();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    setThemeIcon();
  });
}
