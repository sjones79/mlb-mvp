var pitchTypeScatterPlot = function(dataMap, dataObjList) {
    
    var pitchTypeKeys = Object.keys(dataMap);
    
    var seriesData = [];
    for(var i = 0; i < dataObjList.length; i++) {
        seriesData.push(dataObjList[i].y);
    }
        
    var pitchTypeChart = new Highcharts.Chart({
        chart: {
            renderTo: 'pitchTypeTotalScatterPlot',
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Pitch Types and Totals',
            x: -20 //center
        },
        subtitle: {
            text: '2015 World Series',
            x: -20
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Pitch Types'
            },
            categories: pitchTypeKeys
        },
        tooltip: {
                    headerFormat: '<b>{series.name}</b><br>',
                    formatter:function(){
                        return 'Pitch Type: ' + '<strong>' + this.key + '</strong>' + ' Times Thrown:' + '<strong>' + this.y + '</strong>';
                    }
                    
                },
        yAxis: {
            title: {
                text: '# Pitches Per Type'
            },

        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            x: 50,
            y: 5,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#fff',
            borderWidth: 1
        },
        plotOptions: {
            scatter: {
                marker: {
                    radius: 5,
                    states: {
                        hover: {
                            enabled: true,
                            lineColor: 'rgb(100,100,100)'
                        }
                    }
                },
                states: {
                    hover: {
                        marker: {
                            enabled: false
                        }
                    }
                }
                
            }
        },
        series: [{
            name: 'Pitch Type',
            color: 'rgba(120, 223, 223, .5)',
            data: seriesData
        }]
    });
    
    
}