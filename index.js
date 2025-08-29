function getById(idName) {
  return document.getElementById(idName);
}

function getByClass(className) {
  return document.getElementsByClassName(className);
}

const productCards = getByClass("product-card");
console.log(productCards);

Array.from(productCards).forEach((productCard) => {
  productCard.classList.add(
    "bg-white",
    "p-4",
    "flex",
    "flex-col",
    "text-center",
    "rounded-xl"
  );
  productCard.querySelector("img").classList.add("md:h-full", "mx-auto", "p-6");
  productCard.querySelector(".star").classList.add("text-yellow-500");
  productCard
    .querySelector(".image")
    .classList.add("bg-gray-100", "mb-8", "rounded-md");
  productCard
    .querySelector(".product-title")
    .classList.add("text-xl", "font-semibold");
  productCard.querySelector(".products-price").classList.add("text-gray-500");
});

// mobile menu function
const menuBtn = getById("menu-btn");
menuBtn.addEventListener("click", function () {
  const mobileMenu = getById("mobile-menu");
  mobileMenu.classList.toggle("opacity-0");
  mobileMenu.classList.toggle("opacity-100");
  mobileMenu.classList.toggle("top-10");
  mobileMenu.classList.toggle("top-16");
});
