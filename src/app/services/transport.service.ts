import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransportService {

  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private jwtHelper = new JwtHelperService();
  private BACKEND_URL = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }

  public addTransport(transportType, transportName, address, phone, email, userId){
    return this.http.post(this.BACKEND_URL + 'transports/addTransport',
    // tslint:disable-next-line:object-literal-key-quotes
    // tslint:disable-next-line: max-line-length
    { 'transportType': transportType, 'transportName': transportName, 'address': address, 'phone':phone, 'email': email,'userId':userId}).pipe(map(res => res));
  }

  public getTransportList(userId){
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/getTransportList',{'userId': userId}, { headers: this.headers }).pipe(map(res => res));
  }

  public getTransportById(transportId){
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/getTransportById',{'transportId': transportId}, { headers: this.headers }).pipe(map(res => res));
  }
}
