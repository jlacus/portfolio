

$(document).ready(function() {

  $('#responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,

    responsive: [
      {
        breakpoint:1280,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },

      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});






// $('#toggle').click(function() {
//    $(this).toggleClass('active');
//    $('#overlay').toggleClass('open');
//   });
// $('#toggle1').click(function() {
//    $(this).toggleClass('active');
//    $('#overlay1').toggleClass('open');
//   });
// $("#toggle").click(function(){
//     $("body").toggleClass("lock");
// });
// $("#toggle1").click(function(){
//     $("body").toggleClass("lock");
// });


// });
// $(window).on('scroll', function() {
//   var scrollPos = $(this).scrollTop();
//   ////////////////////////////////////////////////////////////////////////////////////
//   // HEADER
//   ////////////////////////////////////////////////////////////////////////////////////
//   if (scrollPos >= (500) && !$('#secondaryHeader').hasClass('scrolled')) {
//     $('#secondaryHeader').addClass('scrolled').removeClass('remove');
    
//   } else if (scrollPos < (500) && $('#secondaryHeader').hasClass('scrolled')) {
//     $('#secondaryHeader').removeClass('scrolled').addClass('remove');

//   }
// });


// $(function() {
//     $('body').loadie();

//     var percent = 1;
//     $('body').loadie(percent); // Insert your percent as params.
//   })

// var percent = 0.50;
// $('body').loadie(percent);