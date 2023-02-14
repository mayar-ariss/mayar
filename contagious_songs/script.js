/******************* SCROLLER *******************/

const scroller = scrollama();
const fog = d3.select('#fog-container');

scroller
  .setup({
    step: '.trigger' // required - class name of trigger steps
  })
  .onStepEnter(handleStepEnter)
  .onStepExit(handleStepExit);

function handleStepEnter(response){
    // response = { element, direction, index }
    // console.log(`entering index ${response.index}`);
    if(response.direction == 'down'){
        if(response.index == 0){
            fog.transition()
                .duration(1000)
                .style('opacity',0.6);
        }else if(response.index == 1){
            // second text enters
            fog.transition()
                .duration(1000)
                .style('opacity',1);

        }else if(response.index == 2){
            // map enters
            fog.transition()
                .duration(1000)
                .style('opacity',0);

            setTimeout(function() {

                fog.select('#foglayer_01')
                    .classed('animated_01',false);

                fog.select('#foglayer_02')
                    .classed('animated_02',false);
            
            }, 1000);
        }
    }
}

function handleStepExit(response){
    // response = { element, direction, index }
    // console.log(`leaving index ${response.index}`);
    if(response.direction == 'up'){
        if(response.index == 2){
            // map exits
            fog.transition()
                .duration(1000)
                .style('opacity',1);

            fog.select('#foglayer_01')
                .classed('animated_01',true);

            fog.select('#foglayer_02')
                .classed('animated_02',true);

        }else if(response.index == 1){
            // second text exits
            fog.transition()
                .duration(1000)
                .style('opacity',0.6);

            // fog.select('#foglayer_01')
            //     .classed('animated_01',false);

            // fog.select('#foglayer_02')
            //     .classed('animated_02',false);
        }
    }

}

/******************* SPATIAL DIVERSITY *******************/

// set svg size
let pad = d3.select('#map-col').style('padding-left');
pad = parseInt(pad, 10);
const height = window.innerHeight;
const width = window.innerWidth;
const widthMap = d3.select('#map-col').node().clientWidth - (pad*2);

d3.xml('./map/map.svg').then(function(xml) {

    document.getElementById('map-div').appendChild(xml.documentElement);

    d3.select('#map')
        .attr('width',widthMap)
        .attr('height',widthMap);

    d3.select('#east-cities')
        .on('mouseenter',function(){
            highlightMap('east');
        })
        .on('mouseleave',function(){
            d3.select('#east-highlight').selectAll('.st11').classed('active-stroke',false);
            d3.select('#east-highlight').selectAll('.st12').classed('active-stroke',false);
            d3.select('#tooltip-map').select('.tooltip-row').classed('active',false);
        });

    d3.select('#north-cities')
        .on('mouseenter',function(){
            highlightMap('north');
        })
        .on('mouseleave',function(){
            d3.select('#north-highlight').selectAll('.st11').classed('active-stroke',false);
            d3.select('#north-highlight').selectAll('.st12').classed('active-stroke',false);
            d3.select('#north-overlap').classed('active-overlap',false);
            d3.select('#tooltip-map').select('.tooltip-row').classed('active',false);
        });

    d3.select('#south-cities')
        .on('mouseenter',function(){
            highlightMap('south');
        })
        .on('mouseleave',function(){
            d3.select('#south-highlight').selectAll('.st11').classed('active-stroke',false);
            d3.select('#south-highlight').selectAll('.st12').classed('active-stroke',false);
            d3.select('#south-overlap').classed('active-overlap',false);
            d3.select('#tooltip-map').select('.tooltip-row').classed('active',false);
        });

});

function highlightMap(region){

    d3.select(`#${region}-highlight`).selectAll('.st11').classed('active-stroke',true);
    d3.select(`#${region}-highlight`).selectAll('.st12').classed('active-stroke',true);

    const tooltip = d3.select('#tooltip-map').select('.tooltip-row');

    if(region == 'east'){

        tooltip.select('.title-tooltip-english')
            .html('East China')

        tooltip.select('.body-tooltip-english')
            .html('Suffering heavy pollution, this region shows a very high sensitivity. This might be explained as it is one of China’s most developed areas.')

        tooltip.select('.title-tooltip-mandarin')
            .html("华东")

        tooltip.select('.body-tooltip-mandarin')
            .html("面对重度空气污染，该区域“敏感度”很高。这可能在一定程度上是因为该区域是中国最为发达的地区。")

        d3.select('#tooltip-map').select('.tooltip-row')
            .classed('active',true);

    }else if(region == 'south'){

        d3.select('#south-overlap').classed('active-overlap',true);

        tooltip.select('.title-tooltip-english')
            .html('South China')

        tooltip.select('.body-tooltip-english')
            .html('Although it has greater air quality than the North and East China, South China is more exposed to air pollution as its sensitivity is one of the lowest.')

        tooltip.select('.title-tooltip-mandarin')
            .html("华南")

        tooltip.select('.body-tooltip-mandarin')
            .html("尽管华南相较于华东和华北空气质量较好，最低的“敏感度”表明华南地区更多的暴露于空气污染。")
        
        tooltip.classed('active',true);

    }else if(region == 'north'){

        d3.select('#north-overlap').classed('active-overlap',true);

        tooltip.select('.title-tooltip-english')
            .html('North China')

        tooltip.select('.body-tooltip-english')
            .html('This large region presents the worst air quality in the country along with a low sensitivity, which may cause a reduction in life expectancy.')

        tooltip.select('.title-tooltip-mandarin')
            .html("华北")

        tooltip.select('.body-tooltip-mandarin')
            .html("这一片广大区域空气质量最差，与此同时“敏感度”低，所有这些可能导致人均寿命降低。")

        tooltip.classed('active',true);
    }
}


/////////////////////////////////////////////////////////
///////// Code Below For Original Map Creation //////////
/////////////////////////////////////////////////////////

// d3.select('#map')
//     .attr('width',widthMap)
//     .attr('height',widthMap);

// // define variables
// let citys = [];
// let subregions = [];

// const COEFcolor = d3.interpolate('#A47945','#FCEDD0'); 
// const linear = d3.scaleLinear()  
//                 .domain([0,9])  //define current domain range
//                 .range([0,1]);    //transform to 0 1 range

// const mapScale = (width >= 1200) ? 660 : 
//     (width >= 992) ? 550 : 
//     (width >= 768) ? 400 : 
//     (width >= 576) ? 290 : Math.floor(widthMap*0.9);

// const projection = d3.geoMercator()
//     .center([105, 38])
//     .scale(mapScale)
//     .translate([widthMap/2, widthMap/2]);

// const path = d3.geoPath()
//     .projection(projection);

// const areas = [
//     [1,2],
//     [3,4,41],
//     [5,6,51]
// ]

// import data and append elements
// d3.json('./map/china_city.json').then(function(root) {
//     // console.log(root);

//     root.features.forEach(function(d, i) {
//         var centroid = path.centroid(d);
//         centroid.feature = d;
//         citys.push(centroid);
//         subregions.push(d.properties.subregion);
//     });

//     subregions = d3.nest()
//         .key(d => d)
//         .rollup(d => d.length)
//         .entries(subregions);

//     const g = d3.select('#g-map-features');

//     g.selectAll('paths')
//         .data(citys)
//         .enter()
//         .append('path')
//         .attr('class','cities')
//         .attr('d', d => path(d.feature))
//         .attr('fill', function(d,i){
//             if (d.feature.properties.using == 1){
//                 return COEFcolor(linear(d.feature.properties.coeflev-1))}
//             else{
//                 return 'white'}
//         })
//         .attr('stroke', '#E5E5E5')
//         .attr('stroke-width', 0.5);
// });

// append legend over svg
const legendMap = d3.select('#legend-map')
    .style('postition','absolute');

const legendTop = widthMap * 0.9 + 10;

legendMap.append('span')
    .style('position','absolute')
    .style('top',`${legendTop+80}px`)
    .style('left',`${pad+20}px`)
    .style('width','150px')
    .style('height','10px')
    .style('background-image','linear-gradient(to right, #FCEDD0, #A47945)')
    .style('border-radius','5px');

const highLabelX = 150+20-20;

legendMap.selectAll('.map-label')
    .data(['low','high'])
    .enter()
    .append('p')
    .attr('class','map-label')
    .style('top',`${legendTop}px`)
    .style('left',(d,i) => `${i*highLabelX+pad}px`)
    .html(d => `${d}</br>sensitivity</br>to air</br>pollution`);

legendMap.append('p')
    .attr('class','map-label')
    .style('top',`${legendTop}px`)
    .style('left',`${265+pad}px`)
    .html('</br></br>no</br>data');

legendMap.append('span')
    .style('position','absolute')
    .style('top',`${legendTop+80}px`)
    .style('left',`${275+pad}px`)
    .style('width','10px')
    .style('height','10px')
    .style('background-color','white')
    .style('border','1px solid #E5E5E5')
    .style('border-radius','50%');

/******************* ENVIRONMENTAL INJUSTICE *******************/

// set svg size
const widthLineChart = d3.select('#lineChart-col').node().clientWidth - (pad*2);
const heightLineChart = Math.min(350, height);

d3.select('#lineChart')
    .attr('width',widthLineChart)
    .attr('height',heightLineChart);

// set variables
const dataLineChart = [
    {
        city: 'A',
        income: -1.329,
        avgAQI: -1.803,
        sensitivity: -3.132
    },
    {
        city: 'B',
        income: -2.177,
        avgAQI: -0.803,
        sensitivity: 2.980
    }
];

const chartStart = heightLineChart - 30, 
    chartEnd = 12,
    lineWidth = 10;

const maxSensitivity = d3.max(dataLineChart.map(d => Math.abs(d.sensitivity)));

const scaleLineLength = d3.scaleLinear()
    .domain([0, maxSensitivity])
    .range([0, chartStart-chartEnd]);

const colorLine = d3.scaleOrdinal()
    .domain(['income','avgAQI'])
    .range(['#003FFF','#BBCBFB']);

const axisX = Math.max(140,Math.floor(widthLineChart/4));
const remainWidth = widthLineChart-axisX;
const citiesX = Math.min(Math.floor(remainWidth/3),100);

// append elements
const cities = d3.selectAll('.lineChart-city');

cities
    .data(dataLineChart)
    .attr('id',d => `g-city${d.city}`)
    .attr('transform',(d,i) => `translate(${axisX + (i+1) * citiesX},0)`); // make more rigid

cities 
    .append('text')
    .attr('class','lineChart-label')
    .text(d => `city ${d.city}`)
    .attr('x',0)
    .attr('y', chartStart + 20)
    .attr('dy','.35em')
    .style('text-anchor','middle');

cities
    .append('rect')
    .attr('class','income injusticeLines')
    .attr('x',0 - (lineWidth/2))
    .attr('y', d => chartStart - scaleLineLength(Math.abs(d.income)))
    .attr('width',lineWidth)
    .attr('height',d => scaleLineLength(Math.abs(d.income)));

cities
    .append('rect')
    .attr('class','avgAQI injusticeLines')
    .attr('x',0 - (lineWidth/2))
    .attr('y', d => chartStart - 2 - scaleLineLength(Math.abs(d.income+d.avgAQI))) // 2 for spacing between lines
    .attr('width',lineWidth)
    .attr('height',d => scaleLineLength(Math.abs(d.avgAQI)));

d3.selectAll('.injusticeLines')
    .style('fill',function(){
        if(d3.select(this).classed('income')){
            return colorLine('income');
        }else{
            return colorLine('avgAQI');
        }
    })
    .attr('rx',lineWidth/2)
    .attr('ry',lineWidth/2);


const chartAxis= d3.select('#g-lineChart-axis')
    .attr('transform',`translate(${axisX},0)`);

chartAxis
    .append('line')
    .attr('x1',0)
    .attr('x2',0)
    .attr('y1',chartStart)
    .attr('y2',chartEnd-2)
    .style('stroke-width',1)
    .style('stroke','#909090');

chartAxis
    .append('line')
    .attr('x1',0)
    .attr('x2',-10)
    .attr('y1',chartEnd-2)
    .attr('y2',chartEnd+8)
    .style('stroke-width',1)
    .style('stroke','#909090');

chartAxis
    .append('line')
    .attr('x1',0)
    .attr('x2',10)
    .attr('y1',chartEnd-2)
    .attr('y2',chartEnd+8)
    .style('stroke-width',1)
    .style('stroke','#909090');

chartAxis
    .append('text')
    .text('sensitivity')
    .attr('class','lineChart-label')
    .attr('x',-20)
    .attr('y', chartEnd-2)
    .attr('dy','1em')
    .style('text-anchor','end');


const chartLegend= d3.select('#g-lineChart-legend')
    .attr('transform',`translate(0,${chartStart - 40})`);

chartLegend.selectAll('legend-cat')
    .data(['air pollution','income'])
    .enter()
    .append('g')
    .attr('class','legend-cat')
    .attr('transform',(d,i) => `translate(0,${24*i})`)

chartLegend.selectAll('.legend-cat')
    .append('circle')
    .attr('cx',5)
    .attr('cy',5)
    .attr('r',5)
    .style('fill',d => (d == 'income') ? colorLine(d) : colorLine('avgAQI'));

chartLegend.selectAll('.legend-cat')
    .append('text')
    .text(d => d)
    .attr('class','lineChart-label')
    .attr('x',25)
    .attr('y',5)
    .attr('dy','.35em');

/******************* AVOIDANCE BEHAVIOR *******************/

// set svg size
const marginRadar = {top: 20, right: 20, bottom: 20, left: 20},
    widthRadar = d3.select('#radar-col').node().clientWidth - (pad*2) /*- marginRadar.left - marginRadar.right*/,
    heightRadar = widthRadar + 40; // 40 for tooltip

d3.selectAll('.radar')
    .attr('width',widthRadar)
    .attr('height',heightRadar);

d3.selectAll('.g-radar')
    .attr('transform',`translate(${(widthRadar)/2},${(widthRadar)/2})`);

// set variables
const radarData = [
    {
        person: "local",
        activity: "total",
        values: [
            {axis: "AQI", value: -0.203},
            {axis: "PM2.5", value: -0.329},
            {axis: "PM10", value: -0.187},
            {axis: "NO2", value: -0.261},
            {axis: "SO2", value: -0.612}
        ]
    },
    {
        person: "visitor",
        activity: "total",
        values: [
            {axis: "AQI", value: -0.032},
            {axis: "PM2.5", value: -0.059},
            {axis: "PM10", value: -0.035},
            {axis: "NO2", value: -0.062},
            {axis: "SO2", value: -0.075}
        ]
    },
    {
        person: "local",
        activity: "leisure",
        values: [
            {axis: "AQI", value: -0.093},
            {axis: "PM2.5", value: -0.144},
            {axis: "PM10", value: -0.082},
            {axis: "NO2", value: -0.166},
            {axis: "SO2", value: -0.228}
        ]
    },
    {
        person: "local",
        activity: "work",
        values: [
            {axis: "AQI", value: -0.015},
            {axis: "PM2.5", value: -0.026},
            {axis: "PM10", value: -0.017},
            {axis: "NO2", value: -0.030},
            {axis: "SO2", value: -0.052}
        ]
    }
];

const colorRadar = d3.scaleOrdinal()
    .domain(['local-total','visitor-total','local-leisure','local-work'])
    .range(["#003FFF","#7F9FFF","#003FFF","#7F9FFF"]);

let radarOptions = {
    w: widthRadar/2,
    h: heightRadar/2,
    margin: marginRadar,
    maxValue: -0.6,
    levels: 3,
    dotRadius: 3,
    // roundStrokes: true,
    color: colorRadar
  };


// append elements
RadarChart('#g-radar-locals', radarData.filter(d => d.activity == 'total'), radarOptions);

radarOptions.maxValue = -0.23;
radarOptions.levels = 2;
RadarChart('#g-radar-leisure', radarData.filter(d => d.person == 'local' && d.activity != 'total'), radarOptions);

let chart = 'locals';
RadarLegend(chart,[chart,'tourists']);

chart = 'leisure';
RadarLegend(chart,[chart,'work']);

function RadarLegend(chart,data){

    const radarLegend= d3.select(`#g-legend-${chart}`)
        .attr('transform',`translate(0,${heightRadar-40})`);

    radarLegend.selectAll('legend-cat')
        .data(data)
        .enter()
        .append('g')
        .attr('class','legend-cat')
        .attr('transform',(d,i) => `translate(0,${24*i})`)

    radarLegend.selectAll('.legend-cat')
        .append('circle')
        .attr('cx',5)
        .attr('cy',5)
        .attr('r',5)
        .style('fill',d => colorRadar(d));

    radarLegend.selectAll('.legend-cat')
        .append('text')
        .text(d => (chart == 'locals') ? `${d} sensitivity` : `${d} activity sensitivity`)
        .attr('class','lineChart-label')
        .attr('x',25)
        .attr('y',5)
        .attr('dy','.35em');
}

function RadarChart(id, data, options) {
    /////////////////////////////////////////////////////////
    /////////////// The Radar Chart Function ////////////////
    /////////////// Written by Nadieh Bremer ////////////////
    ////////////////// VisualCinnamon.com ///////////////////
    /////////// Inspired by the code of alangrafu ///////////
    //// http://bl.ocks.org/nbremer/21746a9668ffdf6d8242 ////
    /////////////////////////////////////////////////////////
    ////////////// Modified by Sarah Campbell ///////////////

	let cfg = {
	 w: 600,				//Width of the circle
	 h: 600,				//Height of the circle
	 margin: {top: 20, right: 20, bottom: 20, left: 20}, //The margins of the SVG
	 levels: 3,				//How many levels or inner circles should there be drawn
	 maxValue: 0, 			//What is the value that the biggest circle will represent
	 labelFactor: 1.25, 	//How much farther than the radius of the outer circle should the labels be placed
	 wrapWidth: 60, 		//The number of pixels after which a label needs to be given a new line
	 opacityArea: 0.35, 	//The opacity of the area of the blob
	 dotRadius: 4, 			//The size of the colored circles of each blog
	 opacityCircles: 0.1, 	//The opacity of the circles of each blob
	 strokeWidth: 5, 		//The width of the stroke around each blob
	 roundStrokes: false,	//If true the area and stroke will follow a round path (cardinal-closed)
     color: d3.scaleOrdinal(d3.schemeAccent),   //Color function
     radians: 2 * Math.PI,
     factor: 1
	};
	
	//Put all of the options into a variable called cfg
	if('undefined' !== typeof options){
	  for(var i in options){
		if('undefined' !== typeof options[i]){ cfg[i] = options[i]; }
	  }//for i
    }
	
	//If the supplied maxValue is smaller than the actual one, replace by the max in the data
    const maxValue = Math.max(Math.abs(cfg.maxValue), d3.max(data, i => Math.abs(d3.max(i.values.map(o => o.value)))));
		
	const allAxis = (data[0].values.map(i => i.axis)),	//Names of each axis
		total = allAxis.length,					//The number of different axes
        radius = (cfg.w < 150) ?  cfg.w-40 : (cfg.w < 200) ? cfg.w-60  : cfg.w-80,  //Radius of the outermost circle
		Format = d3.format('.0%'),			 	//Percentage formatting
		angleSlice = Math.PI * 2 / total;		//The width in radians of each "slice"

	//Scale for the radius
	const rScale = d3.scaleLinear()
		.range([0, radius])
        .domain([0, maxValue]);

	/////////////////////////////////////////////////////////
	/////////////// Draw the Circular grid //////////////////
    /////////////////////////////////////////////////////////
    
    const g = d3.select(id);
	
	//Wrapper for the grid & axes
	const axisGrid = g.append('g').attr('class', 'axisWrapper');

    //Text indicating at what % each level is
    if(cfg.maxValue < -0.2 && cfg.levels == 2){
        const maxAxisValue = -0.2;
        axisGrid.selectAll('.radar-axis-label')
            .data(d3.range(1,(cfg.levels+1)).reverse())
            .enter().append('text')
            .attr('class', 'radar-axis-label')
            .attr('x', 4)
            .attr('y', d => -d*(radius*(maxAxisValue/cfg.maxValue)/cfg.levels))
            .attr('dy', '0.4em')
            .text(d => Format(Math.abs(maxAxisValue) * d/cfg.levels));

    }else{
        axisGrid.selectAll('.radar-axis-label')
            .data(d3.range(1,(cfg.levels+1)).reverse())
            .enter().append('text')
            .attr('class', 'radar-axis-label')
            .attr('x', 4)
            .attr('y', d => -d*radius/cfg.levels)
            .attr('dy', '0.4em')
            .text(d => Format(maxValue * d/cfg.levels));
    }

	/////////////////////////////////////////////////////////
	//////////////////// Draw the axes //////////////////////
	/////////////////////////////////////////////////////////
	
	//Create the straight lines radiating outward from the center
	var axis = axisGrid.selectAll(".axis")
		.data(allAxis)
		.enter()
		.append("g")
		.attr("class", "axis");
	//Append the lines
	axis.append("line")
		.attr("x1", 0)
		.attr("y1", 0)
		.attr("x2", function(d, i){ return rScale(maxValue*1.1) * Math.cos(angleSlice*i - Math.PI/2); })
		.attr("y2", function(d, i){ return rScale(maxValue*1.1) * Math.sin(angleSlice*i - Math.PI/2); })
		.attr("class", "line");

	//Append the labels at each axis
	axis.append("text")
		.attr("class", "radar-label")
		.attr("text-anchor", "middle")
		.attr("dy", "0.35em")
		.attr("x", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.cos(angleSlice*i - Math.PI/2); })
		.attr("y", function(d, i){ return rScale(maxValue * cfg.labelFactor) * Math.sin(angleSlice*i - Math.PI/2); })
		.text(function(d){return d});

	/////////////////////////////////////////////////////////
	///////////// Draw the radar chart blobs ////////////////
	/////////////////////////////////////////////////////////
	
	//The radial line function
    var radarLine = d3.lineRadial()
        .curve(d3.curveLinearClosed)
		.radius(d => rScale(d.value))
		.angle((d,i) => i*angleSlice);
		
	if(cfg.roundStrokes) {
		radarLine.curve(d3.curveCardinalClosed);
	}
				
	//Create a wrapper for the blobs	
	var blobWrapper = g.selectAll(".radarWrapper")
		.data(data)
        .enter()
        .append("g")
        .attr("class", "radarWrapper")
        .attr('transform','rotate(180)');
		
	//Create the outlines	
	blobWrapper.append('path')
		.attr('class', 'radarStroke')
		.attr('d', function(d,i) { return radarLine(d.values); })
		.style('stroke-width', cfg.strokeWidth + 'px')
        .style('stroke', (d,i) => cfg.color(`${d.person}-${d.activity}`))
        .style('stroke-linejoin', 'round')
	
}
