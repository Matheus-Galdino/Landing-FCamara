const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-link");
const navLinksContainer = document.querySelector(".nav-links");
const accordions = document.querySelectorAll(".accordion");
const themeSwitch = document.querySelector("#theme-switch");

for (let i = 0; i < accordions.length; i++) {
  const element = accordions[i];

  element.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
}

for (let i = 0; i < navLinks.length; i++) {
  const element = navLinks[i];

  element.addEventListener("click", () => {
    navLinksContainer.classList.remove("open");
    burger.classList.remove("open");
  });
}

burger.addEventListener("click", () => {
  burger.classList.toggle("open");

  navLinksContainer.classList.toggle("open");
});

themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  const isDarkMode = document.body.classList.contains("dark-mode");
  const icon = isDarkMode ? "nights_stay" : "wb_sunny";

  themeSwitch.classList.toggle("rotate");

  themeSwitch.innerHTML = `<span class="material-icons"> ${icon} </span>`;

  if (isDarkMode) localStorage.setItem("isDarkMode", isDarkMode);
  else localStorage.removeItem("isDarkMode");
});

window.onload = () => {
  const isDarkMode = localStorage.getItem("isDarkMode") || window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    themeSwitch.classList.toggle("rotate");
    themeSwitch.innerHTML = `<span class="material-icons"> nights_stay </span>`;
  }
};
