import { TransportService } from './../../services/transport.service';
import { HotelService } from './../../services/hotel.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-view-all-trips-selected',
  templateUrl: './view-all-trips-selected.page.html',
  styleUrls: ['./view-all-trips-selected.page.scss'],
})
export class ViewAllTripsSelectedPage implements OnInit {
  userId = '';
  imageId = '';
  destination_name='';
  // tslint:disable-next-line: variable-name
  trip_id = '';
  hotel_id = '';
  transport_id = '';

  selectedTrip = [];
  hotelDetails = [];
  transportDetails = [];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private elementRef: ElementRef,
    private userService: UserService,
    private hotelService: HotelService,
    private transportService: TransportService
  ) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
   }

  ngOnInit() {
    this.imageId = this.navParams.get('image_id');
    this.trip_id =  this.navParams.get('trip_id');
    this.destination_name = this.navParams.get('destination_name');
    this.hotel_id = this.navParams.get('hotel_id');
    this.transport_id = this.navParams.get('transport_id');
    this.getTripById();
    this.getHotelById();
    this.getTransportById();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getTripById() {
    this.selectedTrip = [];
    this.userService.getTripsById(this.trip_id).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.selectedTrip.push(data['data'][i]);
        }
      }
    });
  }

  getHotelById(){
    this.hotelDetails = [];
    this.hotelService.getHotelById(this.hotel_id).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.hotelDetails.push(data['data'][i]);
        }
      }
    });
  }

  getTransportById(){
    this.transportDetails = [];
    this.transportService.getTransportById(this.transport_id).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.transportDetails.push(data['data'][i]);
        }
      }
    });
  }

  async closeMedia() {
    await this.modalController.dismiss();
  }


}
