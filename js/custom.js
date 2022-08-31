$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    navigation : false,
    nav:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2.2,
        },
        992:{
            items:3
        }
    }
})
$( document ).ready(function() {
      $(".navbar-toggler").click(function(){
        $("header").toggleClass( "menu-show");
      });
});