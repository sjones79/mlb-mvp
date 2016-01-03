var pitchTypeByPitcher = function(pitcherMap, seriesData) {
    
    var pitcherNames = Object.keys(pitcherMap);
        
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
            text: 'Click Pitcher Name Below to Filter Data',
            x: -20
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'Pitch Types'
            }
            
        },
        tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            formatter:function(){
                return '<strong>' + this.series.name + '</strong>' + ' threw ' + '<strong>' + this.key + '</strong> ' + this.y + ' times.';
            }
                    
        },
        yAxis: {
            title: {
                text: '# Pitches Per Type'
            },
            
            categories: pitcherNames

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
        series: seriesData
    });
    
    
}