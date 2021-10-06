const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav-link");
const navLinksContainer = document.querySelector(".nav-links");
const accordions = document.querySelectorAll(".accordion");

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
  })
}

burger.addEventListener("click", () => {
  burger.classList.toggle("open");

  navLinksContainer.classList.toggle("open");
})