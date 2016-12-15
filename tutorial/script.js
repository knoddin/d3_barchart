$(document).ready(function() {
	//Action happens here!

  var array = [55,123,42,81,73];

  // d3.select("#chart").selectAll("p")
  //   .data(array)
  //   .enter()
  //   .append("p")
  //   .text(function(d) {
  //     // d can be anything - it references the data above, which has array passed in
  //     return d;
  //   });

  d3.select("#chart").selectAll("div")
	   .data(array)
	   .enter()
	   .append("div")
	   .attr("class","Bar")
     .style("height",
	     function(d) {
		       return d + "px";
      });

});
