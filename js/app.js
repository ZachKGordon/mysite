// var aVal, bVal

// var FizzBuzz = (function () {
//   var myFizzBuzz = function(aVal, bVal) {
//     myArray = [];
//     for(aVal; aVal <= bVal; aVal ++) {
//       if (aVal % 5 === 0 && aVal % 3 === 0) {
//         myArray.push("Hello");
//       } else if (aVal % 5 === 0) {
//         myArray.push("Goodbye");
//       } else if (aVal % 3 === 0) {
//         myArray.push("Farts");
//       }
//       else {
//         myArray.push(aVal);
//       }
//     }
//     return myArray;
//   };
//   myFizzBuzz(1, 20);
//   console.log(myArray);
// })();

// $(function(){


$(function(){

  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var spot = this.hash;
      var $spot = $(spot);

      $('html, body').stop().animate({
          'scrollTop': $spot.offset().top
      }, 700, function () {
          window.location.hash = spot;
      });
  });
});
