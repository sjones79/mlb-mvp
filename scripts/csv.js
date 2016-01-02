/* Parses the csv file and returns the data */

var pitchingData = function() {
    
    //set the date parser
    var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S").parse;
    
    //load csv file
    d3.csv("data/2015-WS.csv", function (error, pitches){
        console.log("all pitching data: ", pitches);
        
        
         //the total number of pitches (or all rows in the file)
        var totalPitches = d3.nest()
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        console.log("total pitches: ", totalPitches);   
        
        //used in the pitchtype scatter plot, gives the total number of each pitch type in the file
        var pitchTotalsPerType = d3.nest()
            .key(function(d) { return d.pitchType; })
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        console.log(" pitch type usage", pitchTotalsPerType);
        
        //used in pitch gauge speed charts
        var averagePitchVelocity = d3.nest()
            .key(function(d){ return d.pitchType;})
            .sortKeys(d3.ascending)
            .rollup(function(d){
                return Math.round(d3.mean(d, function(g) { 
                    return +g.releaseVelocity;
                }));
            })
           .map(pitches);
        console.log("averagePitchVelocity", averagePitchVelocity);
        
         //used in pitch gauge RPM charts
        var averageSpinRate = d3.nest()
            .key(function(d){ return d.pitchType;})
            .sortKeys(d3.ascending)
            .rollup(function(d){
                return Math.round(d3.mean(d, function(g) { 
                    return +g.spinRate;
                }));
            })
           .map(pitches);
        console.log("averageSpinRate", averageSpinRate);
   
        //used in pitch result heat map
        var pitchResultsByType = d3.nest()
            .key(function(d) { return d.pitchType;})
            .key(function(d) { return d.pitchResult; })
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        console.log("pitchResults by pitch type", pitchResultsByType);
        
        var pitchTypeMap = createMap(pitchTotalsPerType);
        var pitchResultsByPitch = createPitchResultList(pitchResultsByType);
        var heatMapSeries = createHeatMapSeriesData(pitchResultsByType);
        pitchTypeScatterPlot(pitchTotalsPerType, pitchTypeMap);
        pitchResultHeatMap(pitchResultsByPitch, pitchResultsByType, heatMapSeries);
        pitchGaugeChart(averagePitchVelocity, averageSpinRate);

    });
}