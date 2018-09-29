import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { routingModule } from "./routing.module";


import { AppComponent } from './app.component';
import { PlotComponent } from './plot/plot.component';
import { ControlsComponent } from './controls/controls.component';
import { SensorComponent } from './sensor/sensor.component';
import { LayoutComponent } from './layout/layout.component';




@NgModule({
  declarations: [
    AppComponent,
    PlotComponent,
    ControlsComponent,
    SensorComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    routingModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


