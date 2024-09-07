$(document).ready(function(){
    //hero slider
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items:1,
        dots:false,
        smartSpeed: 1000,
        navText : ['ANT','SIG'],
        responsive:{
            0:{
                nav: false,
            },
            768:{
                nav: true,
            },
        }
    })
});


//slider imagenes servicios
$('#project-slider').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    margin:24,
    smartSpeed: 1000,
    responsive:{
        0:{
            items:1,
            nav:false,
            margin:0,
        },
        768:{
            items: 2,
        },
        1140:{
            items:2,
            center: true,
            dots: true,
        }
    }
});

$('.owl-carousel'). owlCarousel({
    loop:true,
    margin:10,
    nav: false,
    dots: true,
    items: 1,
    smartSpeed:800,
});