import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';
// declare var math:any; // Magic
declare var d3:any;
//import * as d3 from "d3";


@Component({
    selector: 'app-plotfunction',
    template: `
    <div class="center">
    <h2 *ngIf="data.length > 0"> {{title}} </h2>
    </div>
    <div id="plotscreen"></div>
  `,
  styleUrls: ['./plot.component.css']})


    // <div *ngIf="values.length > 0" id="plotscreen"></div>
    // <div *ngIf="values.length < 1">
    //     <h5>No data to plot</h5>
    // </div>
    //    <div id="plotscreen"></div>

export class PlotComponent implements OnInit {

    @Input() values: any;
    @Input() title: string;
    @Input() usedates: number;
    @Input() height: number;
    @Input() width: number;
    @Input() xlabel: number;
    @Input() ylabel: number;

    data: any[];
    datalength:number = 0;

    ngOnInit() {
        this.data = [];
        // this.update(); 
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
      console.log('updating data',this.values,this.width);
        let log: string[] = [];
        this.data = [];
        for (var j = 0; j < this.values.length; j++) {
            this.data.push({close:this.values[j].close,date:this.values[j].timestamp});
        }
        this.datalength = this.values.length;
        
        if (this.datalength > 0) {
            this.update();
        }


        console.log('updating data',this.values);

        // for (let propName in changes) {
        //     console.log('changes',changes);
        // // let changedProp = changes[propName];
        // // let from = JSON.stringify(changedProp.previousValue);
        // // let to =   JSON.stringify(changedProp.currentValue);
        // // log.push( `${propName} changed from ${from} to ${to}`);
        // }
    }


    update() {
        // var data = this.values;
        d3.select("#plotscreen").selectAll("*").remove();
        
// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// parse the date / time
//var parseTime = d3.timeParse("%d-%b-%y");
var parseTime = d3.timeParse("%Y-%m-%d");



// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

  // define the line
  var valueline = d3.line()
  .x(function(d) { return x(d.date); })
  .y(function(d) { return y(d.close); });

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
  var svg = d3.select("#plotscreen").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");

      var cnt = 1;


      // this.data =  [{date:'1-May-12',close:'58.13'},
      // {date:'30-Apr-12',close:'53.98'},
      // {date:'27-Apr-12',close:'67.00'}];



              // format the data
              this.data.forEach(function(d) {
                  //d.date = parseTime(d.date);
                  d.date = cnt;
                  d.close = +d.close;
                  cnt = cnt + 1;
              });

              console.log('this.data',this.data);


 

              
  // Scale the range of the data
  x.domain(d3.extent(this.data, function(d) { return d.date; }));
  y.domain([0, d3.max(this.data, function(d) { return d.close; })]);
  // Add the valueline path
  
  svg.append("path")
      .data([this.data])
      .attr("class", "line")
      .attr("d", valueline);


              // Scale the range of the data

              // Add the valueline path.

              x.domain(d3.extent(this.data, function(d) { return d.date; }));
              y.domain([0, d3.max(this.data, function(d) { return d.close; })]);


              // Add the X Axis
              svg.append("g")
                  .attr("transform", "translate(0," + height + ")")
                  .call(d3.axisBottom(x));

              // Add the Y Axis
              svg.append("g")
                  .call(d3.axisLeft(y));

            //  });

    }

  }
