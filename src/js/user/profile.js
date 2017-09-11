// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
require('../common/aside.js');

//个人中心页面
$.ajax({
    url: '/v6/teacher/profile',
    type: 'post',
    success: function(data) {
        if (data.code == 200) {
            $('.teacher-profile').html(template('tex-tel', data.result));
        }
    }
});

/**
 * 表单提交：
 * 1、因为表单要进行数据回显，所以是动态异步创建出来的。
 * 我们这里要通过插件的ajaxForm监听表单提交事件必须使用委托的方式，插件提供了delegation选项配置为true即可。
 * 2、修改成功后给个用户提示
 * */
$('#teacher-profile-form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
        }
    }
});