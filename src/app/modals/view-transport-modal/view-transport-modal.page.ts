import { UserService } from './../../services/user.service';
import { TransportService } from './../../services/transport.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-view-transport-modal',
  templateUrl: './view-transport-modal.page.html',
  styleUrls: ['./view-transport-modal.page.scss'],
})
export class ViewTransportModalPage implements OnInit {
  userId = '';
  transportId = ' ';
  transportName = ' ';
  transportType = ' ';
  imageId = '';
  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    private transportService: TransportService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private elementRef: ElementRef
  ) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
   }

  ngOnInit() {
    this.transportId = this.navParams.get('transport_id');
    this.transportType = this.navParams.get('transport_type');
    this.transportName = this.navParams.get('transport_name');
    this.imageId = this.navParams.get('image_id');
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

  async closeMedia() {
    await this.modalController.dismiss();
  }

}
