import { ViewHotelModalPage } from './../view-hotel-modal/view-hotel-modal.page';
import { Router } from '@angular/router';
import { HotelService } from './../../services/hotel.service';
import { LoadingController, ToastController, NavParams, ModalController } from '@ionic/angular';
import { UserService } from './../../services/user.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-hotel-modal',
  templateUrl: './hotel-modal.page.html',
  styleUrls: ['./hotel-modal.page.scss'],
})
export class HotelModalPage implements OnInit {
  hotelList = [];
  userId = '';
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
    this.getHotelList();
    this.presentToast('Hotels Updated', 1000);
  }

  async closeMedia() {
    await this.modalController.dismiss();
  }

  getHotelList(){
    this.hotelList = [];
    this.hotelService.getHotelList(this.userId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.hotelList.push(data['data'][i]);
        }
      }
    });
  }

  async viewHotelService(paramValue1, paramValue2){
    const modal = await this.modalController.create({
      component:ViewHotelModalPage,
      componentProps: {
        hotel_id: paramValue1,
        hotel_name: paramValue2
      }
    });
    return await modal.present();
  }

  async presentToast(msg, dur) {
    const toast = await this.toastController.create({
      message: msg,
      duration: dur,
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
    return toast.onDidDismiss();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
