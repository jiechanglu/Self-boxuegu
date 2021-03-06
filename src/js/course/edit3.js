// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
require('../common/common.js');
// /v6/course/lesson

var util = require('../common/util.js');

var cs_id = util.getSearch("cs_id");
$.get('/v6/course/lesson', { cs_id: cs_id }, function(data) {
    data.result.editIndex = 3;
    $('#course_edit3').append(template('course_edit3_tpl', data.result))
});

// $.get('/v6/course/chapter/edit', function(data) {
//     $('#chapterModal').html(template('course_info_tpl', data.result));
// });


/**
 * 编辑章节_数据回显：
 * 1、因为章节列表是动态生成的，所以需要通过委托的方式给编辑按钮绑定click事件
 * 2、事件触发时获取按钮身上自定义属性记录的ct_id，用来请求接口获取数据
 * 3、数据渲染模态框模版，插入到页面中
 * */

$(document).on('click', '.btn-lesson-edit', function() {
    var data = {
        ct_id: $(this).attr('data-id')
    };

    $.get('/v6/course/chapter/edit', data, function(data) {
        if (data.code == 200) {
            data.result.cs_id = cs_id; // 后端需要这个值来区分修改的章节属于那个课程
            $('#chapterModal').html(template('course_info_tpl', data.result));
        }
    });
});

// /**
//  * 添加章节_数据回显
//  * 1、因为页面是动态生成的，所以需要通过委托的方式给添加按钮绑定click事件
//  * 2、因为模态框中的内容做成了模版，所以使用一个空对象渲染模版，插入到页面中
//  * */
$(document).on('click', '#btn-lesson-add', function() {
    // 空对象中额外添加cs_id是因为后端需要这个值来区分修改的章节属于那个课程
    $('#chapterModal').html(template('course_info_tpl', { cs_id: cs_id }));
});

// /**
//  * 修改章节与添加章节：
//  * 1、因为在同一个页面中，修改与添加使用的是同一个form，这里一起就处理了
//  * 2、通过ajaxForm插件方法把表单默认刷新提交转ajax提交，因为form是动态生成的，所以要使用委托
//  * 3、请求成功后，通过判断服务器data.result来却分是修改还是添加，给用户不同的提示信息
//  * */
$('#lesson-form').ajaxForm({
    delegation: true,
    success: function(data) {

        // 添加成功后，给出提示，并重置表单
        if (data.result) {
            alert('添加成功');
            $('#lesson-form').get(0).reset();
        }

        // 修改成功后，给出提示
        else {
            alert('修改成功');
        }
    }
});