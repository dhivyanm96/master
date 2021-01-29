import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AwsService} from '../services/aws.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private awsUrl : AwsService) {} 
  
  getFlights(signedUrl){
    return this.http.get(signedUrl);
    
  }
  
}