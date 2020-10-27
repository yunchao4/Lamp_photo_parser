//创建vue实例，用于JS和HTML之间的交互渲染
var vm = new Vue({
    //绑定一个区域
    el: '#mypage',
    data: {
        username: null,
        password: null
    },
    methods: {
        //返回上一页
        ret: function() {
            ret()
        },
        //刷新
        refresh: function() {
            refresh()
        },
        //前往注册
        reg: function() {
            toPage('reg')
        },
        //登录
        login: function() {
            if (this.username == null) {
                window.alert('username is empty');
                return;
            }
            //判断密码是否小于六位
            if (this.password == null || parseInt(this.password.length) < 6) {
                window.alert('password is not correct');
                return;
            }
            //TODO: 后端校验

            toFolderPage('auth', 'work')

        }
    }
})