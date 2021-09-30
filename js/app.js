const accordions = document.querySelectorAll(".accordion");

for (let i = 0; i < accordions.length; i++) {
  const element = accordions[i];

  element.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
  });
}
