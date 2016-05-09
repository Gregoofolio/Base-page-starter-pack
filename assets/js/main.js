jQuery(document).ready(function($) {
  
});

// ---------------------------
// Sticky Nav
/*
$(function StickyNav(){
  var top = $('.nav').offset().top ;

  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();
    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('.nav').addClass('fixed');
      $('.mobile-toggle').addClass('fixed-nav');
    } else {
      // otherwise remove it
      $('.nav').removeClass('fixed');
      $('.mobile-toggle').removeClass('fixed-nav');
    }
  });
});
*/


// ---------------------------
// Scroll to anchor 
/*
$(function scrollToSection() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

*/

// ---------------------------
// Sliders ex. testimonials
/* 
$(function testimonials(){
  $('.control-dot').first().addClass('active');
  $('.slider-unit').first().addClass('active');

  $('.control-dot').click(function(){
    var $this = $(this),
    $dotLength = $this.parent().children(),
    position = $dotLength.index($this);
    
    $('.control-dot').removeClass('active').eq(position).addClass('active');
    $('.slider-unit').removeClass('active').eq(position).addClass('active');
  });
});

*/
