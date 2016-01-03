var pitcherBarChart = function( barchartData) {
    var pitchTypes = barchartData.seriesPitchTypes;
    var seriesData = barchartData.seriesData;
    
    var pitchChart = new Highcharts.Chart({
        chart: {
            type: 'bar',
            renderTo: 'pitcherBarChart'
        },
        title: {
            text: 'Pitch Type vs LHH and RHH'
        },
        subtitle: {
            text: '<b>L</b>eft <b>H</b>and <b>H</b>itters VS <b>R</b>ight <b>H</b>and <b>H</b>itters'
        },
        xAxis: {
            categories: pitchTypes,
            title: {
                text: null
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Pitches',
                align: 'high'
            },
            labels: {
                overflow: 'justify'
            }
        },
        tooltip: {
            valueSuffix: ' pitches'
        },
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: true
                }
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: -40,
            y: 80,
            floating: true,
            borderWidth: 1,
            backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
            shadow: true
        },
        credits: {
            enabled: false
        },
        series: seriesData
    }); 
        
};