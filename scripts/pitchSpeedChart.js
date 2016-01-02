var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 50
};

var width = 960 - margin.left - margin.right;
var height = 500 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([1, width]);

var y = d3.scale.linear()
   .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var line = d3.svg.line()
    .x(function(d){return x(d.pitchNumber);})
    .y(function(d){return y(d.releaseVelocity);});

var svg = d3.select("#lineChart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
.append("g")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")");

d3.csv("data/Edison.csv", function(error, data){
    if (error) throw error;
    data.forEach(function(d){
        d.releaseVelocity = +d.releaseVelocity;
        d.pitchNumber = +d.pitchNumber;
    });
    
    x.domain(d3.extent(data, function(d){ return d.pitchNumber; }));
    y.domain(d3.extent(data, function(d){ return d.releaseVelocity;}));
    
    svg.append("g")
        .attr("class", "x axis")
        .attr("transform","translate(0," + height + ")")
        .call(xAxis);
    
    svg.append("g")
        .attr("class","y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 5)
        .attr("dy", ".71em")
        .style("text-anchor","end")
        .text("Release Velocity (MPH)");
    
    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line);
});
    