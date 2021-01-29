import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.services';
import sampleData from '../services/staticData.json';
import { AwsService} from '../services/aws.service';


@Component({
  selector: 'app-flight-hotel',
  templateUrl: './flight-hotel.component.html',
  styleUrls: ['./flight-hotel.component.css'],
  providers: [DataService]
})
export class FlightHotelComponent implements OnInit {

  flightsDetails :any;
  switchView : boolean =false;
  constructor( private data: DataService, private awsService: AwsService ) { }

  ngOnInit() {
    this.awsService.getSignedUrlFunc();
    setTimeout (() => {
      console.log("Hello from setTimeout");
      this.data.getFlights(this.awsService.getSignedUrlFunc()).subscribe(data =>{
        this.flightsDetails = data;
        console.log(this.flightsDetails,"getFlightsgetFlightsgetFlightsgetFlightsgetFlights");
      });
   }, 3000)
  }


  onValueChange(event : any){
    console.log(event);
    this.switchView = event;
  }

}