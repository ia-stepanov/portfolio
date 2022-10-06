// Libs
import './libs/jquery-3.6.1.min.js';

// Modules
import './modules/Background.js';
import './modules/Menu.js';
import './modules/Portfolio.js';
import './modules/Form.js';
import './modules/Privacy.js';

// Plugins
import './plugins/jquery.animateTyping.js';
import './plugins/jquery.anchorScroll.js';
import './plugins/jquery.simpleLoadMore.min.js';
import './plugins/jquery.showMore.js';
import tabs from './plugins/jquery.tabs.js';

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
    // minheight: 1024,
    buttontxtmore: '&#8595;',
    buttontxtless: '&#8593;',
    animationspeed: 750,
  });
});

// Modal
$('.modal__close').on('click', function () {
  $('.overlay, #thanks').fadeOut('fast');
});

// Pageup
$(window).scroll(function () {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

// jQuery Tabs
tabs('resume__nav', 'resume__elem_active', 'resume__column');
tabs('skills__nav', 'skills__elem_active', 'skills__item');
tabs('portfolio__nav', 'portfolio__item_active', 'portfolio__wrapper');
