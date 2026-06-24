// ==========================
// LOADER
// ==========================

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 500);

}, 1500);

});

// ==========================
// TYPING EFFECT
// ==========================

new Typed("#typing", {

strings: [

"AI/ML Engineer",
"Python Developer",
"Machine Learning Enthusiast",
"Problem Solver",
"Future Software Engineer"

],

typeSpeed: 70,
backSpeed: 40,
backDelay: 1500,
loop: true

});

// ==========================
// AOS ANIMATION
// ==========================

AOS.init({

duration: 1200,
once: true

});

// ==========================
// DARK / LIGHT MODE
// ==========================

const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

document.body.classList.toggle("light-mode");

if(document.body.classList.contains("light-mode")){

toggleBtn.innerHTML = "☀️";

}else{

toggleBtn.innerHTML = "🌙";

}

});

// ==========================
// PARTICLES JS
// ==========================

particlesJS("particles-js", {

particles: {

number: {
value: 80,
density: {
enable: true,
value_area: 800
}
},

color: {
value: "#00d4ff"
},

shape: {
type: "circle"
},

opacity: {
value: 0.5
},

size: {
value: 3
},

line_linked: {

enable: true,
distance: 150,
color: "#7c3aed",
opacity: 0.4,
width: 1

},

move: {

enable: true,
speed: 2

}

},

interactivity: {

detect_on: "canvas",

events: {

onhover: {
enable: true,
mode: "repulse"
},

onclick: {
enable: true,
mode: "push"
},

resize: true

}

},

retina_detect: true

});

// ==========================
// CURSOR GLOW EFFECT
// ==========================

const cursor = document.createElement("div");

cursor.classList.add("cursor-glow");

document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {

cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";

});

// ==========================
// NAVBAR ACTIVE LINK
// ==========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop;

if(pageYOffset >= sectionTop - 200){

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") === "#" + current){

link.classList.add("active");

}

});

});

// ==========================
// SCROLL TO TOP BUTTON
// ==========================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = "↑";

scrollBtn.id = "scrollTopBtn";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

if(window.scrollY > 300){

scrollBtn.style.display = "block";

}else{

scrollBtn.style.display = "none";

}

});

scrollBtn.addEventListener("click", () => {

window.scrollTo({

top: 0,
behavior: "smooth"

});

});
