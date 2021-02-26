import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.services';
import sampleData from '../services/staticData.json';
import { AwsService} from '../services/aws.service';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
  selector: 'app-flight-hotel',
  templateUrl: './flight-hotel.component.html',
  styleUrls: ['./flight-hotel.component.scss'],
  providers: [DataService]
})
export class FlightHotelComponent implements OnInit {

  flightsDetails : any;
  switchView : boolean = false;
  constructor( private data: DataService, private awsService: AwsService,private spinner: NgxSpinnerService ) { }

  ngOnInit() {
    // this.getFlightsDetail();
    this.getAEMurl();
  }


  // async getFlightsDetail(){
  //   this.spinner.show();
  //   this.awsService.getSignedUrlFunc();
  //  await setTimeout (() => {
  //      this.data.getFlightDetailsFromAEM().subscribe(data =>{
  //       this.flightsDetails = data;
  //       this.flightsDetails &&  this.spinner.hide();
  //     });
  //  }, 3000)
  // }

  getAEMurl(){
    this.data.getFlightDetailsFromAEM().subscribe(data =>{
      this.flightsDetails = data;
      this.flightsDetails &&  this.spinner.hide();
    });
  }


  onValueChange(event : any){
    this.switchView = event;
  }

  ngOnDestroy() {
    // this.data.getFlights(this.awsService.getSignedUrlFunc())..
  }
}