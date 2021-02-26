import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AwsService} from '../services/aws.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  aemUrl = "https://stg.virginatlantic.com/content/dam/vaa/CustomFilerConvertor/sales/salepage-v8.json";
  constructor(private http: HttpClient, private awsUrl : AwsService) {} 
  
  getFlights(signedUrl){
    return this.http.get(signedUrl);
  }

  getFlightDetailsFromAEM(){
    return this.http.get(this.aemUrl)
  }
  
}