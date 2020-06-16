import { TransportService } from './../../services/transport.service';
import { UserService } from './../../services/user.service';
import { HotelService } from './../../services/hotel.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-service-select',
  templateUrl: './service-select.page.html',
  styleUrls: ['./service-select.page.scss'],
})
export class ServiceSelectPage implements OnInit {
  selectService: null;
  userId = '';
  travelList = [];
  iconColor: any = [1, 1, 1, 1, 1, 1];

  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    private hotelService: HotelService,
    private transportService: TransportService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.selectService = this.navParams.get('custom_value');
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
    this.getTravelValues();
  }

  selectHotelServices() {
    this.router.navigate(['./hotelService']);
    this.modalController.dismiss();
  }

  selectTransportServices() {
    this.router.navigate(['./transportService']);
    this.modalController.dismiss();
  }

  getTravelValues() {
    this.userService.getTravelList().subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.travelList.push(data['data'][i]);
        }
      }
    });
  }

  clickTravelIcon(id) {
    //tslint:disable-next-line: triple-equals
    if (this.iconColor[id] === 1) {
      for(let i=0;i<this.iconColor.length;i++){
        this.iconColor[i] = 1;
      }
      this.iconColor[id] = 0;
    }
    else {
      this.iconColor[id] = 1;
    }

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
    const address = hotel.line1 + ',' + hotel.line2 + ',' + hotel.line3;
    this.hotelService.addHotel(hotel.name, address, hotel.phone, hotel.email, this.userId).subscribe(data => {
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

  registerTransport(form: any) {
    const transport = form.value;
    let address = transport.line1 + ',' + transport.line2 + ',' + transport.line3;
    console.log(address);
    let travelMode = '';
    this.iconColor.forEach((value) => {
      if (value === 0) {
        travelMode = travelMode + 'r';
      } else {
        travelMode = travelMode + 'w';
      }
    });
    
    this.transportService.addTransport(travelMode, transport.name, address, transport.phone, transport.email, this.userId).subscribe(data => {
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
