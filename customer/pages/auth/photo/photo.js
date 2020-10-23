var vm = new Vue({
    el: '#app',
    data: {
        type: '',
        size: '',
        color: ''
    },
    methods: {
        onTypeChange: function (event) {
            //console.log(event.target.value);
            _this = this
            _this.type = event.target.value;
            var sizeSelect = document.getElementById("sizes");
            var colorSelect = document.getElementById('colors');
            switch (_this.type) {
                case 'custom':
                    sizeSelect.disabled = false;
                    colorSelect.disabled = false;
                    break;
                case 'id':
                    sizeSelect.disabled = true;
                    colorSelect.disabled = true;
                    sizeSelect.value = 'small'
                    colorSelect.value = 'white'
                    break;
                case 'drive':
                    sizeSelect.disabled = true;
                    colorSelect.disabled = true;
                    sizeSelect.value = 'normal'
                    colorSelect.value = 'white'
                    break;
                case 'passport':
                    sizeSelect.disabled = true;
                    colorSelect.disabled = true;
                    sizeSelect.value = 'large'
                    colorSelect.value = 'white'
                    break;
            }
        },
        capture: function () {
            var sizeSelect = document.getElementById("sizes");
            var colorSelect = document.getElementById('colors');
            size = sizeSelect.value;
            color = colorSelect.value;
            //TODO: 调用摄像头

            //TODO: 写入照片表
            toPage('pay')
        }
    }
})