import { products } from "../../../data/products.js";

export function renderLatestProducts(containerId, limit = 6) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  products
    .filter((p) => p.isNew)
    .slice(0, limit)
    .forEach((p) => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${p.image}" alt="${p.title}">
        <div class="product-info">
          <h4>${p.title}</h4>
          <div class="price">
            ${p.price.toLocaleString()} تومان
          </div>
        </div>
        <button data-id="${p.id}">افزودن به سبد</button>
      `;

      container.appendChild(card);
    });
}
