//创建vue实例，用于JS和HTML之间的交互渲染
var vm = new Vue({
    //绑定一个区域
    el: '#mypage',
    data: {
        oldpw: null,
        newpw: null,
        confirmpw: null
    },
    methods: {
        work: function() {
            toPage('work');
        },
        orderform: function() {
            toPage('order');
        },
        storeform: function () {
            toPage('store');
        },
        //修改密码
        showbox: function() {
            var _this = this;
            document.getElementById("popbox").style.visibility = "visible";
            document.getElementById("nav").style.filter = "blur(3px)";
            document.getElementById("topbar").style.filter = "blur(3px)";
            document.getElementById("index").style.filter = "blur(3px)";
        },
        closebox: function() {
            var _this = this;
            document.getElementById("popbox").style.visibility = "hidden";
            document.getElementById("mypage").style.filter = "none";
            refresh();
        },
        cancel: function() {
            var _this = this;
            document.getElementById("popbox").style.visibility = "hidden";
            document.getElementById("mypage").style.filter = "none";
            refresh();
        },
        confirm: function() {
            var _this = this;
            //原密码交去后端验证
            if (_this.oldpw == null) {
                window.alert("原密码不能为空");
                return;
            }

            //检测新密码合格性
            if (_this.newpw == null) {
                window.alert("新密码不能为空");
                return;
            } else if (_this.newpw.length < 6 || _this.newpw.length > 20) {
                console.log(_this.newpw.length);
                window.alert("密码长度不符合(6-20个字符)");
                return;
            }
            var pwdRegex = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z]).{6,20}');
            if (!pwdRegex.test(_this.newpw)) {
                window.alert("您的密码复杂度太低（密码中必须包含字母、数字），请重新输入");
                return;
            }
            //检测新密码与确认密码是否一致
            if (_this.newpw != _this.confirmpw) {
                window.alert("两次密码不一致");
                return;
            }
            //新密码送去数据库

            var _this = this;
            document.getElementById("popbox").style.visibility = "hidden";
            document.getElementById("mypage").style.filter = "none";
            refresh();
        }
    }
})