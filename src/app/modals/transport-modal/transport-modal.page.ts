import { TransportService } from './../../services/transport.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-transport-modal',
  templateUrl: './transport-modal.page.html',
  styleUrls: ['./transport-modal.page.scss'],
})
export class TransportModalPage implements OnInit {
  userId = '';
  transportList =[];
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
    this.getTransportList();
    this.presentToast('Hotels Updated', 1000);
  }

  getTransportList(){
    this.transportList = [];
    this.transportService.getTransportList(this.userId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.transportList.push(data['data'][i]);
        }
      }
    });
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
