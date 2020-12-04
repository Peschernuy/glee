$(function(){


  $('.details-slide__thumb').slick({
    asNavFor: '.details-slide__big',
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false

  });
  $('.details-slide__big').slick({
    asNavFor: '.details-slide__thumb',
    draggable: false,
    arrows: false
  });






  $(".star").rateYo({

    starWidth: "12px", 
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    spacing: "15px"
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