document.querySelectorAll('.links a[href^="#"]').forEach((link) => {
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
    });
});
