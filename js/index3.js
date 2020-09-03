// 折线图1
(function () {
    let myChart = echarts.init(document.querySelector('.line .chart'));
    let option = {
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            // 修改图例组件 文字颜色
            textStyle: {
                color: "#4c9bfd"
            }
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true,
            borderColor: "#012f4a",
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 去除x坐标轴的颜色
            axisLine: {
                show: false
            },
            // 去除轴间距
            boundaryGap: false,
        },
        yAxis: {
            type: 'value',
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                color: "#4c9bfd"
            },
            // 修改y轴分割线的颜色
            splitLine: {
                lineStyle: {
                    color: "#012f4a"
                }
            }
        },
        series: [{
                name: "新增粉丝",
                type: 'line',
                // 是否让线条圆滑显示
                smooth: true,
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120]
            },
            {
                name: '联盟广告',
                type: 'line',
                // 是否让线条圆滑显示
                smooth: true,
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            }
        ]
    };
    myChart.setOption(option)
    // 让图标自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();