$(document).ready(function(){
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    initialSlide: 1,
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
		  600: {
		    slidesPerView: 2,
    		initialSlide: 0,
		  },
		  1100: {
		    slidesPerView: 3,
		  }
		},

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var scroll = new SmoothScroll('a[href*="#"]');

  $('.burger').on('click', function() {
  	$(this).css('transform', 'translateY(-100%');
  	$('.burger-close').css('transform', 'translateY(-100%');
  	$('.header__left').addClass('show');
  });

  function closeMenu() {
  	$('.burger').css('transform', 'translateY(0)');
  	$('.burger-close').css('transform', 'translateY(0)');
  	$('.header__left').removeClass('show');
  };

  $('.burger-close').on('click', closeMenu);
  $('.header__left a').on('click', closeMenu);

  $('.null-transform.flying').removeClass('null-transform');
  $(document).on('scroll', function() {
  	if ($(window).scrollTop() + $(window).height() >= $('.cost').offset().top + $('.cost').innerHeight()) {
	  	$('.flying-2').removeClass('null-transform');
		}
		else if ($(window).scrollTop() + $(window).height() < $('.cost').offset().top) {
			$('.flying-2').addClass('null-transform');
		}			
	});

  function openForm() {
	  if (!$('.get').hasClass('show')) {
	  	$('.get__email').hide();
	  	$('.get').addClass('show');
	  	$('.overlay').addClass('show');
	  	$('.get__submit').text('Заказать звонок');
	  }
	};

  $('.header__call').on('click', openForm);

  $('.footer__call').on('click', openForm);

  $('.examples__order').on('click', function() {
  	$('.get__email').show();
  	$('.get').addClass('show');
  	$('.overlay').addClass('show');
  	$('.get__submit').text('Заказать проект');
  })

  $('.overlay').on('click', function closeOverlay() {
  	$('.get').removeClass('show');
  	$('.overlay').removeClass('show');
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
  });
});
