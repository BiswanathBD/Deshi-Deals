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
    "justify-between",
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

// coupon features
const couponBtn = getById("coupon-btn");
const coupon = getById("coupon");
couponBtn.addEventListener("click", function () {
  const cartPrice = getById("card-price").childNodes[1].childNodes[1].innerText;
  if (coupon.value === "SELL200") {
    if (Number(cartPrice) === 0) {
      coupon.value = "";
      Swal.fire({
        title: "Error!",
        text: "You can't apply a coupon to an empty cart.",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    discount = Number(cartPrice) * 0.2;
    discount = discount.toFixed(2);
    getById("discount").childNodes[1].childNodes[1].innerText = discount;
    let totalPrice = Number(cartPrice) - Number(discount);
    totalPrice = totalPrice.toFixed(2);
    getById("total-price").childNodes[1].childNodes[1].innerText = totalPrice;
    coupon.value = "";
    Swal.fire({
      title: "Success!",
      text: "Coupon applied successfully.",
      icon: "success",
      confirmButtonText: "Great!",
    });
  } else {
    Swal.fire({
      title: "Invalid Coupon!",
      text: "The coupon code you entered is not valid.",
      icon: "error",
      confirmButtonText: "Try Again",
    });
  }
});

// product and cart feature
const addBtns = getByClass("add-btn");
const productBox = getById("product-container");
const cartItemParent = getById("cart-parent");
productBox.addEventListener("click", function (e) {
  if (e.target.className.includes("add-btn")) {
    const clickedBtn = e.target;
    const productImg = clickedBtn.parentNode.childNodes[1].childNodes[1].src;
    const productTitle = clickedBtn.parentNode.childNodes[5].innerText;
    const productPrice =
      clickedBtn.parentNode.childNodes[7].childNodes[0].innerText;

    let cartPrice = getById("card-price").childNodes[1].childNodes[1].innerText;

    cartPrice = Number(cartPrice) + Number(productPrice);
    cartPrice = cartPrice.toFixed(2);
    getById("card-price").childNodes[1].childNodes[1].innerText = cartPrice;

    let discount = getById("discount").childNodes[1].childNodes[1].innerText;
    let totalPrice =
      getById("total-price").childNodes[1].childNodes[1].innerText;
    if (Number(discount) === 0) {
      totalPrice = Number(cartPrice) - Number(discount);
      totalPrice = totalPrice.toFixed(2);
      getById("total-price").childNodes[1].childNodes[1].innerText = totalPrice;

      const cartItem = document.createElement("div");
      cartItem.innerHTML = `<div
              id="added-item"
              class="flex justify-between items-center bg-gray-100 p-4 rounded-md"
            >
              <img
                id="product-image"
                class="h-12"
                src="${productImg}"
                alt=""
              />
              <div class="text-right">
                <p class="font-semibold">${productTitle}</p>
                <p id="product-price" class="text-gray-500">${productPrice} TK</p>
              </div>
            </div>`;
      cartItemParent.appendChild(cartItem);
    } else {
      discount = Number(cartPrice) * 0.2;
      discount = discount.toFixed(2);
      getById("discount").childNodes[1].childNodes[1].innerText = discount;
      const totalPrice = Number(cartPrice) - Number(discount);
      getById("total-price").childNodes[1].childNodes[1].innerText = totalPrice;
    }
  }
});

// Make Purchase features
const PurchaseBtn = getById("purchase-btn");
let totalPrice = getById("total-price").childNodes[1].childNodes[1].innerText;
PurchaseBtn.addEventListener("click", function () {
  if (Number(totalPrice) === 0) {
    Swal.fire({
      title: "Oops!",
      text: "Your cart is empty. Add items before purchase.",
      icon: "error",
      confirmButtonText: "OK",
    });
    return;
  }
  Swal.fire({
    title: "🎉 Order Placed!",
    text: "Your items are being prepared for shipment",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/679/679922.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Shipment Icon",
    background: "#f0f9ff", // light blue background
    color: "#0f172a", // dark text
    confirmButtonColor: "#16a34a", // green button
    confirmButtonText: "Awesome!",
  });
  cartItemParent.innerHTML = "";
});
