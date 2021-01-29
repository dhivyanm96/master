import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-ui-switch';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlightHotelComponent } from './flight-hotel/flight-hotel.component';

@NgModule({
  declarations: [
    AppComponent,
    FlightHotelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    UiSwitchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
