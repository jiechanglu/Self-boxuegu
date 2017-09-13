// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
// console.log($('input[cs_id]').val());
// $.post('/v6/course/create', { cs_name: $('input[cs_name]').val() }, function(data) {
//     if (data.code == 200) {
//         alert('创建成功');
//         location.href = '/dist/html/course/edit1.html?cs_id' + data.result.cs_id;
//         location.href = '/dist/html/course/edit1.html';
//         return false;
//     }
// });

$('#course_add_form').ajaxForm({
    data: { cs_name: $('input[cs_name]').val() },
    delegation: true,
    success: function(data) {
        if (data.code == 200) {
            alert('创建成功');
            location.href = '/dist/html/course/edit1.html?cs_id' + data.result.cs_id;
            // location.href = '/dist/html/course/edit1.html';
            return false;
        }
    }
});