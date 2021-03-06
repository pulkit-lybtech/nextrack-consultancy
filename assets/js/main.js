$(document).ready(() => {

     $(window).scroll(function () {
    var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("header.header").addClass("sticky");
        }
        else {
            $("header").removeClass("sticky");
        }
    })

    // our client slider 
    
    $('#our-client-slider, #our-client-slider1, #our-client-slider2').owlCarousel({
        loop:true,
        margin:16,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2050,
        dots: false,
        slideTransition: "ease",
        responsive:{
            0:{
                items:2
            },
            768:{
                items:3
            },
            991:{
                items:5
            }
        }
    })
   
   
    // testimonial slider 
    $('#testimonial-slider').owlCarousel({
        loop:true,
        margin:16,
        nav:false,
        autoplay: true,
        autoplayTimeout: 2050,
        dots: false,
        slideTransition: "ease",
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            991:{
                items:3
            }
        }
    })

    
    $(".btn-submit").click(function () {
        //Fetch form to apply custom Bootstrap validation
        var form = $(".form-check")
        // console.log($('#fileInput')[0].files[0]);
        if (form[0].checkValidity() === false)
        {
            event.preventDefault()
            event.stopPropagation()
        }
        form.addClass('was-validated')
    });

    var testSlider = $('.video-slider');
    testSlider.owlCarousel({
        items:1,
        merge:false,
        margin: 0,
        loop: false,
        video: true,
        width: 480,
        lazyLoad:true,
        // onTranslate: function() {
        //     $('.owl-video-wrapper').find('iframe').each(function() {
        //         this.click();
        //     });
        // }
        // videoHeight: 480,
    })


    $('#test-prev').click(function() {
        testSlider.trigger('prev.owl.carousel');
        testSlider.trigger('stop.owl.video');
        testSlider.find('iframe').each().click();

    })
    $('#test-next').click(function() {
        testSlider.trigger('next.owl.carousel');
        testSlider.trigger('stop.owl.video');
    })

    testSlider.on('changed.owl.carousel', function(event) {
        testSlider.trigger('stop.owl.video');

    })














})