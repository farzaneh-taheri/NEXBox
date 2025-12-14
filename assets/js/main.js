// assets/js/main.js
import { initHeaderMenu } from "./modules/header.js";
import { initHeroSlider } from "./modules/hero-slider.js";
import { renderLatestProducts } from "./modules/products.js";
import { enableDragScroll } from "./modules/dragScroll.js";

// وقتی DOM کامل لود شد، ماژول‌ها را راه‌اندازی کن
document.addEventListener("DOMContentLoaded", () => {
  initHeaderMenu();
  initHeroSlider();
  renderLatestProducts("latestProducts", 5);
  enableDragScroll("categorySlider"); // دسته‌بندی
  enableDragScroll("latestProducts"); // محصولات
});
