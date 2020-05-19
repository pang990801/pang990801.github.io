
// 柱状图1模块
(function () {
  // 实例化对象
  var myChart = echarts.init(document.querySelector(".bar .chart",),'dark');
  // 指定配置和数据
  var option = {
        backgroundColor: 'rgba(27,116,163,0.3)',
        title: {
            //text: '男女身高体重关系图',
        },
        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            containLabel: true
        },
        tooltip: {
            // trigger: 'axis',
            show: true,
            formatter: function(params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>' +
                       '身高：' + params.value[0] + 'cm ' +
                       '鞋码：' + params.value[1] + 'cm ';
                } else {
                    return params.seriesName + ' :<br/>' +
                        params.name + '：' +
                        params.value + 'cm ';
                }
            },
            axisPointer: {
                show: true,
                type: 'cross',
                lineStyle: {
                    type: 'dashed',
                    width: 1
                }
            }
        },
        toolbox: {
            feature: {
                dataZoom: {},
                brush: {
                    type: ['rect', 'polygon', 'clear']
                },
                saveAsImage: {}
            }
        },
        brush: {},
        legend: {
            textStyle: {
             color: '#fff',
               },
            data: ['女性', '男性'],
            left: 'center'
        },
        xAxis: [{
            name:"身高",
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} cm'
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: [{
            name:"鞋码",
            type: 'value',
            scale: true,
            axisLabel: {
                formatter: '{value} cm'
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
                name: '女性',
                type: 'scatter',
                symbolSize: 4,
                        itemStyle:{
              normal:{
                  color:'#ff4f3b'
              }
            },
                data: [[121.83, 15.6], [110.31, 17.52], [116.04, 18.64], [140.37, 19.21], [118.99, 19.32],
                    [114.59, 18.59], [114.01, 17.61], [106.25, 13.95], [100.26, 15.65], [98.43, 13.62],
                    [139.36, 19.3], [106.45, 14.7], [102.39, 15.35], [84.77, 13.03], [95.58, 13.01],
                    [88.07, 11.95], [95.45, 12.47], [100.13, 15.54], [117.45, 14.93], [106.04, 15.12],
                    [102.95, 13.69], [127.39, 17.88], [109.95, 16.49], [114.86, 14.64], [145.0, 23.61],
                    [96.13, 15.25], [124.65, 17.39], [137.65, 21.13], [151.98, 21.21], [109.25, 14.04],
                    [147.53, 20.98], [117.8, 17.26], [80.96, 12.27], [112.9, 16.12], [115.54, 17.16],
                    [138.28, 18.75], [147.1, 18.89], [117.64, 18.63], [145.03, 20.62], [113.47, 16.68],
                    [101.51, 16.8], [87.18, 13.34], [140.39, 19.65], [101.67, 14.48], [123.86, 16.93],
                    [150.65, 18.92], [92.46, 11.57], [86.73, 14.03], [130.94, 16.52], [141.99, 17.85],
                    [148.18, 18.53], [80.4, 11.67], [85.32, 13.95], [101.39, 14.82], [152.64, 22.02],
                    [125.34, 19.75], [102.11, 15.19], [109.21, 18.05], [107.27, 16.67], [100.17, 13.25],
                    [124.44, 17.04], [100.85, 13.94], [132.84, 18.25], [119.71, 19.52], [88.69, 11.86],
                    [129.51, 16.75], [126.13, 18.19], [102.79, 15.95], [125.96, 17.84], [110.84, 15.8],
                    [80.96, 10.34], [96.89, 13.15], [93.14, 13.08], [107.71, 15.34], [86.17, 12.1],
                    [91.68, 14.05], [85.93, 11.78], [94.41, 13.51], [113.57, 18.38], [92.4, 12.52],
                    [122.57, 18.04], [145.17, 22.23], [80.52, 10.52], [130.58, 20.35], [91.08, 12.52],
                    [145.24, 24.21], [116.52, 16.53], [94.79, 13.43], [96.44, 12.32], [131.66, 20.58],
                    [79.73, 10.08], [115.45, 17.54], [99.33, 15.05], [130.79, 18.7], [81.58, 11.02],
                    [109.22, 14.03], [113.22, 17.15], [115.85, 17.81], [112.98, 15.27], [111.78, 16.91],
                    [103.9, 16.27], [103.73, 14.2], [83.02, 10.98], [136.18, 17.32], [80.88, 12.58],
                    [148.11, 21.51], [114.84, 17.76], [121.59, 17.88], [124.87, 16.37], [132.64, 17.34],
                    [108.4, 17.25], [142.12, 21.31], [152.17, 21.6], [106.41, 15.82], [90.9, 13.5],
                    [152.78, 21.64], [146.6, 19.25], [87.14, 11.09], [97.49, 12.75], [149.46, 22.26],
                    [149.29, 23.87], [141.05, 20.34], [105.48, 14.3], [101.59, 16.6], [147.2, 23.04],
                    [133.28, 17.2], [120.57, 17.26], [141.58, 18.33], [121.72, 17.37], [133.54, 19.57],
                    [100.57, 13.32], [89.95, 12.54], [136.96, 17.59], [95.05, 14.4], [125.55, 16.0],
                    [106.88, 13.74], [96.34, 12.65], [146.07, 22.07], [126.85, 20.41], [132.71, 17.38],
                    [141.82, 20.0], [105.39, 16.75], [109.98, 17.02], [124.85, 20.75], [140.53, 19.5],
                    [85.83, 12.7], [102.56, 14.78], [134.3, 21.89], [152.31, 19.74], [152.45, 19.17],
                    [139.15, 21.9], [96.47, 12.16], [133.16, 19.05], [88.72, 11.73], [99.21, 15.58],
                    [122.43, 17.22], [147.62, 21.11], [86.47, 13.46], [123.65, 18.89], [121.01, 15.91],
                    [130.27, 18.37], [82.22, 10.43], [118.15, 17.59], [98.13, 15.09], [80.63, 12.92],
                    [151.06, 24.11], [135.76, 20.97], [132.25, 18.98], [149.34, 22.76], [123.61, 19.3],
                    [148.12, 23.85], [149.49, 19.65], [102.54, 14.4], [80.47, 11.09], [145.05, 22.59],
                    [144.99, 19.87], [120.94, 15.3], [124.85, 17.69], [90.01, 13.66], [132.86, 18.39],
                    [107.87, 15.1], [141.62, 18.58], [101.39, 14.38], [121.5, 17.21], [151.78, 21.19],
                    [82.62, 11.0], [114.73, 16.61], [101.02, 13.31], [81.35, 13.0], [131.83, 17.51],
                    [143.93, 18.46], [114.26, 16.44], [151.68, 23.59], [121.34, 16.48], [135.26, 18.06],
                    [146.15, 19.2], [129.54, 20.41], [116.71, 16.7], [144.13, 19.85]],
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        }
                    },
                    data: [
                        [{
                            name: '女性分布区间',
                            xAxis: 'min',
                            yAxis: 'min'
                        }, {
                            xAxis: 'max',
                            yAxis: 'max'
                        }]
                    ]
                },
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    },
                    data: [{
                            type: 'average',
                            name: '平均值'
                        },
                        {
                            xAxis: 115
                        }
                    ]
                }
            },
            {
                name: '男性',
                type: 'scatter',
                symbolSize: 4,
                        itemStyle:{
              normal:{
                  color:'#ffe01f'
              }
            },
                data: [[91.75, 13.65], [133.07, 19.75], [149.13, 19.82], [96.86, 13.05], [78.11, 10.26],
                    [149.54, 19.65], [142.85, 20.27], [86.2, 11.01], [88.24, 13.04], [128.53, 20.98],
                    [148.45, 22.24], [75.73, 11.36], [138.98, 17.69], [108.8, 14.9], [109.71, 16.66],
                    [79.49, 12.25], [106.26, 15.92], [148.15, 20.83], [81.87, 13.46], [111.0, 17.95],
                    [108.95, 15.72], [105.74, 14.7], [111.28, 15.78], [76.79, 12.33], [108.55, 14.64],
                    [108.31, 15.01], [124.59, 20.09], [102.64, 14.1], [119.04, 18.92], [96.77, 13.37],
                    [79.49, 13.18], [120.61, 19.29], [131.48, 18.76], [81.09, 12.04], [97.42, 15.95],
                    [122.27, 18.68], [145.93, 22.31], [89.28, 11.43], [92.16, 12.81], [132.1, 17.7],
                    [121.62, 18.4], [147.34, 19.86], [122.33, 19.71], [132.15, 21.94], [139.34, 18.84],
                    [94.56, 14.04], [140.89, 20.55], [127.97, 17.69], [106.21, 13.62], [95.7, 13.47],
                    [105.09, 15.14], [80.64, 11.54], [114.54, 15.17], [137.71, 19.35], [147.51, 19.27],
                    [90.23, 11.45], [112.62, 17.12], [79.96, 10.55], [117.87, 17.96], [126.59, 16.54],
                    [91.24, 14.11], [84.51, 12.8], [95.38, 12.35], [121.17, 16.23], [75.48, 11.49],
                    [92.97, 14.56], [141.5, 18.91], [111.85, 14.76], [83.53, 10.53], [138.66, 17.93],
                    [149.61, 23.33], [98.74, 13.73], [120.98, 16.4], [111.44, 18.13], [96.98, 13.43],
                    [105.05, 17.11], [110.16, 15.28], [125.47, 18.9], [133.44, 21.88], [80.92, 11.45],
                    [116.58, 16.02], [121.47, 15.88], [75.88, 12.53], [136.85, 20.57], [106.79, 13.54],
                    [142.17, 21.92], [147.1, 19.8], [131.12, 20.57], [147.76, 23.48], [118.93, 18.13],
                    [111.05, 16.42], [76.69, 9.74], [109.22, 14.8], [90.8, 11.72], [116.3, 15.58],
                    [102.84, 15.87], [141.71, 18.66], [91.47, 14.78], [106.03, 15.78], [103.45, 13.2],
                    [98.99, 16.18], [135.74, 21.67], [133.37, 22.11], [108.02, 13.91], [111.8, 17.32],
                    [110.62, 14.68], [82.06, 11.19], [128.6, 19.57], [84.12, 13.0], [105.82, 14.13],
                    [87.63, 11.04], [84.36, 10.88], [112.85, 16.55], [107.02, 14.83], [104.91, 14.57],
                    [89.71, 14.76], [106.53, 14.46], [93.92, 12.32], [95.7, 14.25], [90.7, 11.75],
                    [86.37, 10.82], [83.88, 11.71], [83.45, 10.68], [79.32, 11.55], [107.21, 16.16],
                    [122.39, 20.12], [95.91, 13.21], [85.8, 13.13], [129.44, 16.29], [110.45, 15.13],
                    [132.78, 17.81], [129.82, 16.52], [102.62, 13.52], [129.68, 16.28], [125.24, 17.33],
                    [103.44, 16.23], [142.13, 22.14], [86.46, 11.12], [77.78, 12.21], [83.71, 10.87],
                    [83.43, 10.83], [95.67, 14.8], [147.66, 19.69], [100.18, 13.73], [126.0, 18.68],
                    [128.02, 17.08], [87.52, 12.6], [98.49, 15.85], [140.8, 18.16], [93.19, 13.93],
                    [144.77, 19.08], [93.01, 11.84], [121.42, 15.29], [93.69, 13.71], [127.33, 17.21],
                    [119.03, 19.57], [88.11, 11.34], [136.32, 17.76], [119.72, 17.33], [92.37, 13.75],
                    [82.91, 10.81], [130.56, 16.36], [121.57, 15.4], [118.84, 16.7], [139.95, 21.53],
                    [141.26, 21.0], [138.41, 22.3], [111.44, 15.3], [141.61, 19.2], [149.61, 24.4],
                    [146.27, 22.41], [97.06, 12.22], [84.42, 11.71], [115.87, 15.69], [119.86, 15.43],
                    [148.5, 22.27], [140.45, 19.79], [95.39, 14.88], [126.88, 16.5], [121.5, 19.5],
                    [87.12, 14.46], [134.74, 18.32], [120.13, 17.34], [149.96, 19.6], [99.35, 13.39],
                    [102.27, 14.12], [80.83, 10.83], [148.94, 18.76], [88.62, 13.35], [87.49, 11.35],
                    [125.36, 20.19], [82.03, 10.47], [127.55, 18.18], [109.31, 15.46], [140.01, 18.93],
                    [103.57, 14.6], [132.06, 21.03], [103.64, 14.68], [138.11, 17.97]],
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        }
                    },
                    data: [
                        [{
                            name: '男性分布区间',
                            xAxis: 'min',
                            yAxis: 'min'
                        }, {
                            xAxis: 'max',
                            yAxis: 'max'
                        }]
                    ]
                },
                markPoint: {
                    data: [{
                            type: 'max',
                            name: '最大值'
                        },
                        {
                            type: 'min',
                            name: '最小值'
                        }
                    ]
                },
                markLine: {
                    lineStyle: {
                        normal: {
                            type: 'solid'
                        }
                    },
                    data: [{
                            type: 'average',
                            name: '平均值'
                        },
                        {
                            xAxis: 110
                        }
                    ]
                }
            }
        ]
    };

  // 把配置给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });

  // 数据变化
  var dataAll = [
    { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
    { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
  ];

  $(".bar h2 ").on("click", "a", function () {
    option.series[0].data = dataAll[$(this).index()].data;
    myChart.setOption(option);
  });
})();

// 折线图定制
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line .chart"),'dark');

  // (1)准备数据
  var colors = [{
     type: 'linear',
     x: 0,
     x2: 0,
     y: 0,
     y2: 1,
     colorStops: [{
         offset: 0,
         color: '#28f0f5'
     }, {
         offset: 0.5,
         color: '#16abaf'
     }, {
         offset: 0.5,
         color: '#16abaf'
     }, {
         offset: 1,
         color: '#077175'
     }]
 }, {
     type: 'linear',
     x: 0,
     x2: 0,
     y: 0,
     y2: 1,
     colorStops: [{
         offset: 0,
         color: '#0172e2'
     }, {
         offset: 0.5,
         color: '#0656c6'
     }, {
         offset: 0.5,
         color: '#0656c6'
     }, {
         offset: 1,
         color: '#0f299a'
     }]
 }];
 var barWidth = 25;
 option = {
                backgroundColor: 'rgba(33,64,112,0.3)',
     tooltip: {
         trigger: 'item',
     },
     legend: {
         right: 30,
         textStyle: {
             color: '#fff',
         },
     },
     xAxis: [{
         type: 'category',
         axisLine: {
             lineStyle: {
                 color: '#65C6E7'
             }
         },
         axisLabel: {
             fontSize: 14
         },
         data: [6, 7, 8, 9, 10, 11, 12, 13, 14],
     }],
     yAxis: [{
         type: 'value',
         min: 12,
         splitLine: {
             lineStyle: {
                 color: '#65C6E7'
             }
         },
         splitNumber: 5,
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
            formatter:'{value} cm',
             color: '#65C6E7'
         },


     }, {
         type: 'value',
         splitLine: {
             show: false
         },
         axisLine: {
             show: false
         },
         axisTick: {
             show: false
         },
         axisLabel: {
             fontSize: 14,
             color: '#65C6E7'
         }
     }],
     series: [{
             z: 1,
             name: '女生脚长（cm）',
             type: 'bar',
             barWidth: barWidth,
             data: [18.55, 20.24, 21.01, 20.34, 20.83, 21.29, 21.83, 22.36, 22.66],
             itemStyle: {
                 normal: {
                     color: colors[0]
                 },
             }
         }, {
             z: 3,
             type: 'pictorialBar',
             symbolPosition: 'end',
             data: [18.55, 20.24, 21.01, 20.34, 20.83, 21.29, 21.83, 22.36, 22.66],
             symbol: 'diamond',
             symbolOffset: [-12.5, '-50%'],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderColor: '#12bac1',
                     borderWidth: 2,
                     color: '#12bac1'
                 }
             },
         },
         {
             z: 1,
             name: '男生脚长（cm）',
             type: 'bar',
             barGap: 0,
             barWidth: barWidth,
             data: [18.27, 19.76, 20.61, 20.01, 20.75, 21.32, 21.98, 22.69, 23.16],
             itemStyle: {
                 normal: {
                     color: colors[1]
                 }
             }
         },
         {
             z: 3,
             type: 'pictorialBar',
             symbolPosition: 'end',
             data: [18.27, 19.76, 20.61, 20.01, 20.75, 21.32, 21.98, 22.69, 23.16],
             symbol: 'diamond',
             symbolOffset: [12.5, '-50%'],
             symbolSize: [barWidth - 4, (10 * (barWidth - 4)) / barWidth],
             itemStyle: {
                 normal: {
                     borderColor: '#319cf1',
                     borderWidth: 2,
                     color: '#319cf1'
                 }
             },
         },
         {
             name: '女生脚长与男生脚长之差',
             type: 'line',
            yAxisIndex: 1, //使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
            smooth: true, //平滑曲线显示
            showAllSymbol: true, //显示所有图形。
            symbol: "circle", //标记的图形为实心圆
            symbolSize: 10, //标记的大小
            itemStyle: {
                //折线拐点标志的样式
                color: "#3deaff"
            },
            lineStyle: {
                color: "#3deaff"
            },
               areaStyle: { //区域填充样式
                normal: {
                 //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                   color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
					   { offset: 0,  color: 'rgba(61,234,255, 0.6)'},
					   { offset: 0.7,  color: 'rgba(61,234,255, 0.1)'}
				   ], false),

                 shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                 shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
             }
         },
             data: [0.28, 0.48, 0.4, 0.33, 0.08, -0.03, -0.15, -0.33, -0.5]
         }
     ]
 }
  // 3. 把配置和数据给实例对象
  myChart.setOption(option);

  // 重新把配置好的新数据给实例对象
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 饼形图定制
// 折线图定制

// 学习进度柱状图模块
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".bar1 .chart"),'dark');

  option = {
                backgroundColor: 'rgba(33,64,112,0.3)',
    color: ['#FF69B4', '#4169E1', '#ec4863'],

    title: [{
        left: '1%',
        top: '6%',
        textStyle: {
            color: '#fff'
        }
    }, {
        text: '过胖脚与过瘦脚占比',
        left: '83%',
        top: '6%',
        textAlign: 'center',
        textStyle: {
            color: '#fff'
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        right: '30%',
        textStyle: {
            color: '#fff',
        },
        data: ['男生脚胖瘦度', '女生脚胖瘦度']
    },
    grid: {
        left: '1%',
        right: '35%',
        top: '16%',
        bottom: '6%',
        containLabel: true
    },
    toolbox: {
        "show": false,
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        name:'BMI',
        type: 'category',
        boundaryGap: false,
        data: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    },
    yAxis: {
        name:"                                 脚胖瘦度（脚长/脚宽）",
        min:20,

        splitLine: {
            show: true,
        },
        type: 'value'
    },
    series: [{
        name: '女生脚胖瘦度',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
      	lineStyle: {
                color: "#FF69B4"
            },
               areaStyle: { //区域填充样式
                normal: {
                 //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                   color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
					   { offset: 0,  color: 'rgba(	255,105,180, 0.7)'},
					   { offset: 0.7,  color: 'rgba(	255,105,180, 0.1)'}
				   ], false),

                 shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                 shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
             }
         },
        data: [22.97, 23.38, 26.51, 24.47, 25.96, 26.22, 26.66, 26.92, 27.82, 26.35, 27.51, 29.86, 28.67]
    }, {
        name: '男生脚胖瘦度',
        smooth: true,
        type: 'line',
        symbolSize: 8,
      	symbol: 'circle',
      	lineStyle: {
                color: "#3deaff"
            },
               areaStyle: { //区域填充样式
                normal: {
                 //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                   color: new echarts.graphic.LinearGradient(1, 1, 0, 1, [
					   { offset: 0,  color: 'rgba(61,234,255, 0.4)'},
					   { offset: 0.7,  color: 'rgba(61,234,255, 0.1)'}
				   ], false),

                 shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                 shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
             }
         },
        data: [25.28, 22.97, 28.47, 26.9, 28.03, 26.07, 26.76, 30.18, 26.63, 30.38, 30.13, 28.07, 30.19]
    },
    {
        type: 'pie',
        center: ['83%', '33%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 50,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#dc832c'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#dc832c',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 180,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#45d08a'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#dc832c',
                    },
                    formatter: '\n过瘦脚占比'
                }
            }
        }]
    },


    {
        type: 'pie',
        center: ['83%', '72%'],
        radius: ['25%', '30%'],
        label: {
            normal: {
                position: 'center'
            }
        },
        data: [{
            value: 435,
            name: '用户来源分析',
            itemStyle: {
                normal: {
                    color: '#ff733f'
                }
            },
            label: {
                normal: {
                    formatter: '{d} %',
                    textStyle: {
                        color: '#ff733f',
                        fontSize: 20

                    }
                }
            }
        }, {
            value: 2400,
            name: '占位',
            tooltip: {
                show: false
            },
            itemStyle: {
                normal: {
                    color: '#45d08a'


                }
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#FF4500',
                    },
                    formatter: '\n过胖脚占比'
                }
            }
        }]
    }]
}

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 折线图 优秀作品
(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".line1 .chart"),'dark');

  var time = ['2岁', '3岁', '4岁', '5岁', '6岁', '7岁', '8岁', '9岁', '10岁', '11岁', '12岁', '13岁', '14岁'],
    pieData = function() {
        var arr = [];
        for (var i = 0; i < time.length; i++) {
            a = Math.round(36-13*Math.log(i+1));
            b = Math.round(17-6*Math.log(i+1));
            c = Math.round(11-4*Math.log(i+1));
            d = Math.round(27-10*Math.log(i+1));
            arr.push({
                time: time[i],
                data: [{
                    name: '双脚相同',
                    value: 63 + a + b + c + d
                }, {
                    name: '左脚比右脚大10-20%',
                    value: a
                }, {
                    name: '左脚比右脚大20%以上',
                    value: b
                },{
                    name: '右脚比左脚大20%以上',
                    value: c
                }, {
                    name: '右脚比左脚大10-20%',
                    value: d
                }]
            });
        }
        return arr;
    }();

var optionsData = [];
    $.each(pieData, function (i, e) {
      optionsData.push({
        series: {
          data: e.data
        }
      });
    });

option = {
    baseOption: {
                        backgroundColor: 'rgba(49,32,112,0.3)',
        timeline: {
            tooltip: {
                show: false
            },
            playInterval: '2000',
            axisType: 'category',
            autoPlay: true,
            symbol: 'circle',
            symbolSize: 8,
            itemStyle: {
                normal: {
                    color: '#fff4fb',
                    borderColor: '#1f79ff',
                    borderWidth: 2
                },
                emphasis: {
                    color: '#3cd1fc'
                }
            },
            label: {
                normal: {
                    textStyle: {
                        fontSize: 14,
                        color: '#1f79ff'
                    }
                },
                emphasis: {
                    textStyle: {
                        fontSize: 14,
                        color: '#3dd4ff'
                    }
                }
            },
            lineStyle: {
                color: '#1f79ff',
                width: 2
            },
            checkpointStyle: {
                color: '#3dd4ff',
                borderColor: '#1f79ff',
                    borderWidth: 2
            },
            controlStyle: {
                show: false
            },
            data: time
        },
        tooltip: {
            textStyle: {
                fontSize: 18
            }
        },
        color: ['#56c979','#5CAFF2',
            '#B6A2DF', '#a96ec9', '#2DC7C9'],
        series: [{
            type: 'pie',
            radius: ['36%', '58%'],
            center: ['60%', '50%'],
            label: {
                textStyle: {
                    fontSize: 14
                }
            },
            labelLine: {
                show: true,
                length: 15,
                length2: 15
            }
        }]
    },
    options: optionsData
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


(function () {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.querySelector(".map .chart"));

  option = {
    color: ['#00c2ff', '#f9cf67','#32CD32', '#e92b77'],
    legend: {
        show: true,
        // icon: 'circle',//图例形状
        bottom: 45,
        center: 0,
        itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
        itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
        itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 14,
            color: '#ffffff'
        },
        data: ['9岁', '10岁', '11岁','12岁'],
    },
    radar: [{

        indicator: [{
                text: '身高',
                max: 100
            },
            {
                text: '兜跟围长',
                max: 100
            },
            {
                text: '跗骨围长',
                max: 100
            },
            {
                text: '跖趾围长',
                max: 100
            },
            {
                text: '鞋码',
                max: 100
            },
            {
                text: '脚长',
                max: 100
            },
            {
                text: '体重',
                max: 100
            }
        ],

        textStyle: {
            color: 'red'
        },
        shape: "circle",
        center: ['50%', '50%'],
        radius: 255,
        startAngle: 90,
        splitNumber: 3,
        orient: 'horizontal', // 图例列表的布局朝向,默认'horizontal'为横向,'vertical'为纵向.
        // shape: 'circle',
        // backgroundColor: {
        //     image:imgPath[0]
        // },
        name: {
            formatter: '{value}',
            textStyle: {
                fontWeight: 450,
                fontSize: 20, //外圈标签字体大小
                color: '#fff' //外圈标签字体颜色
            }
        },
        splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
            show: true,
            areaStyle: { // 分隔区域的样式设置。
             //   color: ['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)', 'rgba(0,0,0,0.8)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
             color:'rgba(0,0,0,0)'
            }
        },
        // axisLabel:{//展示刻度
        //     show: true
        // },
        axisLine: { //指向外圈文本的分隔线样式
            lineStyle: {
                color: '#BEBEBE'
            }
        },
        splitLine: {
            lineStyle: {
                color: '#BEBEBE', // 分隔线颜色
                width: 1, // 分隔线线宽
            }
        }
    }, ],
    series: [{
        name: '雷达图',
        type: 'radar',
        itemStyle: {
            emphasis: {
                lineStyle: {
                    width: 4
                }
            }
        },
        data: [{
            name: '9岁',
            value: [43, 29, 37, 37, 38, 31, 41],
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#00c2ff'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#00c2ff'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            },
            symbolSize: 2.5, // 单个数据标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10。
          /*   label: {                    // 单个拐点文本的样式设置
                    normal: {
                        show: true,             // 单个拐点文本的样式设置。[ default: false ]
                        position: 'top',        // 标签的位置。[ default: top ]
                        distance: 2,            // 距离图形元素的距离。当 position 为字符描述值（如 'top'、'insideRight'）时候有效。[ default: 5 ]
                        color: '#6692e2',          // 文字的颜色。如果设置为 'auto'，则为视觉映射得到的颜色，如系列色。[ default: "#fff" ]
                        fontSize: 14,           // 文字的字体大小
                        formatter:function(params) {
                            return params.value;
                        }
                    }
                },*/
            itemStyle: {
                normal: { //图形悬浮效果
                    borderColor: '#00c2ff',
                    borderWidth: 2.5
                }
            },
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
        }, {
            name: '10岁',
            value: [53, 32, 42, 46, 43, 42, 49],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#f9cf67',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#f9cf67'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#f9cf67'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            },
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
        }, {
            name: '11岁',
            value: [66, 37, 47, 60, 57, 59, 65],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#f9cf67',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#32CD32'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#32CD32'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            },
            // lineStyle: {
            //     normal: {
            //         opacity: 0.5// 图形透明度
            //     }
            // }
        }, {
            name: '12岁',
            value: [84, 45, 55, 70, 77-6, 79-8, 79],
            symbolSize: 2.5,
            itemStyle: {
                normal: {
                    borderColor: '#e92b77',
                    borderWidth: 2.5,
                }
            },
            areaStyle: {
                normal: { // 单项区域填充样式
                    color: {
                        type: 'linear',
                        x: 0, //右
                        y: 0, //下
                        x2: 1, //左
                        y2: 1, //上
                        colorStops: [{
                            offset: 0,
                            color: '#e92b77'
                        }, {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)'
                        }, {
                            offset: 1,
                            color: '#e92b77'
                        }],
                        globalCoord: false
                    },
                    opacity: 1 // 区域透明度
                }
            }
        }]
    }, ]
};

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();


