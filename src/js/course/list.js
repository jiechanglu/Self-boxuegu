// 首页需要头部功能，所以这里导入一下
require('../common/header.js');

//请求图片
$.get('/v6/course', function(data) {
    $('.courses').html(template('course_list_tpl', data.result));
});