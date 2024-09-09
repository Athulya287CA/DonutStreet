
// Create a timeline
// var tl = gsap.timeline();

// // First animation: Move the image into position while rotating
// tl.from(".home-side img", {
//     x: 1300,
//     rotate: 360,
//     delay: 1,
//     duration: 2,
//     ease: "linear"
// });

// // Second animation: Keep the image rotating indefinitely
// tl.to(".home-side img", {
//     rotate: 360,
//     duration: 7,
//     repeat: -1, // Infinite repeat
//     ease: "linear"
// });
// gsap.from(".home-side img", {
//     scale: 0,
//     rotate: 360,
//     delay: 2,
//     duration: 2,
//     ease: "linear"
// })

gsap.from(".navbar .icon p", {
    opacity: 0,
    y:-10,
    delay: 1,
    duration: 0.5,
    stagger: 0.1, // Staggers the animation for each 'li' element
});
gsap.from(".navbar li", {
    opacity: 0,
    y:-10,
    delay: 1.5,
    duration: 0.5,
    stagger: 0.1, // Staggers the animation for each 'li' element
});


// about
gsap.from("#about .about-content p",{
    x:0,
    delay:0,
    opacity:0,
    stagger:1,
    scrub:2,
})
gsap.to("#about .about-gif",{
    x:1500,
    delay:0,
    duration:10,
    repeat:-1,
    rotate:360
})
gsap.to("#about .about-gif",{
    x:1500,
    delay:0.3,
    duration:10,
    repeat:-1,
})

// menu scroll
//copy the scroll trigger cdn
gsap.registerPlugin(ScrollTrigger);

gsap.to(".menu1", {
  xPercent: -240, // Move each .menu1 section horizontally
  ease: "none",
  scrollTrigger: {
    trigger: "#menu",        // Trigger the animation when #menu is in view
    start: "top top",        // Start when the #menu hits the top of the viewport
    end: "+=3000",           // The length of the scroll, adjust based on content
    scrub: 2,                // Smooth out the scroll-based animation
    pin: true,               // Pin the #menu while scrolling through it
    anticipatePin: 1         // Anticipate the pin to reduce jumps
  }
});

// gsap.to(".menu1", {
//     xPercent: -240,
//     ease: "none",
//     scrollTrigger: {
//         trigger: "#menu",
//         start: "top top",
        
//         scrub: 3,
//         pin: true,
//         anticipatePin: 1
//     }
// });




gsap.to(".home-side img",{
    width:"100%",
    
    ease: "slow(0.1,0.1,false)",
    stagger:2,
    delay:5,
    duration:1,
})
gsap.to(".home-main ",{
    width:"900px",
    delay:2,
    ease: "slow(0.1,0.1,false)",
    stagger:2,

    // ease:Expo.easeInOut,
    duration:2,
    stagger:1
})

gsap.from(".home-main p",{
    opacity:0,
    duration:1,
    delay:4,
    ease: "slow(0.1,0.1,false)",


})