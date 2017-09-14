// $('.navs ul').prev('a').on('click', function() {
//     $(this).next('ul').slideToggle();
// });
NProgress.start();
window.onload = function() {
    NProgress.done();
}

var isLogin = !!$.cookie('PHPSESSID');
var isLoginPage = (location.pathname == '/dist/html/user/login.html');
console.log(isLogin);
console.log(isLoginPage);

if (isLogin && isLoginPage) {
    location.href = '/dist'
} else if (!isLogin && !isLoginPage) {
    location.href = '/dist/html/user/login.html';
}


//ajax请求时，显示加载图片
var html = '<div class="overlay">' + '<img src="/public/img/loading.gif">' + '</div>'
$('body').append(html);

$(document).on('ajaxStart', function() {
    $('.overlay').show();
});
// $(document).ajaxStart;
$(document).on('ajaxStop', function() {
    $('.overlay').hide();
});