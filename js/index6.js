// 饼状图2
(function () {
    let myChart = echarts.init(document.querySelector('.pie2 .chart'));
    let option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 8,
            itemHeight: 8,
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "8"
            }
        },
        series: [{
            name: '面积模式',
            type: 'pie',
            radius: ['10%', '70%'],
            center: ['50%', '40%'],
            roseType: "radius",
            // 文本标签控制饼形图文字的相关样式， 注意它是一个对象
            label: {
                fontSize: 10
            },
            // 引导线调整
            labelLine: {
                // 连接扇形图线长
                length: 6,
                // 连接文字线长
                length2: 8
            },
            data: [{
                    value: 20,
                    name: '云南'
                },
                {
                    value: 26,
                    name: '北京'
                },
                {
                    value: 24,
                    name: '山东'
                },
                {
                    value: 25,
                    name: '河北'
                },
                {
                    value: 20,
                    name: '江苏'
                },
                {
                    value: 25,
                    name: '浙江'
                },
                {
                    value: 30,
                    name: '四川'
                },
                {
                    value: 42,
                    name: '湖北'
                }
            ]
        }]
    };
    myChart.setOption(option)
    // 让图标自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();