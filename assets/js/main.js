//منوی همبرگری با دکمه بستن
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const closeMenu = document.getElementById("close-menu");

hamburger.addEventListener("click", () => {
  navLinks.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.remove("active");
});
