$(function(){


  $('.details-tabs__top-item').on('click', function (e){
    
    e.preventDefault();
    $('.details-tabs__top-item').removeClass('details-tabs__top-item--active');
    $(this).addClass('details-tabs__top-item--active');

    $('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
    $($(this).attr('href')).addClass('details-tabs__content-item--active');

  });


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



  $('.select-style').styler();


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

  $('.details-realted__items').slick({
    arrows: true,
    draggable: true,
    slidesToShow: 4,
    slidesToScroll: 4
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