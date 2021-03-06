/* Parses the csv file and returns the data */

var pitchingDataByPitcher = function(pitcherId) {
    
    //set the date parser
    var parseDate = d3.time.format("%Y-%m-%dT%H:%M:%S").parse;
    
    //load csv file
    d3.csv("data/2015-WS.csv", function (error, pitches){
         
         //the total number of pitches (or all rows in the file)
        var totalPitches = d3.nest()
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        
        //generates a list of all pitch types
        var pitchTotalsPerType = d3.nest()
            .key(function(d) { return d.pitchType; })
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        
        //used to create the picklist
        var pitcherList = d3.nest()
            .key(function(d) { return d.pitcher}).sortKeys(d3.ascending)
            .rollup(function(leaves) { return leaves.length; })
            .entries(pitches);
        
        
        //same as above but with array of objects
        var pitcherObjList = d3.nest()
            .key(function(d) { return d.pitcher}).sortKeys(d3.ascending)
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        
        var allDataGroupedByPitcher = d3.nest()
            .key(function(d) { return d.pitcher;})
            .entries(pitches);
                
        
         //used in the pitchtype scatter plot, gives the total number of each pitch type used by each pitcher
        var pitchTotalsPerPitcherByType = d3.nest()
            .key(function(d) { return d.pitchType; })
            .key(function(d){ return d.pitcher})
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        
        //used in pitch gauge speed charts
        var averagePitchVelocityByPitcher = d3.nest()
            .key(function(d){ return d.pitcher})
            .key(function(d){ return d.pitchType;})
            .sortKeys(d3.ascending)
            .rollup(function(d){
                return Math.round(d3.mean(d, function(g) { 
                    return +g.releaseVelocity;
                }));
            })
           .map(pitches);
        
         //used in pitch gauge RPM charts
        var averageSpinRateByPitcher = d3.nest()
            .key(function(d) {return d.pitcher;})
            .key(function(d){ return d.pitchType;})
            .sortKeys(d3.ascending)
            .rollup(function(d){
                return Math.round(d3.mean(d, function(g) { 
                    return +g.spinRate;
                }));
            })
           .map(pitches);
   
        //used in pitch result heat map
        var pitchResultsByPitcherAndType = d3.nest()
            .key(function(d){ return d.pitcher;})
            .key(function(d) { return d.pitchType;})
            .key(function(d) { return d.pitchResult; })
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        
         var pitchTypesAgainstBatterHands = d3.nest()
            .key(function(d) { return d.pitcher;})
            .key(function(d) { return d.batterHand;})
            .key(function(d) { return d.pitchType;})
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        
       if(isNumeric(pitcherId)) {
           var selectedPitcher = getSelectedPitcher(pitcherId, pitcherList);
           
           var barChartData = pitcherBarChartSeriesData(selectedPitcher, pitchTypesAgainstBatterHands);
           pitcherBarChart(barChartData);
           
           var gaugeDataByPitcher = pitcherGaugeSeriesData(selectedPitcher, averagePitchVelocityByPitcher, averageSpinRateByPitcher);
           pitcherGaugesChart(gaugeDataByPitcher.avgVelocityMap, gaugeDataByPitcher.avgSpinMap);
           
       }
                
    });
    
    
    
}