// $('.navs ul').prev('a').on('click', function() {
//     $(this).next('ul').slideToggle();
// });

var isLogin = !!$.cookie('PHPSESSID');
var isLoginPage = (location.pathname == '/dist/html/user/login.html');
console.log(isLogin);
console.log(isLoginPage);

if (isLogin && isLoginPage) {
    location.href = '/dist'
} else if (!isLogin && !isLoginPage) {
    location.href = '/dist/html/user/login.html';
}