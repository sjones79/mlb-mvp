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
    console.log("pitch results",pitchResultsArray);
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
    var pitchTypeNumber;
    
    for (pitchType in pitcherByPitchType) {
        var storageArr = [];
        var pitcherData = pitcherByPitchType[pitchType];
        var pitchers = Object.keys(pitcherData);
        
        for(var i = 0; i < pitchers.length; i++){
        
            pitchTypeNumber = pitcherData[pitchers[i]] !== undefined ? pitcherData[pitchers[i]] : 0;
            storageArr.push([pitchers[i],pitchTypeNumber]);             
        }
        
        var pitcherObj = {};
        pitcherObj.name = pitchType;
        pitcherObj.data = storageArr;
        seriesData.push(pitcherObj);
    }
    
    console.log("pitcher scatter plot series data", seriesData);
    return seriesData;
}
