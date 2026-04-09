gsap.registerPlugin(ScrollTrigger);

window.lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.08
});

window.lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
    window.lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);