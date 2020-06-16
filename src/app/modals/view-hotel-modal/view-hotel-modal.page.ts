import { UserService } from './../../services/user.service';
import { HotelService } from './../../services/hotel.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-view-hotel-modal',
  templateUrl: './view-hotel-modal.page.html',
  styleUrls: ['./view-hotel-modal.page.scss'],
})
export class ViewHotelModalPage implements OnInit {
  userId = '';
  hotelId = '';
  hotelName = '';
  imageId = '';
  hotelDetailsList = [];
  roomList = [];
  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    private hotelService: HotelService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private elementRef: ElementRef
  ) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
  }

  ngOnInit() {
    this.hotelId = this.navParams.get('hotel_id');
    this.hotelName = this.navParams.get('hotel_name');
    this.imageId = this.navParams.get('image_id')
    this.getHotelDetails();
    this.getRoomTypes();
  }


  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  async closeMedia() {
    await this.modalController.dismiss();
  }

  getHotelDetails(){
    this.hotelDetailsList = [];
    this.hotelService.getHotelDetails(this.hotelId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.hotelDetailsList.push(data['data'][i]);
        }
      }
    });
  }

  getRoomTypes(){
    this.roomList=[];
    this.hotelService.getRoomList().subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.roomList.push(data['data'][i]);
        }
      }
    });
  }

}
