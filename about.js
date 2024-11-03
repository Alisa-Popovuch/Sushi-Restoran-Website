gsap.from('.menu', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.from('.mobile', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.from('.footer', {y:-100, opacity:0, duration:2, delay:1, stagger:2})
gsap.to('h1', {
    text: 'About Thynk Sushi',
    duration:2,
    delay:2,
    ease:'power.in',
})
gsap.to('p', {
    text: 'Our chefs start in the early morning each day taking the utmost pride and care in preparation for your arrival, to provide the most intimate and luxurious dining experience at Thynk Sushi. We hope our guests can appreciate this by respecting our booking times and policies, as the course cannot begin without all the guests seated, to prevent any interruptions during the dining experience and to prevent any unnecessary rush. It is for this reason also, that we must lock the doors 30 minutes after the booking time. We eagerly await your visit to Thynk Sushi and look forward to offering a memorable experience.',
    duration:15,
    delay:3,
    ease:'power.in',
})