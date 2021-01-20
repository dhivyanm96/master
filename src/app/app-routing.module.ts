import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlightHotelComponent } from './flight-hotel/flight-hotel.component';

const routes: Routes = [
  { path: '',   redirectTo: '/flights', pathMatch: 'full' },
  { path: 'flights', component: FlightHotelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
