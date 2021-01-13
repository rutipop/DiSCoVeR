$(document).ready(function() {

  // $(document).tooltip({show: null});
  // $(document).tooltip({ show: { effect: "blind", duration: 800 } });
  // $('[data-toggle="tooltip"]').tooltip({ show: { effect: "blind", duration: 800 });
  // $('[data-toggle="tooltip"]').tooltip( delay: {show: 0, hide: 50}




  // Wrap every letter in a span
  var textWrapper = document.querySelector('.header-title1');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.header-title1 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 50 * i
    })

  // Wrap every letter in a span
  var textWrapper = document.querySelector('.header-title2');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.header-title2 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 100 * i
    })

  // Wrap every letter in a span
  var textWrapper = document.querySelector('.header-title3');
  textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

  anime.timeline({
      loop: false
    })
    .add({
      targets: '.header-title3 .letter',
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 1200,
      delay: (el, i) => 500 + 50 * i
    })



  // ---------------------------------------------------------------------------
  // SIDE NAV BAR:

  const btnOpen = document.querySelector('.btnOpen');
  const btnClose = document.querySelector('.btnClose');

  const btnLanguage = document.querySelector('#cur-language');
  // ---------------


  const tl = new TimelineMax({
    paused: true
  });

  tl.timeScale(1);

  tl
    // .to('h1', 0.3, {
    //     opacity: 0
    //   })
    //
    //   .to('p', 0.3, {
    //       opacity: 0
    //     })

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



$( "#cur-language" ).click(function() {
  $('.submenu').toggleClass('open-submenu');

});




  // ------------------------------------------------------------------------- //
  // ------------------------------------------------------------------------- //
  // ------------------------------------------------------------------------- //
  // ------------------------------------------------------------------------- //
  // LANGUAGES //

  var language = {
    en: {
      language_shortcut: "EN",
      welcome_msg: "hello"
    },

    he: {
      language_shortcut: "HE",
      welcome_msg: "shalom"
    },

    ru: {
      language_shortcut: "RU",
      welcome_msg: "privet"
    }


  }


  var languageButtons = document.querySelectorAll("[language-reload]");


  //set language according to button:
  for (i = 0; i < languageButtons.length; i++) {
    languageButtons[i].onclick = function() {
      var current_lang = this.id; // see the languge that was clicked

      if (current_lang === "english") {
        lang_hash = "#en"
      }
      if (current_lang === "hebrew") {
        lang_hash = "#he"
      }
      if (current_lang === "russian") {
        lang_hash = "#ru"
      }

      window.location.hash = lang_hash; // add propper hash
      location.reload(true);
    };
  }



  // set text according to hash selection:
  if (window.location.hash) {

    if (window.location.hash === "#en") {
      cur_language_name.textContent = language.en.language_shortcut;
    }
    else if (window.location.hash === "#he") {
      cur_language_name.textContent = language.he.language_shortcut;
    }
   else if (window.location.hash === "#ru") {
    cur_language_name.textContent = language.ru.language_shortcut;
  }



  }







});
