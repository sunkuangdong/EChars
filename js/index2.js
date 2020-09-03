// 柱状图2
(function () {
    let myChart = echarts.init(document.querySelector('.bar2 .chart'));
    let myColor = ['#1089E7', '#F57474', '#56D0E3', '#F8B448', '#8B78F6']
    let option = {
        grid: {
            left: '22%',
            top: '10%',
            bottom: '10%',
            // containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [{
                type: 'category',
                inverse: true,
                data: ['HTML5', 'CSS3', 'javaScript', 'VUE', 'NODE'],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#ffffff'
                }
            },
            {
                inverse: true,
                data: [702, 350, 610, 793, 664],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#ffffff'
                }
            }
        ],
        series: [{
                name: '条',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 10,
                itemStyle: {
                    barBorderRadius: 20,
                    color: function (params) {
                        return myColor[params.dataIndex]
                    }
                },
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 1,
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%'
                }
            },
            {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: 'none',
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                },
                data: [100, 100, 100, 100, 100]
            }
        ]
    };
    myChart.setOption(option)
    // 让图标自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();