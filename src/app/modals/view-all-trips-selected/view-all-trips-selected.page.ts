import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ModalController, NavParams, ToastController, LoadingController } from '@ionic/angular';
import { Component, OnInit, ElementRef } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-view-all-trips-selected',
  templateUrl: './view-all-trips-selected.page.html',
  styleUrls: ['./view-all-trips-selected.page.scss'],
})
export class ViewAllTripsSelectedPage implements OnInit {
  userId = '';
  imageId = '';
  // tslint:disable-next-line: variable-name
  trip_id = '';
  selectedTrip: any;
  tripList = [];
  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private elementRef: ElementRef,
    private userService: UserService
  ) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
   }

  ngOnInit() {
    this.imageId = this.navParams.get('image_id');
    this.trip_id =  this.navParams.get('trip_id');
    this.getTrips();
    this.selectedTrip = this.tripList[];
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getTrips() {
    this.tripList = [];
    this.userService.getTrips(this.userId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.tripList.push(data['data'][i]);
        }
      }
    });
  }

  async closeMedia() {
    await this.modalController.dismiss();
  }


}
