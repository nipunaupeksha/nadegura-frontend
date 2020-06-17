import { UserService } from './../../services/user.service';
import { TransportService } from './../../services/transport.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-view-transport-modal',
  templateUrl: './view-transport-modal.page.html',
  styleUrls: ['./view-transport-modal.page.scss'],
})
export class ViewTransportModalPage implements OnInit {
  userId = '';
  transportId = ' ';
  vehicleId = '';
  driverId = '';
  transportName = ' ';
  transportType = ' ';
  imageId = '';

  driverValidity = 0;
  vehicleValidity = 0;

  driverDetails = [];
  vehicleDetails = [];

  usbValue = '';
  acValue = '';
  cdValue = '';
  available = '';

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
    this.vehicleId = this.navParams.get('vehicle_id');
    //this.driverId = this.navParams.get('driver_Id');

    this.checkValidityOfDriver();
    this.checkValidityOfVehicle();

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

  checkValidityOfDriver() {
    this.transportService.checkValidityOfDriver(this.vehicleId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        this.driverValidity = 1;
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.driverDetails.push(data['data'][i]);
        }
      } else {
        this.driverValidity = 0;
      }
    });
  }

  checkValidityOfVehicle() {
    this.transportService.checkValidityOfVehicle(this.vehicleId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        this.vehicleValidity = 1;
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.vehicleDetails.push(data['data'][i]);
          this.usbValue=data['data'][i]['usb'];
          this.acValue = data['data'][i]['ac'];
          this.cdValue=data['data'][i]['cdplayer'];
          this.available = data['data'][i]['availability'];
        }
      } else {
        this.vehicleValidity = 0;
      }
    });
  }

  getDriverDetails() {
    this.transportService.getDriverDetails(this.transportId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.driverDetails.push(data['data'][i]);
        }
      }
    });
  }

  getVehicleDetails() {
    this.transportService.getVehicleDetails(this.transportId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.vehicleDetails.push(data['data'][i]);
        }
      }
    });
  }

  updateDetails(form: any) {
    // let usbVal = 0;
    // let acval = 0;
    // let cdVal = 0;
    // let avail = 0;

    const v = form.value;

    if (this.vehicleValidity == 1 && this.driverValidity == 1) {

      this.transportService.updateVehicle(v.licensePlateV, v.modelV, v.brandV, v.seatsV, this.acValue, this.cdValue, this.usbValue, this.available, this.transportId,this.vehicleId).subscribe(data => {
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

      this.transportService.updateDriver(v.driverNameV, v.driverLicenseV, v.driverPhoneV, v.driverMailV, this.transportId,this.vehicleId).subscribe(data => {
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
    else if (this.vehicleValidity == 0 && this.driverValidity == 1) {
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

      this.transportService.updateDriver(v.driverNameV, v.driverLicenseV, v.driverPhoneV, v.driverMailV, this.transportId,this.vehicleId).subscribe(data => {
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
    else if (this.vehicleValidity == 1 && this.driverValidity == 0) {
      this.transportService.updateVehicle(v.licensePlateV, v.modelV, v.brandV, v.seatsV, this.acValue, this.cdValue, this.usbValue, this.available, this.transportId,this.vehicleId).subscribe(data => {
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

      this.transportService.addDriver(v.driverNameU, v.driverLicenseU, v.driverPhoneU, v.driverMailU, this.transportId,this.vehicleId).subscribe(data => {
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
    else if (this.vehicleValidity == 0 && this.driverValidity == 0) {
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
      this.transportService.addDriver(v.driverNameU, v.driverLicenseU, v.driverPhoneU, v.driverMailU, this.transportId,this.vehicleId).subscribe(data => {
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
}
