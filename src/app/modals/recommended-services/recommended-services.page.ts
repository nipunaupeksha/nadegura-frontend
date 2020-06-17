import { HotelService } from './../../services/hotel.service';
import { TransportService } from './../../services/transport.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, ElementRef } from '@angular/core';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-recommended-services',
  templateUrl: './recommended-services.page.html',
  styleUrls: ['./recommended-services.page.scss'],
})
export class RecommendedServicesPage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    private transportService: TransportService,
    private hotelService: HotelService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private elementRef: ElementRef
  ) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['./home']);
  }

  async closeMedia() {
    await this.modalController.dismiss();
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
