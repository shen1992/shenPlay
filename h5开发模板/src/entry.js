/**
 * Created by Administrator on 2016/4/30.
 */

(function () {

    //动态计算js的font-size
    ;(function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = (window.innerWidth <= 320) ? 320 : ((window.innerWidth >= 640) ? 640 : window.innerWidth);
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);


    var hello = require('./modal/hello');

    new hello();



   //引入sass
    require('../sass/index.scss');


})();

