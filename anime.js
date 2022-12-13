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

function ScrollTrigger (revealUp)
function scrollTrigger(selector) {
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      addObserver(el)
    })
  }

  function addObserver(el){
    let observer = new IntersectionObserver((entries, observer) => { 
      entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add('active')
        observer.unobserve(entry.target)
      }
    })
  })
  observer.observe(el)
}
  // Example usage
  scrollTrigger('.scroll-reveal')
