// gsap.registerPlugin(ScrollTrigger);
// // REVEAL //
// gsap.utils.toArray(".revealUp").forEach(function (elem) {
//   ScrollTrigger.create({
//     trigger: elem,
//     start: "top 80%",
//     end: "bottom 20%",
//     markers: true,
//     onEnter: function () {
//       gsap.fromTo(
//         elem,
//         { y: 100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeave: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     },
//     onEnterBack: function () {
//       gsap.fromTo(
//         elem,
//         { y: -100, autoAlpha: 0 },
//         {
//           duration: 1.25,
//           y: 0,
//           autoAlpha: 1,
//           ease: "back",
//           overwrite: "auto"
//         }
//       );
//     },
//     onLeaveBack: function () {
//       gsap.fromTo(elem, { autoAlpha: 1 }, { autoAlpha: 0, overwrite: "auto" });
//     }
//   });
// });
// function scrollTrigger(selector, options = {}){
    // let els = document.querySelectorAll(selector)
//     els = Array.from(els)
//     els.forEach(el => {
//         addObserver(el, options)
//     })
// }

// function addObserver(el, options){
//     if(!('IntersectionObserver' in window)){
//         if(options.cb){
//             options.cb(el)
//         }else{
//             entry.target.classList.add('active')
//         }
//         return
//     }
//     let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
//         entries.forEach(entry => {
//             if(entry.isIntersecting){
//                 if(options.cb){
//                     options.cb(el)
//                 }else{
//                     entry.target.classList.add('active')
//                 }
//                 observer.unobserve(entry.target)
//             }
//         })
//     }, options)
//     observer.observe(el)
// }
// // Example usages:
// scrollTrigger('.intro-text')

// scrollTrigger('.scroll-reveal', {
//     rootMargin: '-200px',
// })

// scrollTrigger('.loader', {
//     rootMargin: '-200px',
//     cb: function(el){
//         el.innerText = 'Loading...'
//         setTimeout(() => {
//             el.innerText = 'Task Complete!'
//         }, 1000)
//     }
// })


/*INTRO TEXT WITH LETTERING JS*/

$(document).ready(function() {
    $(".intro-text").lettering('words').children("span").lettering(); 
    })