var pitchResultHeatMap = function(pitchResultTypes, pitchResultsByPitchType, seriesData) {
   
    //Data manipulation here
   var pitchTypes = Object.keys(pitchResultsByPitchType); 
   
    
        
    
    var pitchResultHeatMap = new Highcharts.Chart({
        
         chart: {
            type: 'heatmap',
            renderTo:'pitchResultHeatMap',
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
        },

        title: {
            enabled: true,
            text: 'Pitch Results By Pitch Type'
        },

        xAxis: {
            categories: pitchTypes,
            title: {
                enabled: true,
                text: 'Pitch Types'
            }
        },

        yAxis: {
            categories: pitchResultTypes,
            title: {
                enabled: true,
                text: 'Pitch Results'
            }
        },

        colorAxis: {
            min: 0,
            minColor: '#FFFFFF',
            maxColor: Highcharts.getOptions().colors[0]
        },

        legend: {
            align: 'right',
            layout: 'vertical',
            margin: 0,
            verticalAlign: 'top',
            y: 25,
            symbolHeight: 280
        },

        tooltip: {
            formatter: function () {
                return 'The ' + '<b>' + this.series.xAxis.categories[this.point.x] + '</b> pitch resulted in <br><b>' +
                    this.point.value + '</b> <b> ' + this.series.yAxis.categories[this.point.y] + '</b>';
            }
        },

        series: [{
            name: 'Pitch Results By Type',
            borderWidth: 1,
            data: seriesData,
            dataLabels: {
                enabled: true,
                color: '#000000'
            }
        }]
        
    });
   
}