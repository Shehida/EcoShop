const products = [
  { id: 1, name: "Apple", price: "1.20€", category: "fruta-bio", img: "img/products/apple.jpg" },
  { id: 2, name: "Banana", price: "0.90€", category: "fruta-bio", img: "img/products/banana.jpg" },
  { id: 3, name: "Strawberry", price: "2.50€", category: "fruta-bio", img: "img/products/strawberry.jpg" },
  { id: 4, name: "Tomato", price: "1.00€", category: "perime-bio", img: "img/products/tomato.jpg" },
  { id: 5, name: "Cucumber", price: "0.80€", category: "perime-bio", img: "img/products/cucumber.jpg" },
  { id: 6, name: "Carrot", price: "0.70€", category: "perime-bio", img: "img/products/carrot.jpg" },
  { id: 7, name: "Orange Juice", price: "2.90€", category: "pije-bio", img: "img/products/orangejuice.jpg" }, 
  { id: 8, name: "Almond Milk", price: "3.20€", category: "pije-bio", img: "img/products/almondmilk.jpg" },
  { id: 9, name: "Smoothie", price: "3.00€", category: "pije-bio", img: "img/products/smoothie.jpg" },
  { id: 10, name: "Almonds", price: "4.50€", category: "snacks", img: "img/products/almonds.jpg" },
  { id: 11, name: "Mixed Nuts", price: "5.00€", category: "snacks", img: "img/products/mixednuts.jpg" },
  { id: 12, name: "Dried Fruits", price: "4.80€", category: "snacks", img: "img/products/driedfruits.jpg" },
  { id: 13, name: "Flour", price: "1.50€", category: "grure", img: "img/products/flour.jpg" },
  { id: 14, name: "Oatmeal", price: "2.20€", category: "grure", img: "img/products/oatmeal.jpg" },
  { id: 15, name: "Quinoa", price: "4.00€", category: "grure", img: "img/products/quinoa.jpg" },
  { id: 16, name: "Cream", price: "6.50€", category: "kujdesi-personal", img: "img/products/krem.jpg" }, 
  { id: 17, name: "Lotion", price: "5.90€", category: "kujdesi-personal", img: "img/products/lotion.jpg" },
  { id: 18, name: "Shampoo", price: "7.20€", category: "kujdesi-personal", img: "img/products/shampoo.jpg" },
  { id: 19, name: "Dish Cleaner", price: "3.80€", category: "produkte-per-shtepi", img: "img/products/dishcleaner.jpg" },
  { id: 20, name: "Laundry Detergent", price: "8.00€", category: "produkte-per-shtepi", img: "img/products/laundry.jpg" },
  { id: 21, name: "Surface Spray", price: "4.20€", category: "produkte-per-shtepi", img: "img/products/surface.jpg" }
];
  

function renderProducts(productList) {
  const container = document.getElementById('products-container');
  container.innerHTML = '';

  productList.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product-card';
    productDiv.innerHTML = `
      <img src="${product.img}" alt="${product.name}" onclick="openProductDetail(${product.id})">
      <h3>${product.name}</h3>
      <p class="price">${product.price}</p>
      <button onclick="alert('Added to cart: ${product.name}')">Add to Cart</button>
    `;
    container.appendChild(productDiv);
  });
}

function filterProducts(category) {
  if (category === 'all') {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
});

function openProductDetail(id) {
  localStorage.setItem('selectedProduct', JSON.stringify(products.find(p => p.id === id)));
  window.location.href = 'product-detail.html';
}