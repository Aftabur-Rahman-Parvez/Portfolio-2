/*------------Services-------------*/
$(function(){
	// Animate with Scroll
	new WOW().init();
});


/*-------------- magnificPopup-------- */
$(function(){
	$("#work").magnificPopup({
		delegate:'a',
		type:'image',
		gallery:{
			enabled:true
		}
	});
});


/*--- Owl-carousel  Team--------- */

$(function(){
	$("#team-members").owlCarousel({
		items:3,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true,
		responsive:{
			// breakpoint from 0 up
			0:{
				items:1
			},
			// breakpoint from 480p up
			480:{
				items:2
			},
			// breakpoint from 768p up
			768:{
				items:3
			}
		}

	});
});

/*--- Owl-carousel  Testimonial--------- */

$(function(){
	$("#customers-testimonials").owlCarousel({
		items:1,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true

	});
});

/*------Stats-----------*/

$(function(){
	$(".counter").counterUp({
		delay:10,
		time:2000
	});
});

/*---------Client-------------*/

$(function(){
	$("#client-list").owlCarousel({
		items:6,
		autoplay:true,
		smartSpeed:700,
		loop:true,
		autoplayHoverPause:true,
		responsive:{
			// breakpoint from 0 up
			0:{
				items:1
			},
			// breakpoint from 480p up
			480:{
				items:3
			},
			// breakpoint from 768p up
			768:{
				items:5
			},

			//breakpoint from 992p up
			992:{
				items:6
			}
		} 
	});
});

/* -------------Navigation------------- */

$(function(){
	$(window).scroll(function(){
		if($(this).scrollTop() < 50){
			$("nav").removeClass("vesco-top-nav");
			$("#back-to-top").fadeOut();
		}else{
			$("nav").addClass("vesco-top-nav");
			$("#back-to-top").fadeIn();
		}
	});
});

// Smooth scrolling

$(function () {

    $("a.smooth-scroll").click(function (event) {

        event.preventDefault();

        // get/return id like #about, #work, #team and etc
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});

// close mobile menu on click

$(function(){
	$(".navbar-collapse ul li a").on("click touch",function(){
		$(".navbar-toggle").click();
	})
});	