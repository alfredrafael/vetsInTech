$(document).ready(function () {
    
    /* For the sticky navigation */
    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
            offset: '60px;'
        });


    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });



    /* Animations on scroll */
    $('.--js-fade-in-animation-1').waypoint(function (direction) {
        $('.--js-fade-in-animation-1').addClass('animated fadeIn');
    }, {
            offset: '60%'
        });

    $('.--js-fade-in-animation-2').waypoint(function (direction) {
        $('.--js-fade-in-animation-2').addClass('animated fadeIn');
    }, {
            offset: '90%'
        });

    $('.--js-fade-in-animation-3').waypoint(function (direction) {
        $('.--js-fade-in-animation-3').addClass('animated fadeIn');
    }, {
            offset: '70%'
        });

    // MODAL TRICK ///////////////////////////////////////////////////////////////////////
    var modal = $('.modal');
    $('.show-modal').click(function () {
        if ($(this).hasClass('sara')) {
            $(".modal.sara").fadeIn();
        } else if ($(this).hasClass('wu')) {
            $(".modal.wu").fadeIn();
        } else if ($(this).hasClass('alfredo')) {
            $(".modal.alfredo").fadeIn();
        } else if ($(this).hasClass('phillip')) {
            $(".modal.phillip").fadeIn();
        } else if ($(this).hasClass('eric')) {
            $(".modal.eric").fadeIn();
        }
        else if ($(this).hasClass('drew')) {
            $(".modal.drew").fadeIn();
        } else if ($(this).hasClass('vincent')) {
            $(".modal.vincent").fadeIn();
        } else if ($(this).hasClass('julie')) {
            $(".modal.julie").fadeIn();
        } else if ($(this).hasClass('nick')) {
            $(".modal.nick").fadeIn();
        } else if ($(this).hasClass('matt')) {
            $(".modal.matt").fadeIn();
        } else if ($(this).hasClass('wilson')) {
            $(".modal.wilson").fadeIn();
        } else if ($(this).hasClass('martin')) {
            $(".modal.martin").fadeIn();
        } else if ($(this).hasClass('kelly')) {
            $(".modal.kelly").fadeIn();
        } else if ($(this).hasClass('austin')) {
            $(".modal.austin").fadeIn();
        } else if ($(this).hasClass('stacy')) {
            $(".modal.stacy").fadeIn();
        } else if ($(this).hasClass('jorge')) {
            $(".modal.jorge").fadeIn();
        } else if ($(this).hasClass('leon')) {
            $(".modal.leon").fadeIn();
        } else if ($(this).hasClass('will')) {
            $(".modal.will").fadeIn();
        }

    });

    $('.close-modal').click(function () {
        modal.fadeOut();
    });

    // MODAL TRICK ENDS ///////////////////////////////////////////////////////////////////////


    // Basic initialization is like this:
    // $('.your-class').slick();

    // I added some other properties to customize my slider
    // Play around with the numbers and stuff to see
    // how it works.
    $('.slick-carousel').slick({
        infinite: true,
        slidesToShow: 3, // Shows a three slides at a time
        slidesToScroll: 2, // When you click an arrow, it scrolls 1 slide at a time
        arrows: true, // Adds arrows to sides of slider
        dots: true, // Adds the dots on the bottom

    });



});