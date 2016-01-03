var pitcherGaugesChart = function (avgVelocityMap, avgSpinRateMap){
    
    // Load the fonts
Highcharts.createElement('link', {
   href: '//fonts.googleapis.com/css?family=Signika:400,700',
   rel: 'stylesheet',
   type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);
    
    Highcharts.theme = {
   colors: ["#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
   chart: {
      backgroundColor: null,
      style: {
         fontFamily: "Signika, serif"
      }
   },
   title: {
      style: {
         color: 'black',
         fontSize: '16px',
         fontWeight: 'bold'
      }
   },
   subtitle: {
      style: {
         color: 'black'
      }
   },
   tooltip: {
      borderWidth: 0
   },
   legend: {
      itemStyle: {
         fontWeight: 'bold',
         fontSize: '13px'
      }
   },
   xAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   yAxis: {
      labels: {
         style: {
            color: '#6e6e70'
         }
      }
   },
   plotOptions: {
      series: {
         shadow: true
      },
      candlestick: {
         lineColor: '#404048'
      },
      map: {
         shadow: false
      }
   },

   // Highstock specific
   navigator: {
      xAxis: {
         gridLineColor: '#D0D0D8'
      }
   },
   rangeSelector: {
      buttonTheme: {
         fill: 'white',
         stroke: '#C0C0C8',
         'stroke-width': 1,
         states: {
            select: {
               fill: '#D0D0D8'
            }
         }
      }
   },
   scrollbar: {
      trackBorderColor: '#C0C0C8'
   },

   // General
   background2: '#E0E0E8'
   
};

// Apply the theme
Highcharts.setOptions(Highcharts.theme);
    
var velocityGaugeOpts = {
    title: 'Release Velocity',

    pane: {
        center: ['50%', '85%'],
        size: '160%',
        startAngle: -90,
        endAngle: 90,
        background: {
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
            innerRadius: '60%',
            outerRadius: '100%',
            shape: 'arc'
        }
    },

    tooltip: {
        enabled: false
    },

     // the value axis
    yAxis: {
        min: 0,
        max: 100,
        tickInterval:100,
        startOnTick:true,
        stops: [
            [0.1, '#55BF3B'], // green
            [0.5, '#DDDF0D'], // yellow
            [0.9, '#DF5353'] // red
        ],
        lineWidth: 0,
        minorTickInterval: null,
        tickWidth: 0,
        title: {
            text: 'Release Velocity',
            y: -80
        },
        labels: {
            y: 16
        }        
    },

    plotOptions: {
        solidgauge: {
            dataLabels: {
                y: 5,
                borderWidth: 0,
                useHTML: true
            }
        }
    },
    credits: {
        enabled: false
    },

}

var rpmGaugeOpts = {
   title: 'Spin Rate',
         // The RPM gauge
	    yAxis: {
            min: 0,
            max: 5000,
            tickInterval:5000,
            startOnTick:true,
            stops: [
				[0.1, '#55BF3B'], // green
	        	[0.5, '#DDDF0D'], // yellow
	        	[0.9, '#DF5353'] // red
			],
			lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: null,
            tickWidth: 0,
	        title: {
                text: 'Spin Rate',
                y: -80
	        },
            labels: {
                y: 16
            }        
	    },
        pane: {
            center: ['50%', '85%'],
            size: '160%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        credits: {
            enabled: false
        },
 
}

/* Pitch Types
CH: Change Up
CU: Curveball
FC: Cutter
FF: Four Seamer
FS: Splitter
FT: Two Seamer
IN: Intentional Ball
KC: Knuckle Curve
SI: Sinker
SL: Slider
*/

var speedGaugeChartCH =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeCH'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.CH],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartCH = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeCH'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.CH],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
    
    
var speedGaugeChartCU =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeCU'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.CU],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartCU = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeCU'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.CU],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
    
    var speedGaugeChartFC =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeFC'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.FC],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartFC = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeFC'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.FC],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
var speedGaugeChartFF =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeFF'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.FF],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartFF = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeFF'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.FF],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
    var speedGaugeChartFS =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeFS'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.FS],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartFS = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeFS'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.FS],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
var speedGaugeChartFT =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeFT'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.FT],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartFT = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeFT'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.FT],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
        var speedGaugeChartIN =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeIN'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.IN],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartIN = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeIN'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.IN],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
        var speedGaugeChartKC =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeKC'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.KC],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartKC = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeKC'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.KC],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
        var speedGaugeChartSI =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeSI'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.SI],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartSI = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeSI'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.SI],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
        var speedGaugeChartSL =  new Highcharts.Chart(Highcharts.merge(velocityGaugeOpts,{
  
        chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpeedGaugeSL'
        },

        series: [{
            name: 'Velocity',
            data: [avgVelocityMap.SL],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                       '<span style="font-size:12px;color:silver">mph</span></div>'
            },
            tooltip: {
                valueSuffix: 'mph'
            }
        }]
    }));
    
var rpmGaugeChartSL = new Highcharts.Chart(Highcharts.merge(rpmGaugeOpts,{
         chart: {
            type: 'solidgauge',
            renderTo: 'pitcherSpinGaugeSL'
        },

        
        series: [{
            name: 'RPM',
            data: [avgSpinRateMap.SL],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y:.1f}</span><br/>' +
                       '<span style="font-size:12px;color:silver">RPM</span></div>'
            },
            tooltip: {
                valueSuffix: ' revolutions/min'
            }
        }]

    }));
    
}