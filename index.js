function getById(idName) {
  return document.getElementById(idName);
}

function getByClass(className) {
  return document.getElementsByClassName(className);
}

const productCards = getByClass("product-card");

Array.from(productCards).forEach((productCard) => {
  productCard.classList.add(
    "bg-white",
    "p-4",
    "flex",
    "flex-col",
    "text-center",
    "rounded-md"
  );
  productCard.querySelector("img").classList.add("md:h-full", "mx-auto", "p-6");
  productCard.querySelector(".star").classList.add("text-yellow-500");
  productCard
    .querySelector(".image")
    .classList.add("bg-gray-100", "mb-8", "rounded-sm");
  productCard
    .querySelector(".product-title")
    .classList.add("text-xl", "font-semibold");
  productCard.querySelector(".products-price").classList.add("text-gray-500");
});

// mobile menu function
const menuBtn = document.getElementById("menu-btn");
const cartBtn = document.getElementById("cart-btn");

const mobileMenu = document.getElementById("mobile-menu");
const cartMenu = document.getElementById("cart-menu");

menuBtn.addEventListener("click", () => {
  cartMenu.classList.add("hidden");
  cartMenu.classList.remove("top-16");

  mobileMenu.classList.toggle("hidden");
  mobileMenu.classList.toggle("top-16");
});

cartBtn.addEventListener("click", () => {
  mobileMenu.classList.add("hidden");
  mobileMenu.classList.remove("top-16");

  cartMenu.classList.toggle("hidden");
  cartMenu.classList.toggle("top-16");
});

