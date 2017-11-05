/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function init_charts() {

    console.log('run_charts  typeof [' + typeof (Chart) + ']');

    if( typeof (Chart) === 'undefined'){ return; }

    console.log('init_charts');


    Chart.defaults.global.legend = {
            enabled: false
    };



    if ($('#canvas_line').length ){

            var canvas_line_00 = new Chart(document.getElementById("canvas_line"), {
              type: 'line',
              data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                      label: "My First dataset",
                      backgroundColor: "rgba(38, 185, 154, 0.31)",
                      borderColor: "rgba(38, 185, 154, 0.7)",
                      pointBorderColor: "rgba(38, 185, 154, 0.7)",
                      pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointBorderWidth: 1,
                      data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                      label: "My Second dataset",
                      backgroundColor: "rgba(3, 88, 106, 0.3)",
                      borderColor: "rgba(3, 88, 106, 0.70)",
                      pointBorderColor: "rgba(3, 88, 106, 0.70)",
                      pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(151,187,205,1)",
                      pointBorderWidth: 1,
                      data: [82, 23, 66, 9, 99, 4, 2]
                    }]
              },
            });

    }


    if ($('#canvas_line1').length ){

            var canvas_line_01 = new Chart(document.getElementById("canvas_line1"), {
              type: 'line',
              data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                      label: "My First dataset",
                      backgroundColor: "rgba(38, 185, 154, 0.31)",
                      borderColor: "rgba(38, 185, 154, 0.7)",
                      pointBorderColor: "rgba(38, 185, 154, 0.7)",
                      pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointBorderWidth: 1,
                      data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                      label: "My Second dataset",
                      backgroundColor: "rgba(3, 88, 106, 0.3)",
                      borderColor: "rgba(3, 88, 106, 0.70)",
                      pointBorderColor: "rgba(3, 88, 106, 0.70)",
                      pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(151,187,205,1)",
                      pointBorderWidth: 1,
                      data: [82, 23, 66, 9, 99, 4, 2]
                    }]
              },
            });

    }


    if ($('#canvas_line2').length ){		

            var canvas_line_02 = new Chart(document.getElementById("canvas_line2"), {
              type: 'line',
              data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                      label: "My First dataset",
                      backgroundColor: "rgba(38, 185, 154, 0.31)",
                      borderColor: "rgba(38, 185, 154, 0.7)",
                      pointBorderColor: "rgba(38, 185, 154, 0.7)",
                      pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointBorderWidth: 1,
                      data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                      label: "My Second dataset",
                      backgroundColor: "rgba(3, 88, 106, 0.3)",
                      borderColor: "rgba(3, 88, 106, 0.70)",
                      pointBorderColor: "rgba(3, 88, 106, 0.70)",
                      pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(151,187,205,1)",
                      pointBorderWidth: 1,
                      data: [82, 23, 66, 9, 99, 4, 2]
                    }]
              },
            });

    }	


    if ($('#canvas_line3').length ){

            var canvas_line_03 = new Chart(document.getElementById("canvas_line3"), {
              type: 'line',
              data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                      label: "My First dataset",
                      backgroundColor: "rgba(38, 185, 154, 0.31)",
                      borderColor: "rgba(38, 185, 154, 0.7)",
                      pointBorderColor: "rgba(38, 185, 154, 0.7)",
                      pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointBorderWidth: 1,
                      data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                      label: "My Second dataset",
                      backgroundColor: "rgba(3, 88, 106, 0.3)",
                      borderColor: "rgba(3, 88, 106, 0.70)",
                      pointBorderColor: "rgba(3, 88, 106, 0.70)",
                      pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(151,187,205,1)",
                      pointBorderWidth: 1,
                      data: [82, 23, 66, 9, 99, 4, 2]
                    }]
              },
            });

    }	


    if ($('#canvas_line4').length ){

            var canvas_line_04 = new Chart(document.getElementById("canvas_line4"), {
              type: 'line',
              data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [{
                      label: "My First dataset",
                      backgroundColor: "rgba(38, 185, 154, 0.31)",
                      borderColor: "rgba(38, 185, 154, 0.7)",
                      pointBorderColor: "rgba(38, 185, 154, 0.7)",
                      pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(220,220,220,1)",
                      pointBorderWidth: 1,
                      data: [31, 74, 6, 39, 20, 85, 7]
                    }, {
                      label: "My Second dataset",
                      backgroundColor: "rgba(3, 88, 106, 0.3)",
                      borderColor: "rgba(3, 88, 106, 0.70)",
                      pointBorderColor: "rgba(3, 88, 106, 0.70)",
                      pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                      pointHoverBackgroundColor: "#fff",
                      pointHoverBorderColor: "rgba(151,187,205,1)",
                      pointBorderWidth: 1,
                      data: [82, 23, 66, 9, 99, 4, 2]
                    }]
              },
            });		

    }


      // Line chart

    if ($('#lineChart').length ){	

      var ctx = document.getElementById("lineChart");
      var lineChart = new Chart(ctx, {
            type: 'line',
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
                    label: "My First dataset",
                    backgroundColor: "rgba(38, 185, 154, 0.31)",
                    borderColor: "rgba(38, 185, 154, 0.7)",
                    pointBorderColor: "rgba(38, 185, 154, 0.7)",
                    pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointBorderWidth: 1,
                    data: [31, 74, 6, 39, 20, 85, 7]
              }, {
                    label: "My Second dataset",
                    backgroundColor: "rgba(3, 88, 106, 0.3)",
                    borderColor: "rgba(3, 88, 106, 0.70)",
                    pointBorderColor: "rgba(3, 88, 106, 0.70)",
                    pointBackgroundColor: "rgba(3, 88, 106, 0.70)",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(151,187,205,1)",
                    pointBorderWidth: 1,
                    data: [82, 23, 66, 9, 99, 4, 2]
              }]
            },
      });

    }

      // Bar chart

    if ($('#mybarChart').length ){ 

      var ctx = document.getElementById("mybarChart");
      var mybarChart = new Chart(ctx, {
            type: 'bar',
            data: {
              labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [{
                    label: '# of Votes',
                    backgroundColor: "#26B99A",
                    data: [51, 30, 40, 28, 92, 50, 45]
              }, {
                    label: '# of Votes',
                    backgroundColor: "#03586A",
                    data: [41, 56, 25, 48, 72, 34, 12]
              }]
            },

            options: {
              scales: {
                    yAxes: [{
                      ticks: {
                            beginAtZero: true
                      }
                    }]
              }
            }
      });

    } 


      // Doughnut chart

    if ($('#canvasDoughnut').length ){ 

      var ctx = document.getElementById("canvasDoughnut");
      var data = {
            labels: [
              "Dark Grey",
              "Purple Color",
              "Gray Color",
              "Green Color",
              "Blue Color"
            ],
            datasets: [{
              data: [120, 50, 140, 180, 100],
              backgroundColor: [
                    "#455C73",
                    "#9B59B6",
                    "#BDC3C7",
                    "#26B99A",
                    "#3498DB"
              ],
              hoverBackgroundColor: [
                    "#34495E",
                    "#B370CF",
                    "#CFD4D8",
                    "#36CAAB",
                    "#49A9EA"
              ]

            }]
      };

      var canvasDoughnut = new Chart(ctx, {
            type: 'doughnut',
            tooltipFillColor: "rgba(51, 51, 51, 0.55)",
            data: data
      });

    } 

      // Radar chart

    if ($('#canvasRadar').length ){ 

      var ctx = document.getElementById("canvasRadar");
      var data = {
            labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
            datasets: [{
              label: "My First dataset",
              backgroundColor: "rgba(3, 88, 106, 0.2)",
              borderColor: "rgba(3, 88, 106, 0.80)",
              pointBorderColor: "rgba(3, 88, 106, 0.80)",
              pointBackgroundColor: "rgba(3, 88, 106, 0.80)",
              pointHoverBackgroundColor: "#fff",
              pointHoverBorderColor: "rgba(220,220,220,1)",
              data: [65, 59, 90, 81, 56, 55, 40]
            }, {
              label: "My Second dataset",
              backgroundColor: "rgba(38, 185, 154, 0.2)",
              borderColor: "rgba(38, 185, 154, 0.85)",
              pointColor: "rgba(38, 185, 154, 0.85)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(151,187,205,1)",
              data: [28, 48, 40, 19, 96, 27, 100]
            }]
      };

      var canvasRadar = new Chart(ctx, {
            type: 'radar',
            data: data,
      });

    }


      // Pie chart
      if ($('#pieChart').length ){

              var ctx = document.getElementById("pieChart");
              var data = {
                    datasets: [{
                      data: [120, 50, 140, 180, 100],
                      backgroundColor: [
                            "#455C73",
                            "#9B59B6",
                            "#BDC3C7",
                            "#26B99A",
                            "#3498DB"
                      ],
                      label: 'My dataset' // for legend
                    }],
                    labels: [
                      "Dark Gray",
                      "Purple",
                      "Gray",
                      "Green",
                      "Blue"
                    ]
              };

              var pieChart = new Chart(ctx, {
                    data: data,
                    type: 'pie',
                    otpions: {
                      legend: false
                    }
              });

      }


      // PolarArea chart

    if ($('#polarArea').length ){

            var ctx = document.getElementById("polarArea");
            var data = {
            datasets: [{
              data: [120, 50, 140, 180, 100],
              backgroundColor: [
                    "#455C73",
                    "#9B59B6",
                    "#BDC3C7",
                    "#26B99A",
                    "#3498DB"
              ],
              label: 'My dataset'
            }],
            labels: [
              "Dark Gray",
              "Purple",
              "Gray",
              "Green",
              "Blue"
            ]
            };

            var polarArea = new Chart(ctx, {
            data: data,
            type: 'polarArea',
            options: {
              scale: {
                    ticks: {
                      beginAtZero: true
                    }
              }
            }
            });

    }
    }

    /* DATA TABLES */
    function init_DataTables() {

            console.log('run_datatables');

            if( typeof ($.fn.DataTable) === 'undefined'){ return; }
            console.log('init_DataTables');

            var handleDataTableButtons = function() {
              if ($("#datatable-buttons").length) {
                    $("#datatable-buttons").DataTable({
                      dom: "Bfrtip",
                      buttons: [
                            {
                              extend: "copy",
                              className: "btn-sm"
                            },
                            {
                              extend: "csv",
                              className: "btn-sm"
                            },
                            {
                              extend: "excel",
                              className: "btn-sm"
                            },
                            {
                              extend: "pdfHtml5",
                              className: "btn-sm"
                            },
                            {
                              extend: "print",
                              className: "btn-sm"
                            },
                      ],
                      responsive: true
                    });
              }
            };

            TableManageButtons = function() {
              "use strict";
              return {
                    init: function() {
                      handleDataTableButtons();
                    }
              };
            }();

            $('#datatable').dataTable();

            $('#datatable-keytable').DataTable({
              keys: true
            });

            $('#datatable-responsive').DataTable();

            $('#datatable-scroller').DataTable({
              ajax: "js/datatables/json/scroller-demo.json",
              deferRender: true,
              scrollY: 380,
              scrollCollapse: true,
              scroller: true
            });

            $('#datatable-fixed-header').DataTable({
              fixedHeader: true
            });

            var $datatable = $('#datatable-checkbox');

            $datatable.dataTable({
              'order': [[ 1, 'asc' ]],
              'columnDefs': [
                    { orderable: false, targets: [0] }
              ]
            });
            $datatable.on('draw.dt', function() {
              $('checkbox input').iCheck({
                    checkboxClass: 'icheckbox_flat-green'
              });
            });

            TableManageButtons.init();

    };


    /* CUSTOM NOTIFICATION */

    function init_CustomNotification() {

            console.log('run_customtabs');

            if( typeof (CustomTabs) === 'undefined'){ return; }
            console.log('init_CustomTabs');

            var cnt = 10;

            TabbedNotification = function(options) {
              var message = "<div id='ntf" + cnt + "' class='text alert-" + options.type + "' style='display:none'><h2><i class='fa fa-bell'></i> " + options.title +
                    "</h2><div class='close'><a href='javascript:;' class='notification_close'><i class='fa fa-close'></i></a></div><p>" + options.text + "</p></div>";

              if (!document.getElementById('custom_notifications')) {
                    alert('doesnt exists');
              } else {
                    $('#custom_notifications ul.notifications').append("<li><a id='ntlink" + cnt + "' class='alert-" + options.type + "' href='#ntf" + cnt + "'><i class='fa fa-bell animated shake'></i></a></li>");
                    $('#custom_notifications #notif-group').append(message);
                    cnt++;
                    CustomTabs(options);
              }
            };

            CustomTabs = function(options) {
              $('.tabbed_notifications > div').hide();
              $('.tabbed_notifications > div:first-of-type').show();
              $('#custom_notifications').removeClass('dsp_none');
              $('.notifications a').click(function(e) {
                    e.preventDefault();
                    var $this = $(this),
                      tabbed_notifications = '#' + $this.parents('.notifications').data('tabbed_notifications'),
                      others = $this.closest('li').siblings().children('a'),
                      target = $this.attr('href');
                    others.removeClass('active');
                    $this.addClass('active');
                    $(tabbed_notifications).children('div').hide();
                    $(target).show();
              });
            };

            CustomTabs();

            var tabid = idname = '';

            $(document).on('click', '.notification_close', function(e) {
              idname = $(this).parent().parent().attr("id");
              tabid = idname.substr(-2);
              $('#ntf' + tabid).remove();
              $('#ntlink' + tabid).parent().remove();
              $('.notifications a').first().addClass('active');
              $('#notif-group div').first().css('display', 'block');
            });

    };


    /* COMPOSE */

    function init_compose() {

            if( typeof ($.fn.slideToggle) === 'undefined'){ return; }
            console.log('init_compose');

            $('#compose, .compose-close').click(function(){
                    $('.compose').slideToggle();
            });

    };

    function init_echarts() {

                    if( typeof (echarts) === 'undefined'){ return; }
                    console.log('init_echarts');


                      var theme = {
                      color: [
                              '#26B99A', '#34495E', '#BDC3C7', '#3498DB',
                              '#9B59B6', '#8abb6f', '#759c6a', '#bfd3b7'
                      ],

                      title: {
                              itemGap: 8,
                              textStyle: {
                                      fontWeight: 'normal',
                                      color: '#408829'
                              }
                      },

                      dataRange: {
                              color: ['#1f610a', '#97b58d']
                      },

                      toolbox: {
                              color: ['#408829', '#408829', '#408829', '#408829']
                      },

                      tooltip: {
                              backgroundColor: 'rgba(0,0,0,0.5)',
                              axisPointer: {
                                      type: 'line',
                                      lineStyle: {
                                              color: '#408829',
                                              type: 'dashed'
                                      },
                                      crossStyle: {
                                              color: '#408829'
                                      },
                                      shadowStyle: {
                                              color: 'rgba(200,200,200,0.3)'
                                      }
                              }
                      },

                      dataZoom: {
                              dataBackgroundColor: '#eee',
                              fillerColor: 'rgba(64,136,41,0.2)',
                              handleColor: '#408829'
                      },
                      grid: {
                              borderWidth: 0
                      },

                      categoryAxis: {
                              axisLine: {
                                      lineStyle: {
                                              color: '#408829'
                                      }
                              },
                              splitLine: {
                                      lineStyle: {
                                              color: ['#eee']
                                      }
                              }
                      },

                      valueAxis: {
                              axisLine: {
                                      lineStyle: {
                                              color: '#408829'
                                      }
                              },
                              splitArea: {
                                      show: true,
                                      areaStyle: {
                                              color: ['rgba(250,250,250,0.1)', 'rgba(200,200,200,0.1)']
                                      }
                              },
                              splitLine: {
                                      lineStyle: {
                                              color: ['#eee']
                                      }
                              }
                      },
                      timeline: {
                              lineStyle: {
                                      color: '#408829'
                              },
                              controlStyle: {
                                      normal: {color: '#408829'},
                                      emphasis: {color: '#408829'}
                              }
                      },

                      k: {
                              itemStyle: {
                                      normal: {
                                              color: '#68a54a',
                                              color0: '#a9cba2',
                                              lineStyle: {
                                                      width: 1,
                                                      color: '#408829',
                                                      color0: '#86b379'
                                              }
                                      }
                              }
                      },
                      map: {
                              itemStyle: {
                                      normal: {
                                              areaStyle: {
                                                      color: '#ddd'
                                              },
                                              label: {
                                                      textStyle: {
                                                              color: '#c12e34'
                                                      }
                                              }
                                      },
                                      emphasis: {
                                              areaStyle: {
                                                      color: '#99d2dd'
                                              },
                                              label: {
                                                      textStyle: {
                                                              color: '#c12e34'
                                                      }
                                              }
                                      }
                              }
                      },
                      force: {
                              itemStyle: {
                                      normal: {
                                              linkStyle: {
                                                      strokeColor: '#408829'
                                              }
                                      }
                              }
                      },
                      chord: {
                              padding: 4,
                              itemStyle: {
                                      normal: {
                                              lineStyle: {
                                                      width: 1,
                                                      color: 'rgba(128, 128, 128, 0.5)'
                                              },
                                              chordStyle: {
                                                      lineStyle: {
                                                              width: 1,
                                                              color: 'rgba(128, 128, 128, 0.5)'
                                                      }
                                              }
                                      },
                                      emphasis: {
                                              lineStyle: {
                                                      width: 1,
                                                      color: 'rgba(128, 128, 128, 0.5)'
                                              },
                                              chordStyle: {
                                                      lineStyle: {
                                                              width: 1,
                                                              color: 'rgba(128, 128, 128, 0.5)'
                                                      }
                                              }
                                      }
                              }
                      },
                      gauge: {
                              startAngle: 225,
                              endAngle: -45,
                              axisLine: {
                                      show: true,
                                      lineStyle: {
                                              color: [[0.2, '#86b379'], [0.8, '#68a54a'], [1, '#408829']],
                                              width: 8
                                      }
                              },
                              axisTick: {
                                      splitNumber: 10,
                                      length: 12,
                                      lineStyle: {
                                              color: 'auto'
                                      }
                              },
                              axisLabel: {
                                      textStyle: {
                                              color: 'auto'
                                      }
                              },
                              splitLine: {
                                      length: 18,
                                      lineStyle: {
                                              color: 'auto'
                                      }
                              },
                              pointer: {
                                      length: '90%',
                                      color: 'auto'
                              },
                              title: {
                                      textStyle: {
                                              color: '#333'
                                      }
                              },
                              detail: {
                                      textStyle: {
                                              color: 'auto'
                                      }
                              }
                      },
                      textStyle: {
                              fontFamily: 'Arial, Verdana, sans-serif'
                      }
              };

               //echart Line

            if ($('#echart_line').length ){ 

              var echartLine = echarts.init(document.getElementById('echart_line'), theme);

              echartLine.setOption({
                    title: {
                      text: 'CA e CE',
                      subtext: 'Acoplamento'
                    },
                    tooltip: {
                      trigger: 'axis'
                    },
                    legend: {
                      x: 220,
                      y: 40,
                      data: ['CA', 'CE']
                    },
                    toolbox: {
                      show: true,
                      feature: {
                            magicType: {
                              show: true,
                              title: {
                                    line: 'Line',
                                    bar: 'Bar',
                                    stack: 'Stack',
                                    tiled: 'Tiled'
                              },
                              type: ['line', 'bar', 'stack', 'tiled']
                            },
                            restore: {
                              show: true,
                              title: "Restore"
                            },
                            saveAsImage: {
                              show: true,
                              title: "Save Image"
                            }
                      }
                    },
                    calculable: true,
                    xAxis: [{
                      type: 'category',
                      boundaryGap: false,
                      data: ['[commit]', '[commit]', '[commit]', '[commit]', '[commit]', '[commit]', '[commit]']
                    }],
                    yAxis: [{
                      type: 'value'
                    }],
                    series: [{
                      name: 'CA',
                      type: 'line',
                      smooth: true,
                      itemStyle: {
                            normal: {
                              areaStyle: {
                                    type: 'default'
                              }
                            }
                      },
                      data: [10, 12, 21, 54, 260, 830, 710]
                    }, {
                      name: 'CE',
                      type: 'line',
                      smooth: true,
                      itemStyle: {
                            normal: {
                              areaStyle: {
                                    type: 'default'
                              }
                            }
                      },
                      data: [30, 182, 434, 791, 390, 30, 10]
                    }]
              });

            } 

    }  


$(document).ready(function() {
                init_DataTables();
                init_CustomNotification();
		init_charts();
		init_echarts();
		init_compose();
	});