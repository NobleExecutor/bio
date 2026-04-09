const loader = document.getElementById("loader");

gsap.to("#loader", {
    opacity: 0,
    delay: 1.2,
    duration: .25
});

setTimeout(() => {
    loader.style.display = "none";
}, 1450);