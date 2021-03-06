import AOS from 'aos';

Template.home.onRendered (function() {
    // check inputs
    $(".form__input").focus(function(){
			$(this).addClass("in");
		});
		$(".form__input").focusout(function(){
			if($.trim($(this).val()) == ''){
		    $(this).removeClass('in')
		  }
     });

        // press  carousel

        $(".press-carousel").owlCarousel({
            items: 2,
            margin: 30,
            dots: true,
            responsive : {
                0 : {
                    items: 1,
                },
                768 : {
                    items: 2,
                }
            }
        });

        // news carousel

        $(".news-carousel").owlCarousel({
            items: 3,
            margin: 30,
            dots: true,
            responsive : {
                0 : {
                    items: 1,
                },
                768 : {
                    items: 2,
                },
                992 : {
                    items: 3,
                }
            }
        });

        /*/ timer

        var countDownDate = new Date("Jun 20, 2018 15:37:25").getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="timer"
            $("#timer").html("<div class='timer__item'><div class='timer__value'>" + days + "</div><div class='timer__item-title'>Days</div></div> <div class='timer__item'><div class='timer__value'>" + hours + "</div><div class='timer__item-title'>Hours</div></div> <div class='timer__item'><div class='timer__value'>"
            + minutes + "</div><div class='timer__item-title'>Minutes</div></div> <div class='timer__item'><div class='timer__value'>" + seconds + "</div><div class='timer__item-title'>Seconds</div></div>");

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                $("#timer").html("EXPIRED");
            }
        }, 1000);
				//Timer End */

         // counter up values
        $('.counter').countUp({
            'time': 2000,
            'delay': 10
        });

        $('.popup-youtube').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,

            fixedContentPos: false
        });

        // animation

        AOS.init({
			       disable: 'mobile',
             duration: 1000,
             once: true
		    });


        // scroll
        $('.menu__link, .footer-menu__link, .service__btn').on('click', function(event) {
			    var target = $(this.getAttribute('href'));
			    	if( target.length ) {
			        event.preventDefault();

			        $('html, body').stop().animate({
			            scrollTop: target.offset().top - 110
			        }, 1000);

			    	}
				});


        $('.mob-menu__link').on('click', function(event) {
			    var target = $(this.getAttribute('href'));
			    if( target.length ) {
			        event.preventDefault();
			        $('html, body').stop().animate({
			            scrollTop: target.offset().top - 100
			        }, 1000);
			        $('.fixed-menu').removeClass('open');
			    }
        });
});
