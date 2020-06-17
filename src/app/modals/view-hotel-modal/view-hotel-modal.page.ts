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
  hotelValidity = 0;
  //ac
  lac = '';
  slac = '';
  dac = '';
  sac = '';

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
    this.imageId = this.navParams.get('image_id');
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

  getHotelDetails() {
    this.hotelDetailsList = [];
    this.hotelService.getHotelDetails(this.hotelId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        this.hotelValidity = 1;
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.hotelDetailsList.push(data['data'][i]);
          this.lac = data['data'][i]['luxuryac'];
          this.slac = data['data'][i]['semiluxuryac'];
          this.dac = data['data'][i]['deluxeac'];
          this.sac = data['data'][i]['suiteac'];
        }
      } else {
        this.hotelValidity = 0;
      }
    });
  }

  getRoomTypes() {
    this.roomList = [];
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

  submitValues(form: any) {
    const v = form.value;

    if (this.hotelValidity == 1) {
      this.hotelService.updateHotel(v.luxuryV, v.semiluxuryV, v.deluxeV, v.suiteV, this.lac, this.slac, this.dac, this.sac, v.adultsV, v.kidsV, v.priceV, this.hotelId).subscribe(data => {
        this.presentToast('Successfully updated', 4000).then(() => {
        });
      }, error => {
        // tslint:disable-next-line:no-string-literal
        if (error['status'] === 401) {
          this.presentToast('Error', 2000);
        } else {
          console.log(error);
          this.presentToast('Error Connecting to the Server', 2000);
        }
      });
    } else if (this.hotelValidity == 0) {
      this.hotelService.addHotelDetails(v.luxuryU, v.semiluxuryU, v.deluxeU, v.suiteU, this.lac, this.slac, this.dac, this.sac, v.adultsU, v.kidsU, v.priceU, this.hotelId).subscribe(data => {
        this.presentToast('Successfully updated', 4000).then(() => {
        });
      }, error => {
        // tslint:disable-next-line:no-string-literal
        if (error['status'] === 401) {
          this.presentToast('Error', 2000);
        } else {
          console.log(error);
          this.presentToast('Error Connecting to the Server', 2000);
        }
      });
    }
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
}
