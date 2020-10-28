var vm = new Vue({
    el: "#app",
    data: {
        name: "name",
        phone: "phone"
    },
    methods: {
        ret: function () {
            ret();
        }
    }
})

function jump_photo() {

}
function jump_my() {
    console.log('你点击了我');
    location.href = "my.html"
}
function jump_history() {

}
function back() {
    console.log('你点击了我');
    //模拟一件登陆
    fetch('http://localhost:3000/login', {
        method: 'post',
        mode: 'cors',
        body: {
            "password": "123456",
            "name": "xie"
        },
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: 'include'
    }).then(
        function (response) {
            return response.json();
            console.log(response.json());
        }).then(function (data) {
            console(data);
        })

}


