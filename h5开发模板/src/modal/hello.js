/**
 * Created by Administrator on 2016/4/30.
 */
define(function (require,exports,module) {

    var HelloObj = function () {
        this.init();
    }

    HelloObj.prototype = {
        init: function () {
            this.hello();
        },
        hello: function () {
            console.log('hello')
        }
    }

    return HelloObj;
    
})