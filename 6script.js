const products = [
    { id: 1, name: "Notebook", price: 40 },
    { id: 2, name: "Pen", price: 10 },
    { id: 3, name: "Bag", price: 500 },
    { id: 4, name: "Water Bottle", price: 150 }
];

let cart = [];

const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const totalPriceEl = document.getElementById("total-price");

function displayProducts() {
    productList.innerHTML = products.map((product) => `
        <div class="product-card">
            <h3>${product.name}</h3>
            <p>Price: ₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `).join("");
}

function addToCart(id) {
    const item = products.find((p) => p.id === id);
    cart.push(item);
    displayCart();
}

function removeFromCart(id) {
    const index = cart.findIndex((item) => item.id === id);

    if (index !== -1) {
        cart.splice(index, 1);
    }

    displayCart();
}

function calculateTotal() {
    return cart.reduce((sum, item) => sum + item.price, 0);
}

function displayCart() {
    cartList.innerHTML = cart.map((item, index) => `
        <li>
            ${item.name} - ₹${item.price}
            <button onclick="removeFromCart(${item.id})">
                ✖
            </button>
        </li>
    `).join("");

    totalPriceEl.textContent = calculateTotal();
}

displayProducts();
displayCart();