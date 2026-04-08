const BackToTop = document.getElementById("backtotop");

BackToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        BackToTop.style.opacity = "1";
        BackToTop.style.pointerEvents = "auto";
    } else {
        BackToTop.style.opacity = "0";
        BackToTop.style.pointerEvents = "none";
    }
});