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
    'p-4',
    "flex",
    "flex-col",
    "text-center",
    "rounded-xl"
  );
  productCard
    .querySelector("img")
    .classList.add("w-[50%]","p-4", "mb-4", "rounded-md", "mx-auto");
  productCard.querySelector(".star").classList.add("text-yellow-500");
  productCard.querySelector('.image').classList.add('bg-gray-100', "mb-8")
  productCard
  .querySelector(".product-title")
  .classList.add("text-xl", "font-semibold");
  productCard.querySelector(".products-price").classList.add("text-gray-500");

});
