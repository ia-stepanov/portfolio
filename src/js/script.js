// Libs
import './libs/jquery-3.6.1.min.js';

// Modules
import './modules/Background.js';
import './modules/Menu.js';
import './modules/Portfolio.js';

// Plugins
import './plugins/jquery.animateTyping.js';
import './plugins/jquery.simpleLoadMore.min.js';
import './plugins/jquery.anchorScroll.js';
import './plugins/jquery.showMore.js';
import './plugins/jquery.validate.min.js';

// AnchorScroll
var anchorScroll = $(document).AnchorScroll({
  target: 'a[data-link]',
});

// Simple Load More
$('.portfolio__wrapper.all').simpleLoadMore({
  item: '.portfolio__content',
  count: 8,
  itemsToLoad: window.innerWidth >= 600 ? 8 : 4,
  btnHTML: '<a href="#" class="portfolio__content-link btn">Еще проекты</a>',
});

// ShowMore.js
$(document).ready(function () {
  $('#test-last').showMore({
    minheight: 1024,
    buttontxtmore: '&#8595;',
    buttontxtless: '&#8593;',
    animationspeed: 750,
  });
});

// Modal
$('.modal__close').on('click', function () {
  $('.overlay, #thanks').fadeOut('fast');
});

// Validation Plugin
$('#contacts-form').validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
    },
    text: {
      required: true,
      minlength: 1,
    },
  },
  messages: {
    name: {
      required: 'Пожалуйста, введите ваше имя',
      minlength: jQuery.validator.format('Введите не менее {0} символов!'),
    },
    email: {
      required: 'Пожалуйста, введите вашу почту',
      email: 'Неправильно введен адрес почты',
    },
    text: {
      required: 'Пожалуйста, введите текст',
    },
  },
});

// Validation Submit Button
function handleSubmitBtn() {
  $('.contacts__btn').attr('disabled', 'disabled');

  $('#name,#email,#text').keyup(function (event) {
    var name = $('#name').val();
    var email = $('#email').val();
    var textarea = $('#text').val();

    if (name.length > 1 && email.length != 0 && textarea.length != 0) {
      $('.contacts__btn').removeAttr('disabled');
    } else {
      $('.contacts__btn').attr('disabled', 'disabled');
    }
  });
}
handleSubmitBtn();

// PHPMailer
$('form').submit(function (e) {
  e.preventDefault();
  $.ajax({
    type: 'POST',
    url: 'mailer/index.php',
    data: $(this).serialize(),
  }).done(function () {
    $(this).find('input').val('');
    $('.overlay, #thanks').fadeIn('fast');
    $('form').trigger('reset');
  });
  handleSubmitBtn();
  return false;
});

// Pageup
$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});
