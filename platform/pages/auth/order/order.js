//创建vue实例，用于JS和HTML之间的交互渲染
var vm = new Vue({
    //绑定一个区域
    el: '#mypage',
    data: {

    },
    methods: {
        work: function() {
            toPage('work');
        },
        orderform: function() {
            toPage('order');
        },
		storeform: function(){
			toPage('store');
		},
        mypage: function() {
            toPage('person');
        }
		
    }
})