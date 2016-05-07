/**
 * Created by Administrator on 2016/2/11 0011.
 */

define(function(require,exports,module) {
   var formObj = function (slector) {
       this.init(slector)
   };

    formObj.prototype = {

        init: function (slector) {
            this.initEvent(slector);
        },

        initEvent: function () {
            $(slector).on('click',function() {
                var data = {
                    tel:$('.phone').val(),
                    qq:$('.qq').val()
                }
                if(data.tel.length <= 0) {
                    $('.noAlert').show().html('请输入手机号！');
                    $('.mask').show();
                    return false;
                }
                if(! /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(data.tel)){
                    $('.noAlert').show().html('请输入正确的手机号！');
                    $('.mask').show();
                    return false;
                }
                if(data.qq.length < 5) {
                    $('.noAlert').show().html('请输入正确的QQ号！');
                    $('.mask').show();
                    return false;
                }
                if(!/^[0-9]*$/.test(data.qq) ) {
                    $('.noAlert').show().html('请输入正确的QQ号！');
                    $('.mask').show();
                    return false
                }

                $('.push-mask').show();

                $.ajax({
                    url:'http://fdyp.yuntumingzhi.cn/Index/index',
                    type:'GET',
                    dataType:'jsonp',
                    data:data,
                    success:function(data){

                        $('.push-mask').hide();

                        if(data.error == 0) {
                            $('.canAlert').show();
                            $('.mask').show();
                        }
                        //1是手机号重复
                        if(data.error == 1) {
                            $('.noAlert').show().html('该手机号码已提交过报名申请，请勿重复报名。');
                            $('.mask').show();

                        }
                        //2是qq号重复
                        if(data.error == 2) {
                            $('.mask').show();
                            $('.noAlert').show().html('该QQ号码已提交过报名申请，请勿重复报名。');
                        }
                    },
                    error:function(data){
                        console.log('发生异常!');
                        $('.push-mask').hide();
                    }
                });
            });
        }
    }
    return formObj;
});