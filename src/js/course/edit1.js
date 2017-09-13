// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
var util = require('../common/util.js');

var cs_id = util.getSearch("cs_id");
$.get('/v6/course/basic', { cs_id: cs_id }, function(data) {
    $('.course-add').append(template('course_edit1_tpl', data.result))
});

// 学科二级联动：
// 1、因为整个数据回显是去动态构建的，所以通过委托的方式监听父级学科select的change事件
// 2、事件发生时获取所选顶级学科cg_id，调用接口获取对应 的子级学科列表
// 3、拿到数据后动态生成新的子级option进行替换
$(document).on('change', "#category_top_select", function() {
    //select的value就是用户所选的顶级学科cg_id
    var topCgid = $(this).val();

    //得用顶级学科cg_id获取对应子级学科列表
    $.get('/v6/category/child', { cg_id: topCgid }, function(data) {
        var html = '';
        var childList = data.result;
        if (data.code == 200) {
            //如果获取成功，则回显到子级选框中
            for (var i = 0; i < childList.length; i++) {
                html += '<option value="' + childList[i].cg_id + '">' + childList[i].cg_name + '</option>';
            }
        }
        //最后把拼接后的字符串回显到子级学科列表中
        $("#category_child_select").html(html);
    });
});

$('#course_update_form').ajaxForm({
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('修改成功');
            location.href = '/dist/html/course/edit2.html?cs_id=' + cs_id;
        }
    }
});