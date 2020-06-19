/*
Template Name: Aramiku - Video Anime Streaming Website HTML Template
Author: CyineID
Author URI: https://cyine.id/
Version: 1.0
*/
(function ($) {
    "use strict"; // Start of use strict
    // Top navigation
    var lastScrollTop = 0;
    var $navbar = $('.navbar');
    var navbarHeight = $navbar.outerHeight();
    var movement = 0;
    var lastDirection = 0;

    function tema() {
        var tema_mode = window.localStorage.getItem('tema_mode');
        if (tema_mode == 'dark') {
            $('#tema').attr({
                'href': 'assets/css/aramiku-dark.css'
            });
            $('#checkbox1').attr('checked', true);
            $('#checkbox-value').text('Dark');
        } else {
            $('#tema').attr({
                'href': 'assets/css/aramiku.css'
            });
            $('#checkbox1').attr('checked', false);
            $('#checkbox-value').text('Light');
        }


        $("#checkbox1").on('change', function () {
            if ($(this).is(':checked')) {
                $(this).attr('value', 'Dark');
                $('#tema').attr({
                    'href': 'assets/css/aramiku-dark.css'
                });
                window.localStorage.setItem('tema_mode', 'dark');

            } else {
                $(this).attr('value', 'Light');
                $('#tema').attr({
                    'href': 'assets/css/aramiku.css'
                });
                window.localStorage.setItem('tema_mode', 'light');
            }

            $('#checkbox-value').text($('#checkbox1').val());
        });
    }

    // tema();
    // $.pjax({
    //     area: '#wrapper'
    // });

    // $(document).bind('pjax:render', function () {
    // $('#wrapper').attr();
    owlku();
    tema();
    // });

    // Toggle the side navigation
    $(document).on('click', '#sidebarToggle', function (e) {
        e.preventDefault();
        $("body").toggleClass("sidebar-toggled");
        $(".sidebar").toggleClass("toggled");
    });

    // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
    $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($window.width() > 768) {
            var e0 = e.originalEvent,
                delta = e0.wheelDelta || -e0.detail;
            this.scrollTop += (delta < 0 ? 1 : -1) * 30;
            e.preventDefault();
        }
    });

    // Category Owl Carousel
    function owlku() {
        const objowlcarousel = $('.owl-carousel-category');
        if (objowlcarousel.length > 0) {
            objowlcarousel.owlCarousel({
                responsive: {
                    0: {
                        items: 1,
                    },
                    600: {
                        items: 3,
                        nav: false
                    },
                    1000: {
                        items: 4,
                    },
                    1200: {
                        items: 8,
                    },
                },
                loop: true,
                lazyLoad: true,
                autoplay: true,
                autoplaySpeed: 1000,
                autoplayTimeout: 2000,
                autoplayHoverPause: true,
                nav: true,
                navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
            });
        }
    }

    owlku();
    // Login Owl Carousel
    const mainslider = $('.owl-carousel-login');
    if (mainslider.length > 0) {
        mainslider.owlCarousel({
            items: 1,
            lazyLoad: true,
            loop: true,
            autoplay: true,
            autoplaySpeed: 1000,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
        });
    }

    // Tooltip
    $('[data-toggle="tooltip"]').tooltip()

    // Scroll to top button appear
    $(document).on('scroll', function () {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Smooth scrolling using jQuery easing
    $(document).on('click', 'a.scroll-to-top', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('./sw.js')
            .then(function () {
                console.log('Service Worker Registered');
            });
    }

})(jQuery); // End of use strict