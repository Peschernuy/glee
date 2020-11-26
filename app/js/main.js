$(function(){

  $('.top-slider__inner').slick({
    dots:true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  });

  var mixer = mixitup('.product__items',{
    selectors: {
       control: '.product__menu-link'
    }
  });
  var mixer = mixitup('.design__items', {
    selectors: {
      control: '.design__menu-link'
    }
  });

}); 