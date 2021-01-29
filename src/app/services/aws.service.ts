import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as AWS from 'aws-sdk';


var BucketName = 'airlinespocbucket'; //Bucket


AWS.config.region = 'eu-west-2'; // Region
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'eu-west-2:6a1755a2-0de7-4a28-9d3f-4d40cb70e31c',

});

// Create a new service object
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: BucketName }
});

@Injectable({
  providedIn: 'root'
})
export class AwsService {


  constructor(private http: HttpClient) { }


  getSignedUrlFunc() {

    var UrlExpireSeconds = 180 * 1;
    var params = {
      Bucket: BucketName,
      Key: "saleJsonFolder/salepage-v8.json",
      Expires: UrlExpireSeconds
    };
    var url = s3.getSignedUrl('getObject', params);
    console.log('The URL is', url);
    return url;
  }


}