// assets/js/modules/hero-slider.js
export function initHeroSlider() {
  const slides = document.querySelectorAll(".hero-poster img");
  if (!slides.length) return;

  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  showSlide(current);

  setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 3000);
}
