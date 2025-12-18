// Product Data (Simulated Database)
const i=[{id:1,name:"Lumina Sound Pro",i:199,t:"assets/headphones.png",description:"Experience pure silence with our top-tier noise-canceling headphones.",category:"Audio"},{id:2,name:"Chronos Lite",i:129.5,t:"assets/smartwatch.png",description:"Track your life with style. 7-day battery life and health monitoring.",category:"Wearables"},{id:3,name:"KeyFlow 60",i:89.99,t:"assets/keyboard.png",description:"Compact mechanical keyboard with satisfying tactile feedback.",category:"Peripherals"},{id:4,name:"AirMouse Ergo",i:49.99,t:"assets/mouse.png",description:"Ergonomic wireless mouse designed for productivity.",category:"Peripherals"},{id:5,name:"EchoDot Speaker",i:59.99,t:"assets/speaker.png",description:"360-degree sound in a compact, portable design.",category:"Audio"},{id:6,name:"FlexStand Aluminum",i:34,t:"assets/stand.png",description:"Adjustable aluminum stand for smartphones and tablets.",category:"Accessories"},{id:7,name:"ZenBuds Pro",i:149,t:"assets/earbuds.png",description:"True wireless earbuds with active noise cancellation.",category:"Audio"},{id:8,name:"GlowLamp One",i:45,t:"assets/lamp.png",description:"Smart ambient lighting for your workspace.",category:"Home"},{id:9,name:"PowerCore 20k",i:39.99,t:"assets/powerbank.png",description:"High-capacity portable charger for all your devices.",category:"Accessories"},{id:10,name:"VisionPro VR",i:299,t:"assets/vr_headset.png",// Fallback image for video poster
o:"assets/producto3.mp4",// Existing video asset
description:"Immersive VR headset compatible with PC and Console.",category:"Gaming"}];
// App State
let t=JSON.parse(localStorage.getItem("cart"))||[];
// DOM Elements
const e=document.querySelector(".gallery");// Will target the new container
const a=document.getElementById("searchInput");
// Initialization
document.addEventListener("DOMContentLoaded",()=>{if(window.location.pathname.includes("carrito.html")){
// Cart page logic is separate in current structure, but we can unify utils later
}else{o(i)}n()});
// Render Function
function o(e){const a=document.querySelector(".gallery");if(!a)return;a.innerHTML=e.map(e=>`
    <article class="product-card fade-in">
      <div class="media-container">
        ${e.o?`<video src="${e.o}" poster="${e.t}" muted loop playsinline hover-play></video>`:`<img src="${e.t}" alt="${e.name}" loading="lazy" width="300" height="300">`}
      </div>
      <div class="details">
        <span class="category">${e.category}</span>
        <h3>${e.name}</h3>
        <p class="price">$${e.i.toFixed(2)}</p>
        <button onclick="addToCart(${e.id})" class="add-btn">
          Agregar al carrito
        </button>
      </div>
    </article>
  `).join("");
// Attach hover listeners for video
document.querySelectorAll('video[hover-play]').forEach(e=>{e.parentElement.addEventListener('mouseenter',()=>e.play());e.parentElement.addEventListener('mouseleave',()=>{e.pause();e.currentTime=0})})}
// Search Logic
function s(){const a=document.getElementById("searchInput").value.toLowerCase();const e=i.filter(e=>e.name.toLowerCase().includes(a)||e.description.toLowerCase().includes(a));o(e)}
// Cart Logic
function r(a){const e=i.find(e=>e.id===a);if(!e)return;t=JSON.parse(localStorage.getItem("cart"))||[];t.push(e);localStorage.setItem("cart",JSON.stringify(t));c(`${e.name} agregado al carrito!`);n()}function n(){const e=document.getElementById("cart-count");if(e)e.innerText=t.length}
// UI Utilities
function c(e){const a=document.createElement("div");a.className="toast";a.innerText=e;document.body.appendChild(a);setTimeout(()=>{a.classList.add("show");setTimeout(()=>{a.classList.remove("show");setTimeout(()=>a.remove(),300)},2e3)},100)}