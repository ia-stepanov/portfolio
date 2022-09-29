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

// Validation Plugin
$('.contacts-form').validate({
  rules: {
    name: {
      required: true,
      minlength: 2,
    },
    email: {
      required: true,
      email: true,
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
  },
});
