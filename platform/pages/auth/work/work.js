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

// 1.基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mychart'));

// 2.指定图表的配置项和数据 放在option对象里面
var option = {
    title: {
        text: '销售额趋势'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["10月", "11月", "12月", "1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月"]
    },
    yAxis: {},
    series: [{
        name: '销售额',
        type: 'bar',
        data: [250, 750, 980, 300, 400, 300, 500, 900, 800, 300, 400, 600],
        barCategoryGap: "50%",
        itemStyle: {
            normal: {
                color: '#1890FF'
            }
        }
    }]
};
// 3.使用刚指定的配置项和数据 显示图表(将表显示到页面上)。
myChart.setOption(option);