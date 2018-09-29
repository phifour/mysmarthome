
import { Component, OnInit } from '@angular/core';
import { RestService } from './rest.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public restservice: RestService) {
    this.state = {humidity: -1, temperature: " -1", timestamp: "null"};
   }

  title = 'mysmarthome';
  plottitle = 'Room Temperature';
  state:any;
  screenwidth:number = 400;
  screenheight:number = 400;
  xlabel:string='x';
  ylabel:string='y';



  ngOnInit() {
    this.getstate();
  }

  getstate() {
    this.restservice.getstate().subscribe((data: {}) => {
      this.state = data;
    console.log('check data', data);

    });
    
  }


}

