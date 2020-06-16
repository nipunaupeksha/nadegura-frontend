import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private jwtHelper = new JwtHelperService();
  private BACKEND_URL = 'http://127.0.0.1:8080/';
  constructor(private http: HttpClient) { }

  public addHotel(hotelName, address, phone, email,userId) {
    return this.http.post(this.BACKEND_URL + 'hotels/addHotel',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'hotelName': hotelName , 'address': address, 'phone':phone, 'email': email,'userId':userId}).pipe(map(res => res));
  }

  public getHotelList(userId){
    return this.http.post(this.BACKEND_URL + 'hotels/getHotelList',{'userId': userId}, { headers: this.headers }).pipe(map(res => res));
  }

  public getHotelDetails(hotelId){
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'hotels/getHotelDetails',{'hotelId': hotelId}, { headers: this.headers }).pipe(map(res => res));
  }

  public getRoomList(){
    return this.http.get(this.BACKEND_URL + 'hotels/getRoomList', { headers: this.headers }).pipe(map(res => res));
  }

  public getHotelById(hotelId){
    return this.http.post(this.BACKEND_URL + 'hotels/getHotelById',{'hotelId': hotelId}, { headers: this.headers }).pipe(map(res => res));
  }
}
