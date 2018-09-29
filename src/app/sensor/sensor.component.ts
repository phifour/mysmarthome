
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html'
})
export class SensorComponent {
  constructor(public restservice: RestService) { }

    plottitle = 'Room Temperature';
    data:any[]=[];
    screenwidth:number = 400;
    screenheight:number = 400;
    xlabel:string='x';
    ylabel:string='y';


  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.restservice.getProducts().subscribe((data: {}) => {
      // this.data = data;
      //console.log(this.data);
      var tmp = [];
      for (var x in data) {
        var y = data[x];
        tmp.push({close:y.temperature,timestamp:y.timestamp});
    }
    console.log('check data', tmp);
    this.data = tmp;
    });
  }




}

