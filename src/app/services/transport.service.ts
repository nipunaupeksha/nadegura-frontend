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

  public addTransport(transportType, transportName, address, phone, email, userId) {
    return this.http.post(this.BACKEND_URL + 'transports/addTransport',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'transportType': transportType, 'transportName': transportName, 'address': address, 'phone': phone, 'email': email, 'userId': userId }).pipe(map(res => res));
  }
  public getTransportList(userId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/getTransportList', { 'userId': userId }, { headers: this.headers }).pipe(map(res => res));
  }
  public getTransportById(transportId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/getTransportById', { 'transportId': transportId }, { headers: this.headers }).pipe(map(res => res));
  }
  public addVehicle(licensePlate, model, brand, noOfSeats, ac, cdplayer, usb, availability, transportId) {
    return this.http.post(this.BACKEND_URL + 'transports/addVehicle',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'licensePlate': licensePlate, 'model': model, 'brand': brand, 'noOfSeats': noOfSeats, 'ac': ac, 'cdplayer': cdplayer, 'usb': usb, 'availability': availability, 'transportId': transportId }).pipe(map(res => res));

  }
  public updateVehicle(licensePlate, model, brand, noOfSeats, ac, cdplayer, usb, availability, transportId, vehicleId) {
    return this.http.post(this.BACKEND_URL + 'transports/updateVehicle',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'licensePlate': licensePlate, 'model': model, 'brand': brand, 'noOfSeats': noOfSeats, 'ac': ac, 'cdplayer': cdplayer, 'usb': usb, 'availability': availability, 'transportId': transportId, 'vehicleId': vehicleId }).pipe(map(res => res));

  }
  public addDriver(driverName, license, phone, email, transportId, vehicleId) {
    return this.http.post(this.BACKEND_URL + 'transports/addDriver',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'driverName': driverName, 'license': license, 'phone': phone, 'email': email, 'transportId': transportId, 'vehicleId': vehicleId }).pipe(map(res => res));

  }
  public updateDriver(driverName, license, phone, email, transportId, vehicleId) {
    return this.http.post(this.BACKEND_URL + 'transports/updateDriver',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'driverName': driverName, 'license': license, 'phone': phone, 'email': email, 'transportId': transportId, 'vehicleId': vehicleId }).pipe(map(res => res));
  }
  public checkValidityOfVehicle(vehicleId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/checkValidityOfVehicle', { 'vehicleId': vehicleId }, { headers: this.headers }).pipe(map(res => res));

  }
  public checkValidityOfDriver(vehicleId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/checkValidityOfDriver', { 'vehicleId': vehicleId }, { headers: this.headers }).pipe(map(res => res));
  }
  public getDriverDetails(transportId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/getDriverDetails', { 'transportId': transportId }, { headers: this.headers }).pipe(map(res => res));
  }
  public getVehicleDetails(transportId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/getVehicleDetails', { 'transportId': transportId }, { headers: this.headers }).pipe(map(res => res));

  }

  public getTransportDetails(transportId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/getTransportDetails', { 'transportId': transportId }, { headers: this.headers }).pipe(map(res => res));

  }

  public deleteVehicle(vehicleId){
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'transports/deleteVehicle', { 'vehicleId': vehicleId }, { headers: this.headers }).pipe(map(res => res));

  }
}
