// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
require('../common/aside.js');

$.get("/v6/category", function(data) {
    if (data.code == 200) {
        $('#category-top-select').html(template('select-tpl', data.result));
    }
});

$("#category-add-form").ajaxForm(
    function(data) {
        if (data.code == 200) {
            alert('创建成功');
        }
    }
);