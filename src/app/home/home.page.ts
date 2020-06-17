import { ViewAllTripsPage } from './../modals/view-all-trips/view-all-trips.page';
import { TransportModalPage } from './../modals/transport-modal/transport-modal.page';
import { HotelModalPage } from './../modals/hotel-modal/hotel-modal.page';
import { ServiceSelectPage } from './../modals/service-select/service-select.page';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  roleType = 'hotels';

  constructor(
    private router: Router,
    private modalController: ModalController,
    private alertCtrl: AlertController,
  ) {
    this.roleType = this.getDecodedAccessToken(localStorage.getItem('token'))['role'];
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {

  }


  async openModal(paramToSent) {
    const modal = await this.modalController.create({
      component: ServiceSelectPage,
      componentProps: {
        custom_value: paramToSent
      }
    });
    return await modal.present();
  }

  async viewHotelsModal() {
    const modal = await this.modalController.create({
      component: HotelModalPage,
    });
    return await modal.present();
  }

  async viewTransportModal() {
    const modal = await this.modalController.create({
      component: TransportModalPage,
    });
    return await modal.present();
  }

  signoutUser() {
    localStorage.removeItem('token');
    this.router.navigate(['./login']);
  }

  async signout() {
    const alert = await this.alertCtrl.create({
      header: 'Sign Out?',
      message: 'Are you sure you want to Sign Out from "Nade Gura"?',
      buttons: [{
        cssClass: 'alertCustomCss',
        text: 'Yes',
        role: 'Yes',
        handler: () => {
          this.signoutUser();
        }
      },
      {
        cssClass: 'alertCustomCss',
        text: 'No',
        role: 'no',
        handler: () => {
        }
      }
      ]
    }
    );
    await alert.present();
  }

  joinTrip() {
    this.router.navigate(['./joinTrip']);
  }

  async  viewAllTrips() {
    const modal = await this.modalController.create({
      component: ViewAllTripsPage,
    });
    return await modal.present();
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }
}
