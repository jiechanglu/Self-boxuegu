// 首页需要头部功能，所以这里导入一下
require('../common/header.js');

$.get('/v6/category', function(data) {
    $('.table').append(template('tex-tel', data.result));
});