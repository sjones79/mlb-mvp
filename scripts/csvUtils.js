var createMap = function(data){
    var arrXY = [];
    for(key in data){
        var dataMap = {};
        dataMap.x = key;
        dataMap.y = data[key];
        arrXY.push(dataMap);
    }    
    return arrXY;
}

var createPitchResultList = function(data){
    var pitchResultsArray = [];
    var storageArr = [];
    
    
    for(pitchType in data){
        var obj = data[pitchType];
        var arr = [];
        arr = Object.keys(obj);
        for(var i = 0; i < arr.length; i++) {
            storageArr.push(arr[i]);
        }
    }
    pitchResultsArray = storageArr.filter(function(elem, pos) {
        return storageArr.indexOf(elem) == pos;
    }); 
    return pitchResultsArray;
}

var createHeatMapSeriesData = function(data) {
    var seriesData = [];
    var storageArr = [];
    var pitchResultTypes = createPitchResultList(data);
    var pitchResultNumber;
    
     var pitchTypes = Object.keys(data);
    
    for(var i = 0; i < pitchTypes.length; i++){
        if(!storageArr[i]) {
            storageArr[i] = [];
        }
        for(var j = 0; j < pitchResultTypes.length; j++) {
           pitchResultNumber = data[pitchTypes[i]][pitchResultTypes[j]];

           storageArr[i][j] = pitchResultNumber !== undefined ? pitchResultNumber : 0;
       }  
    }
        
    for(var i = 0; i < storageArr.length; i++) {
        var storage = storageArr[i];
        for(var j = 0; j < storage.length; j++) {
            seriesData.push([i, j, storageArr[i][j]]);
        }
    }
    
    return seriesData;
}

var pitcherScatterPlotSeriesData = function (pitcherByPitchType) {
    var seriesData = [];
    var seriesPitchers = [];
    var pitchTypeCount;
    var scatterPlotContents = {};
    
    for (pitchType in pitcherByPitchType) {
        var storageArr = [];
        var pitcherData = pitcherByPitchType[pitchType];
        var pitchers = Object.keys(pitcherData);
        
        for(var i = 0; i < pitchers.length; i++){
        
            pitchTypeCount = pitcherData[pitchers[i]] !== undefined ? pitcherData[pitchers[i]] : 0;
            storageArr.push([pitchers[i],pitchTypeCount]); 
        }
        var pitcherObj = {};
        pitcherObj.name = pitchType;
        pitcherObj.data = storageArr;
        
        seriesData.push(pitcherObj);
        
    }
    
    scatterPlotContents.seriesData = seriesData;
            
    return scatterPlotContents;
}

var pitcherBarChartSeriesData = function(selectedPitcher, pitchTypesAgainstBatterHands) {
    var seriesData = [];
    var pitchObj = pitchTypesAgainstBatterHands[selectedPitcher];
    var barChartContents = {};
    
    for(hand in pitchObj){
        var storageArr = [];
        
        var pitchTypeData = pitchObj[hand];
        
        var pitchTypes = Object.keys(pitchTypeData);
        
        for(var i = 0; i < pitchTypes.length; i++){
            storageArr.push(pitchTypeData[pitchTypes[i]]);
        }
        
        var barchartObj = {};
        barchartObj.name = hand === 'L' ? "LHH" : "RHH";
        barchartObj.data = storageArr;
        seriesData.push(barchartObj);
        
        if(hand === 'L'){
            barChartContents.left = pitchTypes;
        }
        else{
            barChartContents.right = pitchTypes;
        }
        
    }
        
    barChartContents.seriesData = seriesData;
    
    var leftHandPitchTypes = barChartContents.left;
    var rightHandPitchTypes = barChartContents.right;
    
    var seriesPitchTypes = leftHandPitchTypes.concat(rightHandPitchTypes);
        
    barChartContents.seriesPitchTypes = seriesPitchTypes;
    
    return barChartContents;
}

var pitcherGaugeSeriesData = function(selectedPitcher, velocityMap, spinMap){
    
    var gaugeData = {};
    
    var pitcherVelocityMap = velocityMap[selectedPitcher];
    var pitcherSpinMap = spinMap[selectedPitcher];
    
    gaugeData.avgVelocityMap = pitcherVelocityMap;
    gaugeData.avgSpinMap = pitcherSpinMap;
    
    return gaugeData;
    
}


var getSelectedPitcher = function (pitcherId, pitcherList) {
    
   var selectedPitcher;
    
    if (isNumeric(pitcherId)){ 
        var pitcherObj = pitcherList[pitcherId];
        selectedPitcher = pitcherObj['key'];
    
    } 
    else{
        console.log("pitcherId is non numeric ", pitcherId);
    }

    return selectedPitcher; 
}

var isNumeric = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
