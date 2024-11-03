gsap.from('.menu', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.from('.mobile', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.to('h1', {
    text: 'Rolls menu',
    duration:2,
    delay:2,
    ease:'power.in',
})
gsap.from('.one', {delay:3, duration:3, x:-400, ease:'power2.inOut', opacity:0})
gsap.from('.two', {delay:3, duration:3, x:400, ease:'power2.inOut', opacity:0})
gsap.from('.three', {delay:4, duration:3, x:-400, ease:'power2.inOut', opacity:0})
gsap.from('.four', {delay:4, duration:3, x:400, ease:'power2.inOut', opacity:0})
gsap.from('.five', {delay:5, duration:3, x:-400, ease:'power2.inOut', opacity:0})
gsap.from('.six', {delay:5, duration:3, x:400, ease:'power2.inOut', opacity:0})
gsap.from('.footer', {y:-100, opacity:0, duration:2, delay:6, stagger:2})