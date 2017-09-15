// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
require('../common/aside.js');
require('../common/common.js');

//个人中心页面
$.ajax({
    url: '/v6/teacher/profile',
    type: 'post',
    success: function(data) {
        if (data.code == 200) {
            $('.teacher-profile').html(template('teacher-profile-tpl', data.result));
            initDate();
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
        console.log(data)
        if (data.code == 200) {
            alert('修改成功');
        }
    }
});

function initDate() {
    $('#birthday').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
        // startDate: new Date('2000 - 09 - 15'),
        // endDate: new Date('2030 - 09 - 15')
    });
    // .on('changeDate', function() {
    //     show = false;
    // });

    //加入日期
    $('#join_date').datepicker({
        language: 'zh-CN',
        format: 'yyyy-mm-dd',
    });

    //三级联动插件
    $('#region_container').region({
        url: '/lib/jquery-region/region.json'
    });

    //副文本编辑器,下面传一个文本框的id值就完整了
    CKEDITOR.replace('introduce', {
        //这里可以设置一些文本框属性值，如：width:600宽度
        // width: 600
    });
}

// function gotoDate(ev) {
//     // $(this).html(ev.date.getFullYear().toString() + " - " + (ev.date.getMonth() + 1).toString() + " - " + ev.date.getDate().toString());
//     datepicker.hide;
// }