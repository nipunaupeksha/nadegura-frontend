import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // tslint:disable-next-line:object-literal-key-quotes
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  });
  private jwtHelper = new JwtHelperService();
  private BACKEND_URL = 'http://127.0.0.1:8080/';


  constructor(private http: HttpClient) { }

  public login(email, password) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post(this.BACKEND_URL + 'users/login', { 'email': email, 'password': password }).pipe(map(res => res));
  }

  public register(firstname, lastname, email, mobile, address, nic, dob, gender, license, occupation, password) {
    return this.http.post(this.BACKEND_URL + 'users/register',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'firstname': firstname, 'lastname': lastname, 'email': email, 'mobile': mobile, 'address': address, 'nic': nic, 'dob': dob, 'gender': gender, 'license': license, 'occupation': occupation, 'password': password }).pipe(map(res => res));
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('token') !== null) {
      const token = localStorage.getItem('token');
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      return false;
    }
  }

  public forgetPassword(email) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post(this.BACKEND_URL + 'users/forgetpassword', { 'email': email }).pipe(map(res => res));
  }

  public checkToken(email, token) {
    // tslint:disable-next-line:object-literal-key-quotes
    return this.http.post(this.BACKEND_URL + 'users/forgetpassword/token', { 'email': email, 'token': token }).pipe(map(res => res));
  }

  public changePassword(email, password) {
    return this.http.post(this.BACKEND_URL + 'users/forgetpassword/changepassword',
      // tslint:disable-next-line:object-literal-key-quotes
      { 'email': email, 'password': password }).pipe(map(res => res));
  }

  // tslint:disable-next-line: max-line-length
  public createTrip(destination, area, district, province, start_date, start_time, start_venue, days, people_count, budget_per_person, age, triptype, travel, userId, created) {
    return this.http.post(this.BACKEND_URL + 'trips/createTrip', { 'destination': destination, 'area': area, 'district': district, 'province': province, 'start_date': start_date, 'start_time': start_time, 'start_venue': start_venue, 'days': days, 'people_count': people_count, 'budget_per_person': budget_per_person, 'age': age, 'triptype': triptype, 'travel': travel, 'userId': userId, 'created': created }).pipe(map(res => res));
  }

  public getDestinations(){
    return this.http.get(this.BACKEND_URL + 'trips/getDestinationList', { headers: this.headers }).pipe(map(res => res));
  }
}
