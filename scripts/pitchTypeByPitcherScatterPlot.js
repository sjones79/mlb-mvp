var pitchTypeByPitcher = function(scatterPlotData) {
    
    var pitcherNameObj = scatterPlotData.pitcherList;
    var pitcherNames = Object.keys(pitcherNameObj);
    var seriesData = scatterPlotData.seriesData;
        
    var pitchTypeChart = new Highcharts.Chart({
        chart: {
            renderTo: 'pitcherScatterPlot',
            type: 'scatter',
            zoomType: 'xy'
        },
        title: {
            text: 'Pitch Types & Totals By Pitcher',
            x: -20 //center
        },
        subtitle: {
            text: 'Click Pitch Type Below to Filter Data',
            x: -20
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Pitchers'
            },
            categories: 'category'
            
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            formatter:function(){
                return '<strong>' + this.key  + '</strong>' + ' threw ' + '<strong>' + this.series.name  + '</strong> ' + this.y + ' times.';
            }
                    
        },
        yAxis: {
            title: {
                text: '# Pitches Per Type'
            }

        },
        
        plotOptions: {
            scatter: {
                marker: {
                    radius: 4,
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
        series: seriesData
    });
    
    
}