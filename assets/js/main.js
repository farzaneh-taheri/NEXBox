// assets/js/main.js
import { initHeaderMenu } from "./modules/header.js";
import { initHeroSlider } from "./modules/hero-slider.js";

// وقتی DOM کامل لود شد، ماژول‌ها را راه‌اندازی کن
document.addEventListener("DOMContentLoaded", () => {
  initHeaderMenu();
  initHeroSlider();
});
