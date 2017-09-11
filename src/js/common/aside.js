//导航三个功能点：
// 1. 用户信息展示
// 2. 点击 标题子列表显示隐藏
// 3. 根据访问的页面添加对应的焦点；

var userinfoStr = localStorage.getItem('userinfo');
// console.log(userinfoStr);

var userinfo = JSON.parse(userinfoStr);
$('.aside img').attr('src', userinfo.tc_avatar);
$('.aside h4').text(userinfo.tc_name);

$('.navs a').on('click', function() {
    $(this).next('ul').slideToggle();

    $('.navs a').removeClass('active');
    $(this).addClass('active');

});
//获取当前页面的路径
var path = location.pathname;
//把获取到的路径替换到a标签的href属性中去；
$('.navs a[href="' + path + '"]').addClass('active').parents('ul').show();