import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { ControlsComponent } from './controls/controls.component';
import { AppComponent } from './app.component';
import { SensorComponent } from './sensor/sensor.component';


const routes: Routes = [
  { path: '',  redirectTo: '/sensor', pathMatch: 'full' },
  { path: "controles", component: ControlsComponent },
  { path: "sensor", component: SensorComponent },
];



export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);