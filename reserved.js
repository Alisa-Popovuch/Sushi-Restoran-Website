gsap.from('.menu', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.from('.mobile', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.to('h1', {
    text: 'RESERVE YOUR SPOT',
    duration:2,
    delay:2,
    ease:'power.in',
})
gsap.from('#first', {x:-100, opacity:0, duration:3, delay:4, stagger:2})
gsap.from('#second', {x:-100, opacity:0, duration:3, delay:5, stagger:2})
gsap.from('#third', {x:-100, opacity:0, duration:3, delay:6, stagger:2})
gsap.from('#four', {x:-100, opacity:0, duration:3, delay:7, stagger:2})
gsap.from('.select', {x:-100, opacity:0, duration:2, delay:8, stagger:2})
gsap.from('.btn', {delay:9, opacity:0, duration:2, rotation:180})
gsap.from('.footer', {y:-100, opacity:0, duration:2, delay:10, stagger:2})