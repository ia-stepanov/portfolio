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

// AnchorScroll
var anchorScroll = $(document).AnchorScroll({
  // target: 'a[href^="#"]',
  target: 'a[data-link]',
  // speed: 1000,
  // offset: 20,
  // easing:"linear"
});

// Simple Load More
$('.portfolio__wrapper.all').simpleLoadMore({
  item: '.portfolio__content',
  count: 8,
  itemsToLoad: window.innerWidth >= 600 ? 8 : 4,
  btnHTML:
    '<a href="#portfolio" class="portfolio__content-link btn" data-link>Еще проекты</a>',
});
