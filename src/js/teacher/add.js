// 首页需要头部功能，所以这里导入一下
require('../common/header.js');
require('../common/common.js');

$('#add_btn').on('click', function() {
    // var type = $('#tc_type').val();
    // var datas = [
    //     { "tc_name": $('#tc_name').val() },
    //     { "tc_join_date": $('#tc_join_date').val() },
    //     { "tc_type": type },
    //     { "tc_gender": $("input[name='tc_gender']").val() }
    // ];
    // var dataStr = $("#techer_list_add").serialize()

    // $.ajax({
    //     type: 'post',
    //     url: '/v6/teacher/add',
    //     data: $("#techer_list_add").serialize(),
    //     success: function(data) {
    //         if ($('#tc_type').val() == 0) {
    //             alert('无权限添加管理员，请重新添加！！');
    //             location.href = '/dist/html/teacher/add.html';
    //             return false;
    //         }
    //         if (data.code == 200) {
    //             // $("#techer_list_add").ajaxSubmit($("#techer_list_add").serialize());
    //             alert('添加成功');
    //             location.href = '/dist/html/teacher/list.html';
    //             return false;
    //         }
    //     }
    // });
    // return false;

    if ($('#tc_type').val() == 0) {
        alert('无权限添加管理员，请重新添加！！');
        location.href = '/dist/html/teacher/add.html';
        return false;
    } else {
        $('#techer_list_add').ajaxForm({
            delegation: true,
            success: function(data) {
                if (data.code == 200) {
                    alert('添加成功');
                    location.href = '/dist/html/teacher/list.html';
                }
            }
        });
    }
});