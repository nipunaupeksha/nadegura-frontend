import { TransportService } from './../../services/transport.service';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.page.html',
  styleUrls: ['./add-vehicle.page.scss'],
})
export class AddVehiclePage implements OnInit {
  userId = '';
  usbValue = '';
  acValue = '';
  cdValue = '';
  available = '';
  transportId = ' ';
  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    private transportService: TransportService,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private elementRef: ElementRef
  ) {this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id']; }

  ngOnInit() {
    this.transportId = this.navParams.get('transport_id');
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
  updateDetails(form: any) {
    const v = form.value;
    // tslint:disable-next-line: max-line-length
    this.transportService.addVehicle(v.licensePlateU, v.modelU, v.brandU, v.seatsU, this.acValue, this.cdValue, this.usbValue, this.available, this.transportId).subscribe(data => {
      this.presentToast('Successfully Added', 4000).then(() => {
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
