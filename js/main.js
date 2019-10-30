$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 25,
    breakpoints: {
    	0: {
    		initialSlide: 1,
    		slidesPerView: 1,
    	},
		  600: {
		    slidesPerView: 2,
    		initialSlide: 0,
		  },
		  1100: {
		    slidesPerView: 3,
    		initialSlide: 0,
		  }
		},

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.arrow_right',
      prevEl: '.arrow_left',
    },
  });

  var scroll = new SmoothScroll('a[href*="#"]');

  $('.burger').on('click', function() {
  	$('.header__left').addClass('show');
  });

  $('.burger-close, .header__left a').on('click', function() {
  	$('.header__left').removeClass('show');
  });

  $('.null-transform.flying').removeClass('null-transform');
  $(document).on('scroll', function() {
  	if ($(window).scrollTop() + $(window).height() >= $('.cost').offset().top + $('.cost').innerHeight()) {
	  	$('.flying-2').removeClass('null-transform');
		}
		else if ($(window).scrollTop() + $(window).height() < $('.cost').offset().top) {
			$('.flying-2').addClass('null-transform');
		}			
	});

  var clientScroll;

  $('.header__call, .footer__call').on('click', function() {
	  if (!$('.get').hasClass('show')) {
	  	$('.get__spec').hide();
	  	$('.get').addClass('show');
	  	$('.overlay').addClass('show');
	  	$('.get__submit').text('Заказать звонок');
	  	$('.get__header h2').text('Оставьте свои данные и я перезвоню!');
      clientScroll = $(window).scrollTop();
	  	$('body, html').addClass('stop-scrolling').css('top' , -clientScroll);
	  }
	});

  $('.examples__order').on('click', function() {
  	$('.get__spec').show();
  	$('.get').addClass('show');
  	$('.overlay').addClass('show');
  	$('.get__submit').text('Заказать проект');
  	$('.get__header h2').text('Расскажите о проекте и я свяжусь с вами!');
    clientScroll = $(window).scrollTop();
  	$('body, html').addClass('stop-scrolling').css('top' , -clientScroll);
  })

  $('.overlay, .get__header span').on('click', function() {
  	$('.get').removeClass('show');
  	$('.overlay').removeClass('show');
  	$('body, html').removeClass('stop-scrolling').css('top', 'unset').scrollTop(clientScroll);
  });

  function validateEmail(email)	{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
	}

  $('.get__tel-input').mask('+7 (000) 000-00-00');
  $('.get').submit(function(e) {
  	e.preventDefault();
  	if (!validateEmail($('.get__email-input').val())) {
  		console.log('Email is unvalid (:');
  	}
  	$('.get').removeClass('show');
  	$('.overlay').removeClass('show');
  	$('.get input').val('');
    $('body, html').removeClass('stop-scrolling').css('top', 'unset').scrollTop(clientScroll);

    $('.we-will-call-back').css('transform', 'translateX(0)');
    setTimeout(function() {
      $('.we-will-call-back').css('transform', 'translateX(100vw)');
    }, 6666);
  });

  $('.we-will-call-back').on('click', function() {
    $('.we-will-call-back').css('transform', 'translateX(100vw)');
  })
});
