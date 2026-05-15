import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore, collection, getDocs, doc, setDoc, getDocs as getCartDocs } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

import { getAuth, GoogleAuthProvider, signInWithPopup } 
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

// 🔑 Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDrRL7BkyejSooFNx0pD5hBSMsgkfM8MpM",
  authDomain: "database-f0aee.firebaseapp.com",
  projectId: "database-f0aee",
  storageBucket: "database-f0aee.firebasestorage.app",
  messagingSenderId: "1025759093694",
  appId: "1:1025759093694:web:debbf45afc5f0241e88fef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// 🔐 LOGIN
await signInWithPopup(auth, provider);
const user = auth.currentUser;

// 🛒 LOAD PRODUCTS
const productsDiv = document.getElementById("products");

const snapshot = await getDocs(collection(db, "products"));

snapshot.forEach((docSnap) => {
  const p = docSnap.data();

  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart('${docSnap.id}')">Add to Cart</button>
  `;

  productsDiv.appendChild(div);
});

// ➕ ADD TO CART
window.addToCart = async (productId) => {
  await setDoc(doc(db, "cart", user.uid + "_" + productId), {
    userId: user.uid,
    productId: productId
  });

  alert("Added to cart");
  loadCart();
};

// 🧺 LOAD CART
async function loadCart() {
  const cartDiv = document.getElementById("cart");
  cartDiv.innerHTML = "";

  const cartSnap = await getDocs(collection(db, "cart"));

  cartSnap.forEach((item) => {
    const data = item.data();

    if (data.userId === user.uid) {
      const p = document.createElement("p");
      p.innerText = "Product ID: " + data.productId;
      cartDiv.appendChild(p);
    }
  });
}

loadCart();
