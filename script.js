// Sample product data
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "logo.jpg" },
    { id: 2, name: "Product 2", price: 29.99, image: "NEW.jpg" },
    { id: 3, name: "Product 3", price: 39.99, image: "NIKE.png" }
];

// Cart array to hold items
let cart = [];

// Function to display products
function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add items to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(itemDiv);
        total += item.price;
    });

    cartCount.innerText = cart.length;
    cartTotal.innerText = `Total: $${total.toFixed(2)}`;
}

// Event listener for checkout button
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
});

// Initialize the product display on page load
displayProducts();
