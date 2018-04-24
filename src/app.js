const css = require('./app.scss');
require('bootstrap');
window.AOS = require('aos');
AOS.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-out-sine',
    delay: 100,
});
