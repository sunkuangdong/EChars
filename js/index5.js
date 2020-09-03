// 饼状图1
(function () {
    let myChart = echarts.init(document.querySelector('.pie .chart'));
    let option = {
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            // 距离底部为0%
            bottom: "0%",
            // 小图标的宽度和高度
            itemWidth: 8,
            itemHeight: 8,
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            // 修改图例组件的文字为 12px
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "8"
            }
        },
        series: [{
            name: '年龄分布',
            type: 'pie',
            // 设置饼形图在容器中的位置
            center: ["50%", "40%"],
            //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
            radius: ['40%', '60%'],
            avoidLabelOverlap: false,
            // 不显示标签文字
            label: {
                show: false
            },
            // 不显示连接线
            labelLine: {
                show: false
            },
            data: [{
                    value: 1,
                    name: "0岁以下"
                },
                {
                    value: 4,
                    name: "20-29岁"
                },
                {
                    value: 2,
                    name: "30-39岁"
                },
                {
                    value: 2,
                    name: "40-49岁"
                },
                {
                    value: 1,
                    name: "50岁以上"
                }
            ],
        }]
    };

    myChart.setOption(option)
    // 让图标自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();