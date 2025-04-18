$(function () {


  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('active');
    $('.menu__list-link').toggleClass('animation');
    // document.querySelector('body').classList.toggle('noscroll');
  });



  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector('header').classList.add('header-mini');
    } else {
      document.querySelector('header').classList.remove('header-mini');
    }
  }

  //parallax
  new Backpax(['.photo', '.top']);

  //animation
  AOS.init({
    disable: function () {
      let maxWidth = 1200;
      return window.innerWidth < maxWidth;
    },
    startEvent: 'DOMContentLoaded',
    offset: 100,
    delay: 200,
    duration: 1500,
  });

});

