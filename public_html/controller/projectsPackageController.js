/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function unique(list) {
  var result = [];
  $.each(list, function(i, e) {
    if ($.inArray(e, result) == -1) result.push(e);
  });
  return result;
}

var list = [];
var xAxis = [];
var seriesCA = [];
var seriesCE = [];
var seriesRMI = [];
var seriesRMA = [];
var seriesRMD = [];
var seriesNOC = [];
var seriesNOI = [];
var seriesNOP = [];
var seriesTLOC = [];

function distributeValues(data){
    $.each(data, function(index,result) {
        list.push(result.commit.sha);
        switch(result.metric.initials) {
            case "CA":
                seriesCA.push(result.value);
                break;
            case "CE":
                seriesCE.push(result.value);
                break;
            case "RMI":
                seriesRMI.push(result.value);
                break;
            case "RMA":
                seriesRMA.push(result.value);
                break;
            case "RMD":
                seriesRMD.push(result.value);
                break;
            case "NOC":
                seriesNOC.push(result.value);
                break;
            case "NOI":
                seriesNOI.push(result.value);
                break;
            case "NOP":
                seriesNOP.push(result.value);
                break;
            case "TLOC":
                seriesTLOC.push(result.value);
                break;
            default:
                console.log('métrica não encontrada');
            }
    });
    xAxis = unique(list);
    init_echarts();
    init_charts();
    console.log(seriesNOP);
}

function populateGraphs(){
            var RANKODE_URL = "http://localhost:34404/service/api/";
            var source = getUrlParameter('name');
    
            var obj = {
                commit:{results:[]},
                metric:{target:{metrics:[]},influences:[]},
                value:null,
                source:source,
                deltaValue:null
            };


            $.ajax({
               url: RANKODE_URL+"result/findByFilter",
                dataType: "json",
                type: 'POST',
                data: JSON.stringify(obj),
                crossDomain: true,
                contentType: 'application/json',
                mimeType: 'application/json',
                success: function(data) {
                    distributeValues(data);
                },
                error: function(jqXHR) {
                  console.log(jqXHR.responseJSON);
                } 
            });
            

}

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
                        labels: xAxis,
                        datasets: [{
                          label: "RMI",
                          backgroundColor: "rgba(38, 185, 154, 0.31)",
                          borderColor: "rgba(38, 185, 154, 0.7)",
                          pointBorderColor: "rgba(38, 185, 154, 0.7)",
                          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          data: seriesRMI
                        }]
                  },
                });

        }


        if ($('#canvas_line1').length ){

                var canvas_line_01 = new Chart(document.getElementById("canvas_line1"), {
                  type: 'line',
                  data: {
                        labels: xAxis,
                        datasets: [{
                          label: "RMA",
                          backgroundColor: "rgba(38, 185, 154, 0.31)",
                          borderColor: "rgba(38, 185, 154, 0.7)",
                          pointBorderColor: "rgba(38, 185, 154, 0.7)",
                          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          data: seriesRMA
                        }]
                  }
                });

        }


        if ($('#canvas_line2').length ){		

                var canvas_line_02 = new Chart(document.getElementById("canvas_line2"), {
                  type: 'line',
                  data: {
                        labels: xAxis,
                        datasets: [{
                          label: "RMD",
                          backgroundColor: "rgba(38, 185, 154, 0.31)",
                          borderColor: "rgba(38, 185, 154, 0.7)",
                          pointBorderColor: "rgba(38, 185, 154, 0.7)",
                          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          data: seriesRMD
                        }]
                  }
                });

        }	


        if ($('#canvas_line3').length ){

                var canvas_line_03 = new Chart(document.getElementById("canvas_line3"), {
                  type: 'line',
                  data: {
                        labels: xAxis,
                        datasets: [{
                          label: "NOC",
                          backgroundColor: "rgba(38, 185, 154, 0.31)",
                          borderColor: "rgba(38, 185, 154, 0.7)",
                          pointBorderColor: "rgba(38, 185, 154, 0.7)",
                          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          data: seriesNOC
                        }]
                  },
                });

        }	


        if ($('#canvas_line4').length ){

                var canvas_line4 = new Chart(document.getElementById("canvas_line4"), {
                  type: 'line',
                  data: {
                        labels: xAxis,
                        datasets: [{
                          label: "NOI",
                          backgroundColor: "rgba(38, 185, 154, 0.31)",
                          borderColor: "rgba(38, 185, 154, 0.7)",
                          pointBorderColor: "rgba(38, 185, 154, 0.7)",
                          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          data: seriesNOI
                        }]
                  },
                });		

        }
        
                if ($('#canvas_line5').length ){

                var canvas_line_05 = new Chart(document.getElementById("canvas_line5"), {
                  type: 'line',
                  data: {
                        labels: xAxis,
                        datasets: [{
                          label: "NOP",
                          backgroundColor: "rgba(38, 185, 154, 0.31)",
                          borderColor: "rgba(38, 185, 154, 0.7)",
                          pointBorderColor: "rgba(38, 185, 154, 0.7)",
                          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          data: seriesNOP
                        }]
                  },
                });		

        }
        
                if ($('#canvas_line6').length ){

                var canvas_line6 = new Chart(document.getElementById("canvas_line6"), {
                  type: 'line',
                  data: {
                        labels: xAxis,
                        datasets: [{
                          label: "TLOC",
                          backgroundColor: "rgba(38, 185, 154, 0.31)",
                          borderColor: "rgba(38, 185, 154, 0.7)",
                          pointBorderColor: "rgba(38, 185, 154, 0.7)",
                          pointBackgroundColor: "rgba(38, 185, 154, 0.7)",
                          pointHoverBackgroundColor: "#fff",
                          pointHoverBorderColor: "rgba(220,220,220,1)",
                          pointBorderWidth: 1,
                          data: seriesTLOC
                        }]
                  },
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
                      data: xAxis
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
                      data: seriesCA
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
                      data: seriesCE
                    }]
              });
            } 

        
    }  


$(document).ready(function() {
                populateGraphs();
                init_DataTables();
                init_CustomNotification();
		init_compose();
                
	});