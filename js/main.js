$(document).ready(function(){
  $('.null-transform.flying').removeClass('null-transform');
  $('.get__tel-input').mask('+7 (000) 000-00-00');

  let costHeight = $('.cost').offset().top + $('.cost').innerHeight();
  $(document).on('scroll', function() {
    let userScroll = $(window).scrollTop() + $(window).height();
    if (userScroll >= costHeight) {
      $('.flying-2').removeClass('null-transform');
    }
    else if (userScroll < $('.cost').offset().top) {
      $('.flying-2').addClass('null-transform');
    }     
  });

  if ($(window).width() < 1100) {
    $('.header__left a, .burger-close').attr('tabindex', '-1');
  }

  $('.burger').on('click', function() {
  	$('.header__left').addClass('show');
    $('a, button, .swiper-pagination-bullet').attr('tabindex', '-1');
    $('.header__left a, .burger-close').attr('tabindex', 0);
  });

  $('.burger-close, .header__left a').on('click', function() {
  	$('.header__left').removeClass('show');
    $('a, button, .swiper-pagination-bullet').attr('tabindex', '0');
    $('.header__left a, .burger-close').attr('tabindex', '-1');
  });

  var clientScroll;

  $('.header__call, .footer__call').on('click', function() {
  	$('.get__spec').hide();
  	$('.get__submit').text('Заказать звонок');
  	$('.get__header h2').text('Оставьте свои данные и я перезвоню!');
  	// $('.get, .overlay').addClass('show');
    // clientScroll = $(window).scrollTop();
  	// $('body, html').addClass('stop-scrolling').css('top' , -clientScroll);
    $('a, button, .swiper-pagination-bullet, .arrow').attr('tabindex', '-1');
    $('.get input, .get button').attr('tabindex', 0);
	});

  $('.examples__order').on('click', function() {
  	$('.get__spec').show();
  	$('.get__submit').text('Заказать проект');
  	$('.get__header h2').text('Расскажите о проекте и я свяжусь с вами!');
  	// $('.get, .overlay').addClass('show');
   //  clientScroll = $(window).scrollTop();
  	// $('body, html').addClass('stop-scrolling').css('top' , -clientScroll);
    $('a, button, .swiper-pagination-bullet, .arrow').attr('tabindex', '-1');
    $('.get input, .get button').attr('tabindex', 0);
  });

  $("[data-fancybox]").fancybox({
    afterClose: function( instance, slide ) {
      $('a, button, .swiper-pagination-bullet, .arrow').attr('tabindex', '0');
      $('.get input, .get button').attr('tabindex', '-1');
      if ($(window).width() < 1100) {
        $('.header__left a, .burger-close').attr('tabindex', '-1');
      }
    }
  });

  function validateEmail(email)	{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
	}

  $('.get__submit').on('click', function(e) {

    if (!validateEmail($('.get__email-input').val()) && $('.get__spec').css('display') != 'none') {
      e.preventDefault();
      $('.invalid_email').addClass('show');
    } else {
      $('.invalid_email').removeClass('show');
    }

    if ($('.get__tel-input').val().length !== 18) {
      e.preventDefault();
      $('.invalid_tel').addClass('show');
    } else {
      $('.invalid_tel').removeClass('show');
    }

    if ($('.get__name-input').val() === '' || !/\S/.test($('.get__name-input').val())) {
      e.preventDefault();
      $('.invalid_name').addClass('show');
    } else {
      $('.invalid_name').removeClass('show');
    }
  });

  $('.get').submit(function(e) {
    let name = $('.get input[name=name]').val(),
        tel = $('.get input[name=tel').val(),
        email = $('.get input[name=email]').val(),
        type = $('.get input[name=type]').val(),
        time = $('.get input[name=time]').val(),
        extra = $('.get input[name=extra]').val();

    $.ajax({
      type: "POST",
      data: {
        'name': name,
        'tel': tel, 
        'email': email, 
        'type': type,
        'time': time, 
        'extra': extra,
      },
      url: 'send.php',
      success: showHELL,
    });

    return false;
  });

  function showHELL() {
    $('.get, .overlay, .invalid').removeClass('show');
    $('.get input').val('');

    $('a, button, .swiper-pagination-bullet, .arrow').attr('tabindex', '0');
    $('.get input, .get button').attr('tabindex', '-1');
    if ($(window).width() < 1100) {
      $('.header__left a, .burger-close').attr('tabindex', '-1');
    }

    $('.we-will-call-back').css('transform', 'translateX(0)');
    setTimeout(function() {
      $('.we-will-call-back').css('transform', 'translateX(100vw)');
    }, 6666);
  }

  $('.we-will-call-back').on('click', function() {
    $('.we-will-call-back').css('transform', 'translateX(100vw)');
  });

  // scrolling
  $('[href^="#"]').on('click', function(e) {
    let id = $(this).attr('href');
    id = id.slice(1, id.length);
    if (id == '') return;
    let offsetTop = $(`[id = ${id}`).offset().top;
    e.preventDefault();
    $('html, body').animate({
      'scrollTop': offsetTop
    }, 800);
  });
});
