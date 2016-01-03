/* Parses the csv file and returns the data */

var pitchingDataByPitcher = function() {
    
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
        
        //generates a list of all pitch types
        var pitchTotalsPerType = d3.nest()
            .key(function(d) { return d.pitchType; })
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        console.log(" pitch type usage", pitchTotalsPerType);
        
        //TODO Unused
        var totalPitchesByPitcher = d3.nest()
           .key(function(d) { return d.pitcher})
           .rollup(function(leaves) { return leaves.length;})
           .entries(pitches);
        console.log("total pitches by pitcher", totalPitchesByPitcher);
        
        //used to create the picklist
        var pitcherList = d3.nest()
            .key(function(d) { return d.pitcher}).sortKeys(d3.ascending)
            .rollup(function(leaves) { return leaves.length; })
            .entries(pitches);
        
        console.log("pitcherList", pitcherList);
        
        //same as above but with array of objects
        var pitcherObjList = d3.nest()
            .key(function(d) { return d.pitcher}).sortKeys(d3.ascending)
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
         console.log("pitcherObjList", pitcherList);
        
        var list = d3.select("#pitchers").append("select");

            list.selectAll("option")
            .data(pitcherList)
            .enter()
            .append("option")
            .attr("value", function(d) {return d.key;})
            .text(function(d) {
            return d.key; });
        
        
        var allDataGroupedByPitcher = d3.nest()
            .key(function(d) { return d.pitcher;})
            .entries(pitches);
        
        console.log("all data grouped by pitcher",allDataGroupedByPitcher);
        
        
         //used in the pitchtype scatter plot, gives the total number of each pitch type used by each pitcher
        var pitchTotalsPerPitcherByType = d3.nest()
            .key(function(d) { return d.pitchType; })
            .key(function(d){ return d.pitcher})
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        console.log(" pitch type usage by pitcher", pitchTotalsPerPitcherByType);
        
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
        console.log("averagePitchVelocityByPitcher", averagePitchVelocityByPitcher);
        
         //used in pitch gauge RPM charts
        var averageSpinRateByPitcher = d3.nest()
            .key(function(d){ return d.pitchType;})
            .sortKeys(d3.ascending)
            .rollup(function(d){
                return Math.round(d3.mean(d, function(g) { 
                    return +g.spinRate;
                }));
            })
           .map(pitches);
        console.log("averageSpinRateByPitcher", averageSpinRateByPitcher);
   
        //used in pitch result heat map
        var pitchResultsByPitcherAndType = d3.nest()
            .key(function(d){ return d.pitcher;})
            .key(function(d) { return d.pitchType;})
            .key(function(d) { return d.pitchResult; })
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        console.log("pitchResults by pitch type and pitcher", pitchResultsByPitcherAndType);
        
         var pitchTypesAgainstBatterHands = d3.nest()
            .key(function(d) { return d.pitcher;})
            .key(function(d) { return d.pitchType;})
            .key(function(d) { return d.batterHand;})
            .rollup(function(leaves) { return leaves.length; })
            .map(pitches);
        console.log("pitchTypes against batter hands", pitchTypesAgainstBatterHands);
        
        var scatterPlotData = pitcherScatterPlotSeriesData(pitchTotalsPerPitcherByType);
        pitchTypeByPitcher(pitcherObjList, scatterPlotData);
    });
    
    
    
}