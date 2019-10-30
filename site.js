$(function() {


  function init() {



    // Toggle bg colour on and off
    $('.colour-btn').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('sm-colour--on');
    })

    // Toggle bg colour on and off
    $('.sm-section-three-heading').on('click', function (e) {
      e.preventDefault();
      $('.sm-section-three-heading').toggleClass('grow');
    })

    // Toggle bg colour on and off
    $('.move-btn').on('click', function (e) {
      e.preventDefault();
      $('.sm-section-two').toggleClass('blink');
    })

    $('.pos-btn').on('click', function (e) {
      e.preventDefault();
      $('.content').toggleClass('letter-spacing');

    })
  }

  init();
});

