import { Component, OnInit, Input, OnChanges, SimpleChange  } from '@angular/core';
// declare var math:any; // Magic
declare var d3:any;
//import * as d3 from "d3";


@Component({
    selector: 'app-layout',
    template: `
    <div class="center">
    <h2 *ngIf="data.length > 0"> {{title}} </h2>
    </div>
    <div id="layoutscreen"></div>
  `,
  styleUrls: ['./layout.component.css']})


export class LayoutComponent implements OnInit {

    @Input() values: any;
    @Input() title: string;
    @Input() height: number;
    @Input() width: number;
    @Input() xlabel: number;
    @Input() ylabel: number;

    data: any[];
    datalength:number = 0;
    rooms:any[];

    ngOnInit() {
        this.width = 1000;
        this.height = 1000;
        this.data = [];
        this.rooms = [
            {name:'room1',x:0,y:0,L:200,W:300},
            {name:'room2',x:200,y:300,L:500,W:300}
        ];


        

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
    }


    update() {
        // var data = this.values;
        d3.select("#layoutscreen").selectAll("*").remove();
        
    // set the dimensions and margins of the graph
    var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = this.width - margin.left - margin.right,
        height = this.height - margin.top - margin.bottom;

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
  var svg = d3.select("#layoutscreen").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform","translate(" + margin.left + "," + margin.top + ")");


      for (let i in this.rooms) {
        console.log('valuexxx',this.rooms[i]); // "0", "1", "2",
     }


     for (let i in this.rooms) {

        var room = this.rooms[i];

  svg.append("rect")
                .attr( "x",  room.x)
                .attr( "y", room.y)
                .attr("width",room.W)
                .attr( "height",room.L)
                .attr( "kappa",room.L)
                .style("fill", "blue")
                .on("mousedown", function() {
                    d3.select(this)
                    .style("fill", "red");
                    console.log(this.kappa);
                    // var parser = new DOMParser();
                    // var doc = parser.parseFromString(this, "image/svg+xml");
                    //console.log(doc);
                    console.log(this);
                })
              .on("mouseup", mouseUp)
              .on("click", mouseClick);
            }

            svg.append("text")
                             .attr("x", function(d) { return room.x; })
                             .attr("y", function(d) { return room.y; })
                             .text( function (d) { return "( " + 100 + ", " + 100 +" )"; })
                             .attr("font-family", "sans-serif")
                             .attr("font-size", "20px")
                             .attr("fill", "red");




          
          function mouseUp() {
              console.log("mouseUp");
          }
          
          function mouseClick() {
              console.log("mouseClick");
          }


          function mouseDown() {
            console.log("mouseDown");
        }




        

    }

    }

  
