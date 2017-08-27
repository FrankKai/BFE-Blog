Vue.component('show-picture', {
	template: '#picture',
})
Vue.component('one', {
	template: '#box-template-one',
})
Vue.component('two', {
	template: '#box-template-two',
})
Vue.component('three', {
	template: '#box-template-three',
})
Vue.component('four', {
	template: '#box-template-four',
})
var app = new Vue({
	el: '#app',
	data: {
		name: '高凯的前端小窝',
		time: '最后加载时间为：' + new Date(),
		todos: [{
				text: '我的简历'
			},
			{
				text: '前端学习'
			},
			{
				text: '业余爱好'
			},
			{
				text: '博客技术'
			}
		],
		seen: true
	},
	methods: {
		showPicture: function () {
			alert("Hello vue.js!")
		}
	}
})
$(".content>div").eq(0).addClass("active");
$(".sidebar li").click(function () {
	$(this).siblings().removeClass("active").end().addClass("active");
	var index = $(".sidebar li").index(this);
	$(".content>div").eq(index).siblings().hide();
	$(".content>div").eq(index).show();
})
