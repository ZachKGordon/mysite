$(function(){

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var spot = this.hash;
      var $spot = $(spot);

      $('html, body').stop().animate({
          'scrollTop': $spot.offset().top
      }, 600, function () {
          window.location.hash = spot;
      });
  });
});
