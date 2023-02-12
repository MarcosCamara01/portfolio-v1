
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Menu
menuBtn.onclick = function () {
    navBar.classList.add("active");
    menuBtn.style.opacity = "0";
    menuBtn.style.pointerEvents = "none";
    body.style.overflow = "auto";
}

cancelBtn.onclick = function () {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
    body.style.overflow = "auto";
}

// Side Navigation Bar Close While We Click On Navigation Links
let navLinks = document.querySelectorAll(".nav-links li a");
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function () {
        navBar.classList.remove("active");
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
    });
}

// a href fix
let anchors = document.querySelectorAll('[anchor]');
[].forEach.call(anchors, function (anchor) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let el = document.querySelector(this.getAttribute('href'));
        // 50px down
        let top = el.getBoundingClientRect().top + window.scrollY - 50;
        window.scrollTo(0, top);
    });
});

// Text animation
var typed = new Typed(".auto-type", {
    strings: ["Programador Frontend", "Programador Backend", "Diseñador Web", "Freelancer"],
    typeSpeed: 150,
    backSpeed: 50,
    loop: true
})

// Google tag (gtag.js)
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', 'G-R40VMGWTQ8');
