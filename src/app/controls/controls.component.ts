
import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html'
})
export class ControlsComponent {
  constructor(public restservice: RestService) { }


  ngOnInit() {
    this.getProducts();
  }


  click() {
    console.log('klick');
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

    });
    
  }


}

