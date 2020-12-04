$(function(){

  $(".star").rateYo({

    starWidth: "12px", 
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00"
  });

  


  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
           $('.filter-price__from').text(data.from);
           $('.filter-price__to').text(data.to);

    },
    
  })

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