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

  public addHotel(hotelName, email, phone, address,userId) {
    return this.http.post(this.BACKEND_URL + 'hotels/addHotel',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'hotelName': hotelName , 'address': address, 'phone':phone, 'email': email,'userId':userId}).pipe(map(res => res));
  }
}
