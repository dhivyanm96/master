import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxSpinnerModule } from "ngx-spinner";


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
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    UiSwitchModule,
    NgxSpinnerModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
