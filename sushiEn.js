document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
        cx = window.innerWidth/2,
        cy = window.innerHeight/2
    body.addEventListener('mousemove', e => {
        clientX = e.pageX,
        clientY = e.pageY
        request = requestAnimationFrame(updateMe)
        mouseCoords(e);
        cursor.classList.remove('hidden');
        follower.classList.remove('hidden');
    })
    function updateMe() {
        dx = clientX - cx
        dy = clientY - cy
        tiltx = dy/cy
        tilty = dx/cx
        radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2))
        degree = radius * 12
        gsap.to('.content', 1, {transform:`rotate3d(${tiltx}, ${tilty}, 0, ${degree}deg)`})
    }
})
gsap.from('.menu', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.from('.mobile', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.from('.picture', {opacity:0, delay:2, scale:2, duration:2})
gsap.to('h1', {
    text: 'Craving sushi?',
    duration:3,
    delay:3,
    ease:'power.in',
})
gsap.to('p', {
    text: 'Get sushi delivery to your door and enjoy a $0 delivery fee on your first order.',
    duration:3,
    delay:4,
    ease:'power.in',
})
gsap.from('.btn', {delay:6, opacity:0, duration:2, rotation:180})
gsap.from('.footer', {delay:7, opacity:0, duration:2, stagger:2})

    

