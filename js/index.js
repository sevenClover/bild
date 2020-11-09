//柱状图模块1
(function () {
    //实例化对象
    var myChart = echarts.init(document.querySelector('.bar .chart'))
    //指定配置项
    var option = {
        color: ['#2f89cf'],
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        //修改图标大小
        grid: {
            left: "0%",
            top: "10px",
            right: "0%",
            bottom: "4%",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ["旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                //修改刻度标签  相关样式
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "8"
                },
                //不显示x坐标轴的样式
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                //y轴线改为2px
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)",
                        width: 2
                    }
                },
                //y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: '直接访问',
                type: 'bar',
                barWidth: '35%',
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    barBorderRadius: 5
                }
            }
        ]
    };
    //3.把配置项给实例对象
    myChart.setOption(option)
    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize()
    })
})();


//柱状图2
(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    var myChart = echarts.init(document.querySelector(".bar2 .chart"))
    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%",
            // containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: 'category',
                //反转
                inverse: true,
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                //不显示y轴的线
                axisLine: {
                    show: false
                },
                //不显示y轴的刻度
                axisTick: {
                    show: false
                },
                //把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                show: true,
                data: [702, 350, 610, 793, 664],
                inverse: true,
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 12,
                        color: "#fff"
                    }
                }
            }
        ],
        series: [
            {
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                //修改柱子的圆角
                itemStyle: {
                    barBorderRadius: 20,
                    //此时的color可以修改柱子的颜色
                    color: function (params) {
                        //params传进来的是柱子的对象
                        return myColor[params.dataIndex]
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    //{c}会自动的解析为data里面的数据
                    formatter: "{c}%"
                }
            },
            {
                name: '框',
                type: 'bar',
                data: [100, 100, 100, 100, 100],
                yAxisIndex: 1,
                barCategoryGap: 50,
                barWidth: 15,
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }

            }
        ],

    };
    myChart.setOption(option)
    //4.让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize()
    })

})();

//折线图
(function () {
    var myChart = echarts.init(document.querySelector(".line .chart"))
    var option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['新增粉丝', '新增游客'],
            textStyle: {
                color: "#4c9bfd",
            },
            right: '10%'
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '3%',
            show: true,// 显示边框
            borderColor: '#012f4a',// 边框颜色
            containLabel: true // 包含刻度文字在内
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisLabel: {
                color: "#4c9bfd"
            },
            axisTick: {
                show: false // 去除刻度线
            },
            axisLine: {
                show: false // 去除轴线
            },
            boundaryGap: false  // 去除轴内间距
        },
        yAxis: {
            type: 'value',
            axisTick: {
                show: false  // 去除刻度
            },
            axisLabel: {
                color: '#4c9bfd' // 文字颜色
            },
            splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
        },
        color: ['#00f2f1', '#ed3f35'],
        series: [
            {
                name: '新增粉丝',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            },
            {
                name: '新增游客',
                type: 'line',
                stack: '总量',
                smooth: true,
                data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            },

        ]
    };
    myChart.setOption(option)
    window.addEventListener("resize", function () {
        myChart.resize()
    })

})();
//折线图2
(function () {
    var myChart = echarts.init(document.querySelector(".line2 .chart"))
    var option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            top: "0%",
            data: ['播放量', '转发量'],
            color: "rgba(255,255,255,.5)",
            fontSize: "12",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: "12"
            }
        },
        grid: {
            left: "10",
            top: "30",
            right: "10",
            bottom: "10",
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "26", "28", "29", "30"],
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    },


                },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.2)"
                    }
                },

            }
        ],
        yAxis: [
            {
                type: 'value',
                axisTick: { show: false },
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgba(255,255,255,.6)",
                        fontSize: 12
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                //第一条 线是圆滑
                smooth: true,
                // 单独修改线的样式
                lineStyle: {
                    color: "#0184d5",
                    width: 2
                },
                // 填充区域
                areaStyle: {
                    // 渐变色，只需要复制即可
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1,
                        [
                            {
                                offset: 0,
                                color: "rgba(1, 132, 213, 0.4)"   // 渐变色的起始颜色
                            },
                            {
                                offset: 0.8,
                                color: "rgba(1, 132, 213, 0.1)"   // 渐变线的结束颜色
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
                name: '播放量',
                type: 'line',
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
                            [
                                {
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
            },


        ]
    };
    myChart.setOption(option)
    window.addEventListener("resize", function () {
        myChart.resize()
    })

})();
//饼图
(function () {
    var myChart = echarts.init(document.querySelector(".pie .chart"))
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
            data: ["0岁以下", "20-29岁", "30-39岁", "40-49岁", "50岁以上"],
            itemWidth: 10,
            itemHeight: 10,
            bottom: "0%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 12
            }
        },
        color: [
            "#065aab",
            "#066eab",
            "#0682ab",
            "#0696ab",
            "#06a0ab",
        ],
        series: [
            {
                name: "年龄分布",
                type: "pie",
                // 设置饼形图在容器中的位置
                center: ["50%", "40%"],
                //  修改内圆半径和外圆半径为  百分比是相对于容器宽度来说的
                radius: ["40%", "60%"],
                // 不显示标签文字
                label: { show: false },
                // 不显示连接线
                labelLine: { show: false },
                // emphasis: {
                //     label: {

                //         fontSize: '30',
                //         fontWeight: 'bold'
                //     }
                // },
                labelLine: {
                    show: false
                },
                data: [
                    { value: 1, name: "0岁以下" },
                    { value: 4, name: "20-29岁" },
                    { value: 2, name: "30-39岁" },
                    { value: 2, name: "40-49岁" },
                    { value: 1, name: "50岁以上" }
                ],
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener("resize", function () {
        myChart.resize()
    })

})();
//饼图2
(function () {
    var myChart = echarts.init(document.querySelector(".pie2 .chart"))
    var option = {
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {

            itemWidth: 10,
            itemHeight: 10,
            bottom: "3%",
            textStyle: {
                color: "rgba(255,255,255,.5)",
                fontSize: 12
            },
            data: ['云南', '北京', '山东', '河北', '江苏', '浙江', '四川']
        },
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        series: [
            {
                name: '面积模式',
                type: 'pie',
                radius: ["10%", "70%"],
                center: ['50%', '40 %'],
                roseType: 'radius',
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 连接扇形图线长
                    length: 6,
                    // 连接文字线长
                    length2: 8
                },
                data: [
                    { value: 20, name: '云南' },
                    { value: 26, name: '北京' },
                    { value: 24, name: '山东' },
                    { value: 25, name: '河北' },
                    { value: 20, name: '江苏' },
                    { value: 25, name: '浙江' },
                    { value: 30, name: '四川' },
                    { value: 42, name: '湖北' }
                ]
            }
        ]
    };
    myChart.setOption(option)
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();







