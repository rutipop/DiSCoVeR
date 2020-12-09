$(document).ready(function() {


  // Wrap every letter in a span
  var textWrapper = document.querySelector('.header-title');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.header-title .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 30 * i
    })



// ---------------------------------------------------------------------------
// SIDE NAV BAR:

  const btnOpen = document.querySelector('.btnOpen');
  const btnClose = document.querySelector('.btnClose');


  // ---------------


  const tl = new TimelineMax({
    paused: true
  });

  tl.timeScale(1);

  tl.to('h1', 0.3, {
      opacity: 0
    })

    .to('p', 0.3, {
        opacity: 0
      })

    .to(btnOpen, 0.5, {
      x: -300,
      opacity: 0,
      ease: Power2.easeInOut,
    }, '-=0.5')

    .to('ul', 0.5, {
      x: 0,
      ease: Power2.easeInOut,
    }, '-=0.5')

    .to(btnClose, 0.5, {
      x: 0,
      opacity: 1,
      rotation: 360,
      ease: Power1.easeInOut,
    }, '-=0.5')


    .staggerFrom('li', 0.2, {
      opacity: 0,
      x: 70,
      ease: Back.easeOut,
    }, 0.06, '-=0.18');


  // ---------------


  openMenu = () => tl.play();
  closeMenu = () => tl.reverse();

  btnOpen.addEventListener('click', openMenu, false);
  btnClose.addEventListener('click', closeMenu, false);

});
