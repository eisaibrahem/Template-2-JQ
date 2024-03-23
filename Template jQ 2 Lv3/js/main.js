$(function () {



    // $(this).addClass('active-shuffle').siblings().removeClass('active-shuffle');


    //  MixItUp Plugin
    // jQuery(function () {
    //     jQuery('#Container').mixItUp({
    //         targetSelector: '.item',
    //         transitionSpeed: 450
    //     });
    // });


    // Nice Scroll Plugin
    $(function () {
        $("html").niceScroll({
            cursorcolor: "var(--main-color)",//Change the scroll bar color,
            cursorwidth: '15px',
            background: '#aaa',
            cursorborder: "none"
        });;
    });

    $('.landing').height($(window).height());

    $(window).resize(function () {

        // ('html').height($(window).height());
    })



    $('.landing .icon-down').click(function () {

        $('body , html').animate({
            scrollTop: $('.features').offset().top
        }, 400);

        console.log('zzzzzzzzzzzzz');
    });



    $('.show-more').click(function () {
        console.log('zzzzzzzzzzzzzzzzzz');
        $('.our-works .hide').fadeIn();
    })


    // check Testionails

    let leftArrow = $('.testimonial .fa-chevron-left');
    let rightArrow = $('.testimonial .fa-chevron-right');

    function checkClients() {

        $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();

        $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
    }

    checkClients();


    $('.testimonial i').click(function () {
        if ($(this).hasClass('fa-chevron-right')) {

            $('.testimonial .active').fadeOut(0, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn();

                checkClients();
            })
        } else {
            $('.testimonial .active').fadeOut(0, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();

                checkClients();
            })
        }

    })

});