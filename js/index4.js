// 折线图2
(function () {
    let myChart = echarts.init(document.querySelector('.line2 .chart'));
    let option = {
        tooltip: {
            trigger: 'axis',

        },
        legend: {
            // 修饰图例文字的颜色
            // 修改图例组件 文字颜色
            textStyle: {
                top: "0%",
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            },
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
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
            // 修饰刻度标签的颜色
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
            },
            // 去除x坐标轴的颜色
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255.2)"
                }
            }
        }],
        yAxis: [{
            type: 'value',
            // 去除刻度
            axisTick: {
                show: false
            },
            // 修饰刻度标签的颜色
            axisLabel: {
                textStyle: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: 12
                },
            },
            // 去除x坐标轴的颜色
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255.1)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
        }],
        series: [{
                name: '邮件营销',
                type: 'line',
                // 是否让线条圆滑显示
                smooth: true,
                lineStyle: {
                    color: "#0184d5",
                    width: "3"
                },
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [{
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 8,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#0184d5",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            },
            {
                name: "转发量",
                type: "line",
                smooth: true,
                lineStyle: {
                    normal: {
                        color: "#00d887",
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0,
                            0,
                            0,
                            1,
                            [{
                                    offset: 0,
                                    color: "rgba(0, 216, 135, 0.4)"
                                },
                                {
                                    offset: 0.8,
                                    color: "rgba(0, 216, 135, 0.1)"
                                }
                            ],
                            false
                        ),
                        shadowColor: "rgba(0, 0, 0, 0.1)"
                    }
                },
                // 设置拐点 小圆点
                symbol: "circle",
                // 拐点大小
                symbolSize: 5,
                // 设置拐点颜色以及边框
                itemStyle: {
                    color: "#00d887",
                    borderColor: "rgba(221, 220, 107, .1)",
                    borderWidth: 12
                },
                // 开始不显示拐点， 鼠标经过显示
                showSymbol: false,
                data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            }
        ]
    };
    myChart.setOption(option)
    // 让图标自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    })
})();