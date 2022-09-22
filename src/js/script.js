// Modules
import './modules/jquery-3.6.1.min.js';
import './modules/three.min.js';
import './modules/vanta.waves.min.js';
import './modules/Menu.js';

// Plugins
import './modules/plugins/jquery.animateTyping.js';
import './modules/plugins/jquery.anchorScroll.js';

// Animated 3D Background
VANTA.WAVES({
  el: '#promo',
  color: 0x5080,
});

// AnchorScroll
var anchorScroll = $(document).AnchorScroll({
  target: 'a[href^="#"]',
  // speed: 1000,
  // offset: 20,
  // easing:"linear"
});
