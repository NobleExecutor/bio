const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll('.links a[href^="#"]');

menuToggle?.addEventListener("click", () => {
    const isOpen = header.classList.toggle("menu-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const target = document.querySelector(link.getAttribute('href'));
        if (!target) return;

        let offset = -(window.innerHeight / 2) + (target.offsetHeight / 2);

        if (target.id === "projects") {
            offset = 0;
        }

        window.lenis.scrollTo(target, {
            offset,
            duration: 1.2
        });

        header.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
    });
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        header.classList.remove("menu-open");
        menuToggle?.setAttribute("aria-expanded", "false");
    }
});
