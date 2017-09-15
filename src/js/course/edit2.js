// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
require('../common/common.js');

var util = require('../common/util.js');

var cs_id = util.getSearch("cs_id");
$.get('/v6/course/picture', { cs_id: cs_id }, function(data) {
    if (data.code == 200) {
        data.result.editIndex = 2;
        $('.course-add').append(template('course_edit2_tpl', data.result))
        initPlugin();
    }
});

// 不能以委托方式给上传图片绑定点击事件，初始化图片上传 这样会初始化多次了
// $('document').on('click', '#btn-uploadify', function() {
//     $('#uploadify').uploadify({
//         swf: '/lib/uploadify/uploadify.swf',
//         uploader: '/v6/uploader/avatar',
//         fileTypeExts: '*.gif; *.jpg; *.png'
//     });
// });
function initPlugin() {
    $('#uploadify').uploadify({
        swf: '/lib/jquery-uploadify/uploadify.swf', //这个是flash脚本，必须引入，不然无法选取文件
        uploader: '/v6/uploader/cover', //这个是上传图片的接口
        fileTypeExts: '*.gif; *.jpg; *.png', //这个用来限制上传图片的类型
        fileObjName: 'cs_cover_original', //这个用来设置提交文件时对应的name
        formData: {
            cs_id: cs_id
        },
        //设置文本
        buttonText: '上传',
        //设置类名
        buttonClass: 'btn btn-success btn-sm',
        onUploadSuccess: function(file, dataStr) {
            var data = JSON.parse(dataStr);
            $('.preview img').attr('src', data.result.path);
        }
    });
}



/**
 * 委托方式给裁剪图片绑定点击事件，初始化裁剪插件
 * */
$(document).on('click', '#btn-clip', function() {

    // 当裁剪插件初始化完毕后，会执行回调，回调中的this为插件实例，通过这个实例可以拿到一些的数据
    $('.preview img').Jcrop({
        aspectRatio: 2
    }, function() {
        window.J = this;
    });

});

/**
 * 委托方式给保存按钮绑定点击事件，点击时把裁剪的数据传送给后端
 * */
$(document).on('click', '#btn-slip-save', function() {

    var data = J.getSelection();
    data.cs_id = cs_id;
    $.post('/v6/course/update/picture', data, function(data) {
        alert('裁剪成功');
        location.href = '/dist/html/course/edit3.html?cs_id=' + cs_id;
    });

});