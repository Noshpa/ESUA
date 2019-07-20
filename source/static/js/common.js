'use strict';
    //====================================
    //--------- Functions ----------------
    //====================================

    //= functions/debounce.js
    //= functions/miss-click.js
    //= functions/responsive-iframe.js

$(document).ready(function () {
    //====================================
    //--------- Custom Scripts -----------
    //====================================

    //= ../../components/sidebar/sidebar.js
    //= ../../components/slick/slick.js
    //= ../../components/scroll/scroll.js
    //= ../../components/validate/validate.js
    //= ../../components/inputmask/inputmask.js
    //= ../../components/perfect-scrollbar/perfect-scrollbar.js

    var resizeListener = debounce(function () {
        // Do something
    }, 200);
    window.addEventListener('resize', resizeListener);

    var scrollListener = debounce(function () {
        // Do something
    }, 200);
    window.addEventListener('scroll', scrollListener);


});


