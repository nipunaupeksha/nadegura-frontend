import { HotelService } from './../../services/hotel.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-service-select',
  templateUrl: './service-select.page.html',
  styleUrls: ['./service-select.page.scss'],
})
export class ServiceSelectPage implements OnInit {
  selectService: null;
  userId='';
  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    private hotelService: HotelService,
    public toastController: ToastController,
    public loadingController: LoadingController) { }

  ngOnInit() {
    this.selectService = this.navParams.get('custom_value');
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
  }

  selectHotelServices() {
    this.router.navigate(['./hotelService']);
    this.modalController.dismiss();
  }

  selectTransportServices() {
    this.router.navigate(['./transportService']);
    this.modalController.dismiss();
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

  registerHotel(form: any) {
    const hotel = form.value;
    const address = hotel.l1 + ',' + hotel.l2 + ',' + hotel.l3;
    this.hotelService.addHotel(hotel.name, address, hotel.phone, hotel.email,this.userId).subscribe(data => {
      this.presentToast('Successfully registered a hotel', 4000);
    }, error => {
      // tslint:disable-next-line:no-string-literal
      if (error['status'] === 401) {
        this.presentToast('error creating hotel', 2000);
      } else {
        console.log(error);
        this.presentToast('Error Connecting to the Server', 2000);
      };
    });
  }

  registerTrip(form:any){
    const transport = form.value;
    const address = transport.l1 + ',' + transport.l2 + ',' + transport.l3;
    this.hotelService.addHotel(transport.name, address, transport.phone, transport.email,this.userId).subscribe(data => {
      this.presentToast('Successfully registered a transport', 4000);
    }, error => {
      // tslint:disable-next-line:no-string-literal
      if (error['status'] === 401) {
        this.presentToast('error creating transport', 2000);
      } else {
        console.log(error);
        this.presentToast('Error Connecting to the Server', 2000);
      };
    });
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
