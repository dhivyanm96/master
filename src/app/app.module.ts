import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
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
  bootstrap: [AppComponent],
   entryComponents: [FlightHotelComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const customElement = createCustomElement(FlightHotelComponent, { injector });
    customElements.define('app-flight-hotel', customElement);
}

ngDoBootstrap() {}
 }
