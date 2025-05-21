gsap.from(".nav-items",{
    y:-50,
    opacity:0,
    delay:0.3,
    duration: 1,
    stagger: 0.2
})
gsap.from("h1", {
    x: -500,
    opacity: 0,
    delay: 0.4,
    duration: 1,
    stagger: 0.2
})
gsap.from(".img-container", {
    x:100,
    opacity: 0,
    rotate: 45,
    delay: 0.2,
    duration: 0.6,
    stagger: 0.5
})