/* ================= GLOBAL STATE ================= */
let products = [
  {
    id: 1,
    name: "Cheese Burger",
    price: 120,
    category: "burger",
    img: "https://source.unsplash.com/300x200/?burger",
    rating: 4.5
  },
  {
    id: 2,
    name: "Veg Pizza",
    price: 250,
    category: "pizza",
    img: "https://source.unsplash.com/300x200/?pizza",
    rating: 4.2
  },
  {
    id: 3,
    name: "Cold Coffee",
    price: 90,
    category: "drinks",
    img: "https://source.unsplash.com/300x200/?coffee",
    rating: 4.7
  },
  {
    id: 4,
    name: "Chocolate Cake",
    price: 180,
    category: "dessert",
    img: "https://source.unsplash.com/300x200/?cake",
    rating: 4.8
  },
  {
    id: 5,
    name: "Paneer Tikka",
    price: 220,
    category: "indian",
    img: "https://source.unsplash.com/300x200/?paneer",
    rating: 4.6
  }
];

let cart = [];
let favorites = [];
let currentFilter = "all";

/* ================= RENDER PRODUCTS ================= */
function renderProducts(list = products) {
  const container = document.getElementById("food-list");

  container.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${product.img}" onclick="openQuickView(${product.id})">
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>⭐ ${product.rating}</p>

      <button onclick="addToCart(${product.id})">Add to Cart</button>
      <button onclick="addToFavorites(${product.id})">❤️</button>
    `;

    container.appendChild(div);
  });
}

/* ================= SEARCH ================= */
function searchFood() {
  const value = document.getElementById("search").value.toLowerCase();

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );

  renderProducts(filtered);
}

/* ================= CATEGORY FILTER ================= */
function filterCategory(category) {
  currentFilter = category;

  if (category === "all") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    renderProducts(filtered);
  }
}

/* ================= SORT ================= */
function sortProducts(type) {
  let sorted = [...products];

  if (type === "low") {
    sorted.sort((a, b) => a.price - b.price);
  } else if (type === "high") {
    sorted.sort((a, b) => b.price - a.price);
  } else if (type === "rating") {
    sorted.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(sorted);
}

/* ================= PRICE FILTER ================= */
function updatePrice(value) {
  document.getElementById("priceValue").innerText = value;

  const filtered = products.filter(p => p.price <= value);
  renderProducts(filtered);
}

/* ================= QUICK VIEW ================= */
let currentQuickProduct = null;

function openQuickView(id) {
  const product = products.find(p => p.id === id);
  currentQuickProduct = product;

  document.getElementById("quick-name").innerText = product.name;
  document.getElementById("quick-price").innerText = product.price;
  document.getElementById("quick-img").src = product.img;

  document.getElementById("quick-view-modal").style.display = "flex";
}

function closeQuickView() {
  document.getElementById("quick-view-modal").style.display = "none";
}

/* ================= INITIAL LOAD ================= */
window.onload = () => {
  renderProducts();
};
/* ================= ADD TO CART ================= */
function addToCart(id) {
  const product = products.find(p => p.id === id);

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  showToast("Added to cart 🛒");
  updateCartUI();
}

/* ================= REMOVE FROM CART ================= */
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartUI();
}

/* ================= CHANGE QUANTITY ================= */
function changeQty(id, type) {
  const item = cart.find(i => i.id === id);

  if (!item) return;

  if (type === "inc") {
    item.qty++;
  } else if (type === "dec") {
    item.qty--;

    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
  }

  updateCartUI();
}

/* ================= UPDATE CART UI ================= */
function updateCartUI() {
  const container = document.getElementById("cart-items");
  const count = document.getElementById("cart-count");

  container.innerHTML = "";

  let total = 0;
  let itemCount = 0;

  cart.forEach(item => {
    total += item.price * item.qty;
    itemCount += item.qty;

    const div = document.createElement("div");

    div.innerHTML = `
      <span>${item.name}</span>
      <div>
        <button onclick="changeQty(${item.id}, 'dec')">-</button>
        ${item.qty}
        <button onclick="changeQty(${item.id}, 'inc')">+</button>
      </div>
      <span>₹${item.price * item.qty}</span>
      <button onclick="removeFromCart(${item.id})">❌</button>
    `;

    container.appendChild(div);
  });

  document.getElementById("subtotal").innerText = total;
  document.getElementById("total").innerText = total + 40;

  count.innerText = itemCount;

  if (cart.length === 0) {
    document.getElementById("empty-cart").style.display = "block";
  } else {
    document.getElementById("empty-cart").style.display = "none";
  }
}

/* ================= OPEN / CLOSE CART ================= */
function openCart() {
  document.getElementById("cart-modal").style.display = "flex";
}

function closeCart() {
  document.getElementById("cart-modal").style.display = "none";
}

/* ================= CHECKOUT ================= */
function goToCheckout() {
  document.getElementById("checkout-section").scrollIntoView();
  closeCart();
}

/* ================= TOAST ================= */
function showToast(msg) {
  const toast = document.getElementById("toast");

  toast.innerText = msg;
  toast.style.display = "block";

  setTimeout(() => {
    toast.style.display = "none";
  }, 2000);
}
/* ================= ADD TO FAVORITES ================= */
function addToFavorites(id) {
  const product = products.find(p => p.id === id);

  const exists = favorites.find(item => item.id === id);

  if (exists) {
    showToast("Already in favorites ❤️");
    return;
  }

  favorites.push(product);

  showToast("Added to favorites ❤️");
  updateFavoritesUI();
}

/* ================= REMOVE FROM FAVORITES ================= */
function removeFromFavorites(id) {
  favorites = favorites.filter(item => item.id !== id);
  updateFavoritesUI();
}

/* ================= UPDATE FAVORITES UI ================= */
function updateFavoritesUI() {
  const container = document.getElementById("favorites-list");
  const count = document.getElementById("fav-count");

  container.innerHTML = "";

  favorites.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <span>${item.name}</span>
      <button onclick="addToCart(${item.id})">Add to Cart</button>
      <button onclick="removeFromFavorites(${item.id})">❌</button>
    `;

    container.appendChild(div);
  });

  count.innerText = favorites.length;

  if (favorites.length === 0) {
    document.getElementById("empty-favorites").style.display = "block";
  } else {
    document.getElementById("empty-favorites").style.display = "none";
  }

  updateWishlistUI();
}

/* ================= OPEN / CLOSE FAVORITES ================= */
function openFavorites() {
  document.getElementById("favorites-modal").style.display = "flex";
}

function closeFavorites() {
  document.getElementById("favorites-modal").style.display = "none";
}

/* ================= WISHLIST SYSTEM ================= */
function updateWishlistUI() {
  const container = document.getElementById("wishlist-items");

  container.innerHTML = "";

  favorites.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${item.img}" width="100%">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>

      <button onclick="addToCart(${item.id})">Add to Cart</button>
    `;

    container.appendChild(div);
  });
}

/* ================= QUICK VIEW FAVORITE ================= */
function addQuickToFavorites() {
  if (!currentQuickProduct) return;

  addToFavorites(currentQuickProduct.id);
}

/* ================= SAVE TO LOCAL STORAGE ================= */
function saveFavorites() {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function loadFavorites() {
  const data = localStorage.getItem("favorites");

  if (data) {
    favorites = JSON.parse(data);
    updateFavoritesUI();
  }
}

/* ================= INIT FAVORITES ================= */
window.addEventListener("load", () => {
  loadFavorites();
});

/* ================= AUTO SAVE ================= */
setInterval(() => {
  saveFavorites();
}, 2000);
/* ================= GLOBAL ORDER STATE ================= */
let orders = [];
let discountAmount = 0;

/* ================= APPLY COUPON ================= */
function applyCoupon() {
  const code = document.getElementById("coupon").value.trim();
  const msg = document.getElementById("coupon-message");

  if (code === "SAVE50") {
    discountAmount = 50;
    msg.innerText = "Coupon applied! ₹50 off 🎉";
    msg.className = "success";
  } else if (code === "FREEDEL") {
    discountAmount = 40;
    msg.innerText = "Free delivery applied 🚚";
    msg.className = "success";
  } else {
    discountAmount = 0;
    msg.innerText = "Invalid coupon ❌";
    msg.className = "error";
  }

  updateCheckoutUI();
}

/* ================= UPDATE CHECKOUT UI ================= */
function updateCheckoutUI() {
  const container = document.getElementById("checkout-items");

  container.innerHTML = "";

  let subtotal = 0;

  cart.forEach(item => {
    subtotal += item.price * item.qty;

    const div = document.createElement("div");

    div.innerHTML = `
      <span>${item.name} x ${item.qty}</span>
      <span>₹${item.price * item.qty}</span>
    `;

    container.appendChild(div);
  });

  document.getElementById("checkout-subtotal").innerText = subtotal;
  document.getElementById("discount").innerText = discountAmount;

  const total = subtotal + 40 - discountAmount;
  document.getElementById("checkout-total").innerText = total;
}

/* ================= PLACE ORDER ================= */
function placeOrder() {
  if (cart.length === 0) {
    showToast("Cart is empty ❌");
    return;
  }

  const order = {
    id: Date.now(),
    items: [...cart],
    total: cart.reduce((sum, item) => sum + item.price * item.qty, 0) + 40 - discountAmount,
    status: "Placed"
  };

  orders.push(order);

  showToast("Order placed successfully 🎉");

  cart = [];
  discountAmount = 0;

  updateCartUI();
  updateOrdersUI();

  document.getElementById("success-modal").style.display = "flex";
}

/* ================= UPDATE ORDERS UI ================= */
function updateOrdersUI() {
  const container = document.getElementById("orders-list");

  container.innerHTML = "";

  orders.forEach(order => {
    const div = document.createElement("div");
    div.classList.add("order-card");

    div.innerHTML = `
      <h4>Order #${order.id}</h4>
      <p>Status: ${order.status}</p>
      <p>Total: ₹${order.total}</p>

      <button onclick="trackOrder(${order.id})">Track</button>
      <button onclick="viewInvoice(${order.id})">Invoice</button>
    `;

    container.appendChild(div);
  });
}

/* ================= TRACK ORDER ================= */
function trackOrder(id) {
  document.getElementById("tracking-section").scrollIntoView();

  const steps = document.querySelectorAll(".step");

  steps.forEach((step, index) => {
    setTimeout(() => {
      step.classList.add("active");
    }, index * 1000);
  });
}

/* ================= INVOICE ================= */
function viewInvoice(id) {
  const order = orders.find(o => o.id === id);

  if (!order) return;

  document.getElementById("invoice-id").innerText = order.id;
  document.getElementById("invoice-total").innerText = order.total;
  document.getElementById("invoice-date").innerText = new Date().toLocaleString();

  const container = document.getElementById("invoice-items");
  container.innerHTML = "";

  order.items.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <span>${item.name} x ${item.qty}</span>
      <span>₹${item.price * item.qty}</span>
    `;

    container.appendChild(div);
  });

  document.getElementById("invoice-modal").style.display = "flex";
}

function closeInvoice() {
  document.getElementById("invoice-modal").style.display = "none";
}

/* ================= DOWNLOAD INVOICE ================= */
function downloadInvoice() {
  alert("Invoice download simulated 📄");
}

/* ================= CLOSE SUCCESS ================= */
function closeSuccess() {
  document.getElementById("success-modal").style.display = "none";
}

/* ================= INIT CHECKOUT ================= */
window.addEventListener("load", () => {
  updateCheckoutUI();
});
/* ================= USER STATE ================= */
let currentUser = null;

/* ================= LOGIN (EMAIL) ================= */
function loginUser() {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  if (!email || !password) {
    showToast("Enter email & password ❌");
    return;
  }

  currentUser = {
    name: email.split("@")[0],
    email: email,
    pic: "https://i.pravatar.cc/100"
  };

  saveUser();
  updateUserUI();

  showToast("Login successful ✅");
  closeAuth();
}

/* ================= SIGNUP ================= */
function signupUser() {
  showToast("Signup successful 🎉");
  loginUser();
}

/* ================= GOOGLE LOGIN (MOCK) ================= */
function googleLogin() {
  currentUser = {
    name: "Google User",
    email: "user@gmail.com",
    pic: "https://i.pravatar.cc/100?img=5"
  };

  saveUser();
  updateUserUI();

  showToast("Google login success 🚀");
  closeAuth();
}

/* ================= PHONE LOGIN (MOCK) ================= */
function phoneLogin() {
  document.getElementById("otp-modal").style.display = "flex";
}

function verifyOTP() {
  currentUser = {
    name: "Phone User",
    email: "phone@user.com",
    pic: "https://i.pravatar.cc/100?img=8"
  };

  saveUser();
  updateUserUI();

  showToast("Phone login success 📱");

  document.getElementById("otp-modal").style.display = "none";
  closeAuth();
}

/* ================= LOGOUT ================= */
function logout() {
  currentUser = null;
  localStorage.removeItem("user");

  updateUserUI();
  showToast("Logged out 🚪");
}

/* ================= SAVE USER ================= */
function saveUser() {
  localStorage.setItem("user", JSON.stringify(currentUser));
}

/* ================= LOAD USER ================= */
function loadUser() {
  const data = localStorage.getItem("user");

  if (data) {
    currentUser = JSON.parse(data);
    updateUserUI();
  }
}

/* ================= UPDATE PROFILE UI ================= */
function updateUserUI() {
  const name = document.getElementById("user-name");
  const email = document.getElementById("user-email");
  const pic = document.getElementById("profile-pic");

  if (currentUser) {
    name.innerText = currentUser.name;
    email.innerText = currentUser.email;
    pic.src = currentUser.pic;
  } else {
    name.innerText = "Guest User";
    email.innerText = "Not logged in";
    pic.src = "https://via.placeholder.com/100";
  }
}

/* ================= OPEN / CLOSE PROFILE ================= */
function openProfile() {
  document.getElementById("profile-modal").style.display = "flex";
}

function closeProfile() {
  document.getElementById("profile-modal").style.display = "none";
}

/* ================= AUTH MODAL ================= */
function openAuth() {
  document.getElementById("auth-modal").style.display = "flex";
}

function closeAuth() {
  document.getElementById("auth-modal").style.display = "none";
}

/* ================= INIT USER ================= */
window.addEventListener("load", () => {
  loadUser();
});
/* ================= CHAT SYSTEM ================= */
function toggleChat() {
  const chat = document.getElementById("chat-box");

  chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

/* ================= SEND MESSAGE ================= */
function sendMessage() {
  const input = document.getElementById("chat-input");
  const msg = input.value.trim();

  if (!msg) return;

  const chatBox = document.getElementById("chat-messages");

  // User message
  const userDiv = document.createElement("div");
  userDiv.classList.add("message", "user");
  userDiv.innerHTML = `<p>${msg}</p>`;
  chatBox.appendChild(userDiv);

  input.value = "";

  // Bot reply (simple AI)
  setTimeout(() => {
    const botDiv = document.createElement("div");
    botDiv.classList.add("message", "bot");

    botDiv.innerHTML = `<p>${getBotReply(msg)}</p>`;
    chatBox.appendChild(botDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
  }, 800);
}

/* ================= BOT REPLY ================= */
function getBotReply(msg) {
  msg = msg.toLowerCase();

  if (msg.includes("hello")) return "Hi! 👋 How can I help you?";
  if (msg.includes("order")) return "You can track your order in Orders 📦";
  if (msg.includes("payment")) return "We support UPI, Cards & COD 💳";
  if (msg.includes("refund")) return "Refund will be processed in 3-5 days 💸";

  return "I'm here to help! 😊";
}

/* ================= NOTIFICATIONS ================= */
function openNotifications() {
  document.getElementById("notification-panel").classList.add("active");
}

function closeNotifications() {
  document.getElementById("notification-panel").classList.remove("active");
}

/* ================= PUSH NOTIFICATION ================= */
function pushNotification(text) {
  const list = document.getElementById("notifications-list");

  const div = document.createElement("div");
  div.classList.add("notification-item");

  div.innerHTML = `<p>${text}</p>`;

  list.prepend(div);

  showToast("New notification 🔔");
}

/* ================= AUTO NOTIFICATIONS ================= */
setInterval(() => {
  const msgs = [
    "🔥 New offer available!",
    "🚚 Your order is on the way!",
    "🎉 20% discount unlocked!"
  ];

  const random = msgs[Math.floor(Math.random() * msgs.length)];
  pushNotification(random);

}, 15000);

/* ================= SIDEBAR ================= */
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}

/* ================= DARK MODE ================= */
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

/* ================= SCROLL ================= */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToProducts() {
  document.getElementById("products-section").scrollIntoView({
    behavior: "smooth"
  });
}

/* ================= NAVIGATION ================= */
function goHome() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ================= FILTER DRAWER ================= */
function closeFilter() {
  document.getElementById("filter-drawer").style.display = "none";
}

function filterByRating(rating) {
  if (rating === "all") {
    renderProducts(products);
  } else {
    const filtered = products.filter(p => p.rating >= rating);
    renderProducts(filtered);
  }
}

function filterByTime(time) {
  showToast("Filter applied ⏱ (demo)");
}

/* ================= IMAGE ZOOM ================= */
function openZoom(img) {
  document.getElementById("zoom-image").src = img;
  document.getElementById("zoom-modal").style.display = "flex";
}

function closeZoom() {
  document.getElementById("zoom-modal").style.display = "none";
}
/* ================= FINAL APP INIT ================= */
function initApp() {
  renderProducts();
  updateCartUI();
  updateFavoritesUI();
  updateCheckoutUI();
  updateOrdersUI();
  updateUserUI();
}

/* Run everything safely on load */
window.addEventListener("load", () => {
  initApp();
});

/* Optional: expose functions globally (IMPORTANT for onclick buttons) */
window.addToCart = addToCart;
window.addToFavorites = addToFavorites;
window.removeFromCart = removeFromCart;
window.changeQty = changeQty;

window.openCart = openCart;
window.closeCart = closeCart;

window.openFavorites = openFavorites;
window.closeFavorites = closeFavorites;

window.openQuickView = openQuickView;
window.closeQuickView = closeQuickView;

window.addQuickToFavorites = addQuickToFavorites;

window.applyCoupon = applyCoupon;
window.placeOrder = placeOrder;

window.trackOrder = trackOrder;
window.viewInvoice = viewInvoice;
window.closeInvoice = closeInvoice;
window.downloadInvoice = downloadInvoice;

window.loginUser = loginUser;
window.signupUser = signupUser;
window.googleLogin = googleLogin;
window.phoneLogin = phoneLogin;
window.verifyOTP = verifyOTP;
window.logout = logout;

window.openAuth = openAuth;
window.closeAuth = closeAuth;
window.openProfile = openProfile;
window.closeProfile = closeProfile;

window.toggleChat = toggleChat;
window.sendMessage = sendMessage;

window.openNotifications = openNotifications;
window.closeNotifications = closeNotifications;

window.toggleSidebar = toggleSidebar;
window.toggleDarkMode = toggleDarkMode;

window.scrollToTop = scrollToTop;
window.scrollToProducts = scrollToProducts;
window.goHome = goHome;

window.openZoom = openZoom;
window.closeZoom = closeZoom;
window.filterCategory = filterCategory;
window.sortProducts = sortProducts;
window.updatePrice = updatePrice;
window.filterByRating = filterByRating;
window.filterByTime = filterByTime;
