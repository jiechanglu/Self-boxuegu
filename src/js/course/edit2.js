// 首页需要头部功能，所以这里导入一下
require('../common/header.js');

var util = require('../common/util.js');

var cs_id = util.getSearch("cs_id");
$.get('/v6/course/picture', { cs_id: cs_id }, function(data) {
    $('.course-add').append(template('course_edit2_tpl', data.result))
});