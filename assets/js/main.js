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
    
    $('#our-client-slider').owlCarousel({
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

















})