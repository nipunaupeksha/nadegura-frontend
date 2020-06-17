import { ViewTransportModalPage } from './../view-transport-modal/view-transport-modal.page';
import { TransportService } from './../../services/transport.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-view-transport-vehicles',
  templateUrl: './view-transport-vehicles.page.html',
  styleUrls: ['./view-transport-vehicles.page.scss'],
})
export class ViewTransportVehiclesPage implements OnInit {
  transportId = '';
  transportName='';
  userId = '';
  transportList=[];
  transportImgList = [];
  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    private transportService: TransportService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private elementRef: ElementRef
  ) { this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id']; }

  ngOnInit() {
    this.transportId = this.navParams.get('transport_id');
    this.transportName = this.navParams.get('transport_name');
    this.getVehicleDetails();
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

  getVehicleDetails() {
    this.transportService.getVehicleDetails(this.transportId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.transportList.push(data['data'][i]);
          this.transportImgList.push(Math.floor(Math.random() * 10) + 1);
        }
      }
    });
  }

  async viewTransportService(param1, param2, param3, param4,param5) {

    const modal = await this.modalController.create({
      component: ViewTransportModalPage,
      componentProps: {
        transport_id: param1,
        transport_type: param2,
        transport_name: param3,
        image_id: param4,
        vehicle_id:param5,
      }
    });
    return await modal.present();
  }
}
