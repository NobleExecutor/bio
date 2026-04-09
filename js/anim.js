gsap.registerPlugin(ScrollTrigger);

gsap.from(".about-wrapper", {
    duration: 1,
    x: -1500,
    opacity: 0,
    scrollTrigger: {
        trigger: "#about",
        start: "top 70%"
    },
    ease: "power2.out"
});

const educationTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#education",
        start: "top 70%"
    }
});

educationTl.from(".education-container", {
    duration: 0.6,
    y: 1000,
    opacity: 0,
    scale: 0.2,
    ease: "power2.out"
});

educationTl.from(".education-item", {
    x: -60,
    opacity: 0,
    duration: 0.8,
    stagger: 0.3,
    ease: "power2.out"
});

const projectsTl = gsap.timeline({
    scrollTrigger: {
        trigger: "#projects",
        start: "top 70%",
    }
});

projectsTl.from(".projects-card", {
    y: 100,
    opacity: 0,
    duration: .6,
    stagger: .3
});

gsap.from(".contact-container", {
    opacity: 0,
    scale: 0,
    duration: .4,
    scrollTrigger: {
        trigger: "#contact",
        start: "center 70%"
    },
    ease: "power2.out"
});

if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
    const cursorDot = document.querySelector(".cursor-dot");
    const cursorRing = document.querySelector(".cursor-ring");
    const interactiveElements = document.querySelectorAll("a, button, .project-media, .projects-card");

    gsap.set([cursorDot, cursorRing], { xPercent: -50, yPercent: -50 });

    window.addEventListener("mousemove", (e) => {
        gsap.to(cursorDot, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.12,
            opacity: 1,
            ease: "power2.out",
            overwrite: "auto"
        });

        gsap.to(cursorRing, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.8,
            opacity: 1,
            ease: "power3.out",
            overwrite: "auto"
        });
    });

    document.addEventListener("mouseleave", () => {
        gsap.to([cursorDot, cursorRing], {
            opacity: 0,
            duration: 0.2,
            overwrite: "auto"
        });
    });

    document.addEventListener("mouseenter", () => {
        gsap.to([cursorDot, cursorRing], {
            opacity: 1,
            duration: 0.2,
            overwrite: "auto"
        });
    });

    interactiveElements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            document.body.classList.add("cursor-hover");

            gsap.to(cursorDot, {
                scale: 0.6,
                duration: 0.2,
                overwrite: "auto"
            });

            gsap.to(cursorRing, {
                scale: 1.7,
                duration: 0.25,
                ease: "power2.out",
                overwrite: "auto"
            });
        });

        element.addEventListener("mouseleave", () => {
            document.body.classList.remove("cursor-hover");

            gsap.to(cursorDot, {
                scale: 1,
                duration: 0.2,
                overwrite: "auto"
            });

            gsap.to(cursorRing, {
                scale: 1,
                duration: 0.25,
                ease: "power2.out",
                overwrite: "auto"
            });
        });
    });
}
