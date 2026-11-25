const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const label = document.getElementById("themeLabel");
const icon = document.getElementById("themeIcon");
const phone = document.getElementById("phonePreview");
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

function applyTheme(theme) {
  root.dataset.theme = theme;
  // The app preview intentionally uses the opposite theme from the website.
  phone.dataset.theme = theme === "dark" ? "light" : "dark";
  const next = theme === "dark" ? "light" : "dark";
  label.textContent = `Switch to ${next} mode`;
  icon.textContent = theme === "dark" ? "☀" : "☾";
  toggle.setAttribute("aria-label", `Switch to ${next} mode`);
  try { localStorage.setItem("lesshomeless-theme", theme); } catch (_) {}
}

let initialTheme = "light";
try {
  const saved = localStorage.getItem("lesshomeless-theme");
  if (saved === "light" || saved === "dark") initialTheme = saved;
} catch (_) {}
applyTheme(initialTheme);

toggle.addEventListener("click", () => {
  applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

document.getElementById("year").textContent = new Date().getFullYear();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.textContent = "The page is ready for an email signup service. No address has been stored.";
  message.classList.add("form-note");
});

// This form is intentionally front-end only. Connect a mailing-list provider before launch.
