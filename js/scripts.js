(function($) {

    $(function() {

        $('.owl-1').owlCarousel({
    
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        smartSpeed: 2000,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ['<span class="ti-angle-left">', '<span class="ti-angle-right">']
        })
    
        
    })

    //======================
    // Mobile menu 
    //======================
    $('#mobile-menu-toggler').on('click', function(e) {
        e.preventDefault();
        $('.navbar-nav').slideToggle();
    })
    $('.has-menu-child').append('<i class="menu-dropdown ti-angle-down"></i>');
    
    if ($(window).width() <= 991) {
        $('.menu-dropdown').on('click', function() {
            $(this).prev().slideToggle('slow');
            $(this).toggleClass('ti-angle-down ti-angle-up')
        })
    }


}) (jQuery);

function myFunction() {
    var element = document.body;
    element.classList.toggle("body--dark");
 }

