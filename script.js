$('.slider').slick({
    slidesToShow: 3,
    dots:true,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover:true,
    // fade:true
    lazyLoad:'ondemand',
    dots:true,
  responsive:[{
      breakpoint:769,
      settings:{
          slidesToShow:2
      },
    },{
        breakpoint:577,
        settings:{
            slidesToShow:1,
            fade:true,
            arrows:false
        }
  }]






  });

  