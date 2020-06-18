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

  public register(firstname, lastname, email, mobile, address, nic, dob, gender, license, occupation, password, role) {
    return this.http.post(this.BACKEND_URL + 'users/register',
      // tslint:disable-next-line:object-literal-key-quotes
      // tslint:disable-next-line: max-line-length
      { 'firstname': firstname, 'lastname': lastname, 'email': email, 'mobile': mobile, 'address': address, 'nic': nic, 'dob': dob, 'gender': gender, 'license': license, 'occupation': occupation, 'password': password, 'role': role }).pipe(map(res => res));
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

  //Trips
  // tslint:disable-next-line: max-line-length
  public createTrip(tripDestinationId, start_date, start_time, start_venue, days, people_count, participants, budget_per_person, ageId, triptype, travel, userId) {
    return this.http.post(this.BACKEND_URL + 'trips/createTrip', { 'tripDestinationId': tripDestinationId, 'start_date': start_date, 'start_time': start_time, 'start_venue': start_venue, 'days': days, 'people_count': people_count, 'participants': participants, 'budget_per_person': budget_per_person, 'ageId': ageId, 'triptype': triptype, 'travel': travel, 'userId': userId }).pipe(map(res => res));
  }
  public getTrips(userId) {
    return this.http.post(this.BACKEND_URL + 'trips/getTrips', { 'userId': userId }, { headers: this.headers }).pipe(map(res => res));
  }
  public joinTrip(participants, buddies, userID, tripId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'trips/joinTrip', { 'participants': participants, 'userID': userID, 'tripId': tripId, 'buddies': buddies }, { headers: this.headers }).pipe(map(res => res));
  }
  public getJoinedTrips(userId) {
    return this.http.post(this.BACKEND_URL + 'trips/getJoinedTrips', { 'userId': userId }, { headers: this.headers }).pipe(map(res => res));
  }
  public getTripsById(tripId) {
    return this.http.post(this.BACKEND_URL + 'trips/getTripsById', { 'tripId': tripId }, { headers: this.headers }).pipe(map(res => res));
  }
  public getDestinations() {
    return this.http.get(this.BACKEND_URL + 'trips/getDestinationList', { headers: this.headers }).pipe(map(res => res));
  }
  public getRecommendedTrips(tripDesinationId, days, participants, budget_per_person, ageId, travel, triptype) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'trips/getRecommendedTrips', { 'tripDesinationId': tripDesinationId, 'days': days, 'participants': participants, 'budget_per_person': budget_per_person, 'ageId': ageId, 'travel': travel, 'triptype': triptype }, { headers: this.headers }).pipe(map(res => res));
  }
  public getAgeValues() {
    return this.http.get(this.BACKEND_URL + 'trips/getAgeList', { headers: this.headers }).pipe(map(res => res));
  }
  public getTravelList() {
    return this.http.get(this.BACKEND_URL + 'trips/getTravelList', { headers: this.headers }).pipe(map(res => res));
  }

  public deleteCreatedTrip(tripId) {
    // tslint:disable-next-line: max-line-length
    return this.http.post(this.BACKEND_URL + 'trips/deleteCreatedTrip', { 'tripId': tripId }, { headers: this.headers }).pipe(map(res => res));
  }
}
