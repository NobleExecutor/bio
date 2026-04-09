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