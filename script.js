// Product Data (Simulated Database)
const PRODUCTS = [
  {
    id: 1,
    name: "Lumina Sound Pro",
    price: 199.00,
    image: "assets/headphones.png",
    description: "Experience pure silence with our top-tier noise-canceling headphones.",
    category: "Audio"
  },
  {
    id: 2,
    name: "Chronos Lite",
    price: 129.50,
    image: "assets/smartwatch.png",
    description: "Track your life with style. 7-day battery life and health monitoring.",
    category: "Wearables"
  },
  {
    id: 3,
    name: "KeyFlow 60",
    price: 89.99,
    image: "assets/keyboard.png",
    description: "Compact mechanical keyboard with satisfying tactile feedback.",
    category: "Peripherals"
  },
  {
    id: 4,
    name: "AirMouse Ergo",
    price: 49.99,
    image: "assets/mouse.png",
    description: "Ergonomic wireless mouse designed for productivity.",
    category: "Peripherals"
  },
  {
    id: 5,
    name: "EchoDot Speaker",
    price: 59.99,
    image: "assets/speaker.png",
    description: "360-degree sound in a compact, portable design.",
    category: "Audio"
  },
  {
    id: 6,
    name: "FlexStand Aluminum",
    price: 34.00,
    image: "assets/stand.png",
    description: "Adjustable aluminum stand for smartphones and tablets.",
    category: "Accessories"
  },
  {
    id: 7,
    name: "ZenBuds Pro",
    price: 149.00,
    image: "assets/earbuds.png",
    description: "True wireless earbuds with active noise cancellation.",
    category: "Audio"
  },
  {
    id: 8,
    name: "GlowLamp One",
    price: 45.00,
    image: "assets/lamp.png",
    description: "Smart ambient lighting for your workspace.",
    category: "Home"
  },
  {
    id: 9,
    name: "PowerCore 20k",
    price: 39.99,
    image: "assets/powerbank.png",
    description: "High-capacity portable charger for all your devices.",
    category: "Accessories"
  },
  {
    id: 10,
    name: "VisionPro VR",
    price: 299.00,
    image: "assets/vr_headset.png", // Fallback image for video poster
    video: "assets/producto3.mp4", // Existing video asset
    description: "Immersive VR headset compatible with PC and Console.",
    category: "Gaming"
  }
];

// App State
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DOM Elements
const productGrid = document.querySelector(".gallery"); // Will target the new container
const searchInput = document.getElementById("searchInput");

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  if (window.location.pathname.includes("carrito.html")) {
    // Cart page logic is separate in current structure, but we can unify utils later
  } else {
    renderProducts(PRODUCTS);
  }
  updateCartBadge();
});

// Render Function
function renderProducts(products) {
  const container = document.querySelector(".gallery");
  if (!container) return;

  container.innerHTML = products.map(product => `
    <article class="product-card fade-in">
      <div class="media-container">
        ${product.video
          ? `<video src="${product.video}" poster="${product.image}" muted loop playsinline hover-play></video>`
          : `<img src="${product.image}" alt="${product.name}" loading="lazy" width="300" height="300">`
        }
      </div>
      <div class="details">
        <span class="category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="price">$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})" class="add-btn">
          Agregar al carrito
        </button>
      </div>
    </article>
  `).join("");

  // Attach hover listeners for video
  document.querySelectorAll('video[hover-play]').forEach(vid => {
    vid.parentElement.addEventListener('mouseenter', () => vid.play());
    vid.parentElement.addEventListener('mouseleave', () => {
      vid.pause();
      vid.currentTime = 0;
    });
  });
}

// Search Logic
function searchProducts() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filtered = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(query) ||
    p.description.toLowerCase().includes(query)
  );
  renderProducts(filtered);
}

// Cart Logic
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;

  cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  showToast(`${product.name} agregado al carrito!`);
  updateCartBadge();
}

function updateCartBadge() {
  const badge = document.getElementById("cart-count");
  if (badge) badge.innerText = cart.length;
}

// UI Utilities
function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerText = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 300);
    }, 2000);
  }, 100);
}
