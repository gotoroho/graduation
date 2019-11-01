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

  $('.burger').on('click', function() {
  	$('.header__left').addClass('show');
  });

  $('.burger-close, .header__left a').on('click', function() {
  	$('.header__left').removeClass('show');
  });

  var clientScroll;

  $('.header__call, .footer__call').on('click', function() {
	  if (!$('.get').hasClass('show')) {
	  	$('.get__spec').hide();
	  	$('.get, .overlay').addClass('show');
	  	$('.get__submit').text('Заказать звонок');
	  	$('.get__header h2').text('Оставьте свои данные и я перезвоню!');
      clientScroll = $(window).scrollTop();
	  	$('body, html').addClass('stop-scrolling').css('top' , -clientScroll);
	  }
	});

  $('.examples__order').on('click', function() {
  	$('.get__spec').show();
  	$('.get, .overlay').addClass('show');
  	$('.get__submit').text('Заказать проект');
  	$('.get__header h2').text('Расскажите о проекте и я свяжусь с вами!');
    clientScroll = $(window).scrollTop();
  	$('body, html').addClass('stop-scrolling').css('top' , -clientScroll);
  })

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

  $('.overlay, .get__header span').on('click', function() {
  	$('.get, .overlay').removeClass('show');
  	$('body, html').removeClass('stop-scrolling').css('top', 'unset').scrollTop(clientScroll);
  });

  $('.get').submit(function(e) {
  	e.preventDefault();

  	$('.get, .overlay, .invalid').removeClass('show');
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
