// Product Data
const products = [
  {
    category: "Kitchenware",
    items: [
      {
        name: "K. Accessories",
        price: "30.00 TK",
        img: "./assets/kitchen-1.png",
        rating: 4,
      },
      {
        name: "K. Accessories",
        price: "25.00 TK",
        img: "./assets/kitchen-2.png",
        rating: 2,
      },
      {
        name: "Home Cooker",
        price: "49.00 TK",
        img: "./assets/kitchen-3.png",
        rating: 5,
      },
    ],
  },
  {
    category: "Sportswear",
    items: [
      {
        name: "Sports Back Cap",
        price: "19.00 TK",
        img: "./assets/sports-1.png",
        rating: 3,
      },
      {
        name: "Full Jersey Set",
        price: "69.00 TK",
        img: "./assets/sports-2.png",
        rating: 5,
      },
      {
        name: "Sports cates",
        price: "199.00 TK",
        img: "./assets/sports-3.png",
        rating: 4,
      },
    ],
  },
  {
    category: "Furniture",
    items: [
      {
        name: "Single Relax Chair",
        price: "185.00 TK",
        img: "./assets/furniture-1.png",
        rating: 4,
      },
      {
        name: "Children play",
        price: "239.00 TK",
        img: "./assets/furniture-2.png",
        rating: 3,
      },
      {
        name: "Flexible Sofa",
        price: "339.00 TK",
        img: "./assets/furniture-3.png",
        rating: 5,
      },
    ],
  },
];

// Function to generate stars
function getStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars +=
      i <= rating ? (
        <span class="text-yellow-400">★</span>
      ) : (
        <span class="text-gray-300">★</span>
      );
  }
  return stars;
}

// Rendering categories and products
const container = document.getElementById("products-container");
products.map((section) => {
  const categoryHTML = `
    <div class="container mx-auto px-6 md:px-10 lg:px-20">
      <h2 class="text-2xl font-bold mb-4">${section.category}</h2>
      <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${section.items
          .map(
            (item) => `
          <div class="bg-white p-4 rounded-md shadow hover:shadow-lg transition  ">
          <div class="bg-gray-100 p-6 rounded-md">
            <img src="${item.img}" alt="${
              item.name
            }" class="mx-auto mb-5   object-contain" />
          </div>
          
            <h3 class="font-semibold text-center mt-5">${item.name}</h3>
            <div class="flex justify-center mt-1">${getStars(item.rating)}</div>
            <p class="text-center mt-2 text-gray-700 font-medium">${
              item.price
            }</p>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
  container.innerHTML += categoryHTML;
});