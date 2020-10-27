// 创建Vue 实例，用于JS与HTML之间的交互渲染
var vm = new Vue(
    {
        //绑定哪一个区域
        el:'#app',
        data:{
            usernameInput : null,
            passwordInput : null,
        },
        //该区域用到的函数
        methods:{
            reg:function() {
              toPage('reg')
            },
            //登录
            login:function() {
                //判断你的用户名有没有填写
                if(this.usernameInput === null || this.usernameInput === ''){
                    window.alert('用户名必须填写');
                    return;
                }
              //判断手机号码不规范
              var check=/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
                if (!check.test(this.usernameInput)){
                    window.alert('请输入正确用户名');
                    return;
                }
                //判断你的密码有没有填写
                if(this.passwordInput === null || this.passwordInput === ''){
                    window.alert('密码必须填写');
                    return;
                }
                //判断密码是否小于六位
                if(parseInt(this.passwordInput.length)<6){
                    window.alert('请输入6位以上密码');
                    return;
                }
                
                window.alert('登录成功');
                toPageByFolder('auth', 'photo');
            }
        }
    }
)