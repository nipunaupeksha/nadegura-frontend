import { ViewAllTripsSelectedPage } from './../view-all-trips-selected/view-all-trips-selected.page';
import { UserService } from './../../services/user.service';
import { ToastController, LoadingController, ModalController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-view-all-trips',
  templateUrl: './view-all-trips.page.html',
  styleUrls: ['./view-all-trips.page.scss'],
})


export class ViewAllTripsPage implements OnInit {
  userId: string;
  tripList = [];
  joinedTripList =[];
  dateDifference = ' ';
  constructor(
    private modalController: ModalController,
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private alertCtrl:AlertController
  ) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
  }

  ngOnInit() {
      this.getTrips();
      this.getJoinedTrips();
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
  async alertCreated(value) {
    const alert = await this.alertCtrl.create({
      header: 'Delete Trip',
      message: 'Are you sure want to delete this trip?',
      buttons: [{
        cssClass: 'alertCustomCss',
        text: 'Yes',
        role: 'Yes',
        handler: () => {
          this.deleteCreatedTrip(value);
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
  async alertJoined(value1,value2,value3) {
    const alert = await this.alertCtrl.create({
      header: 'Unjoin Trip',
      message: 'Are you sure want to unjoin from this trip?',
      buttons: [{
        cssClass: 'alertCustomCss',
        text: 'Yes',
        role: 'Yes',
        handler: () => {
          this.deleteJoinedTrip(value1,value2,value3);
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
  async viewTripDetails(param1,param2,param3,param4,param5){
    const modal = await this.modalController.create({
      component: ViewAllTripsSelectedPage ,
      componentProps: {
        trip_id: param1,
        image_id: param2,
        hotel_id: param3,
        transport_id: param4,
        destination_name: param5
      }
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

  getTrips() {
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

  getJoinedTrips(){
    this.userService.getJoinedTrips(this.userId).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.joinedTripList.push(data['data'][i]);
        }
      }
    });
  }

  getDateDifference(dateSent) {
    let currentDate = new Date();
    dateSent = new Date(dateSent);
    let difference = Math.floor((Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - Date.UTC(dateSent.getFullYear(), dateSent.getMonth(), dateSent.getDate())) / (1000 * 60 * 60 * 24));

    if (difference < 0) {
      this.dateDifference = "Trip is Pending";
    } else if (difference === 0) {
      this.dateDifference = "Trip is Today";
    } else {
      this.dateDifference = "Trip is Overdued";
    }
    return difference;
  }

  getColor(difference) {
    if(difference > 0) {
      return 'red';
    } else if (difference === 0) {
      return '#808000';
    } else {
      return 'green';
    }
  }
  async closeMedia() {
    await this.modalController.dismiss();
  }

  deleteCreatedTrip(value){
    this.userService.deleteCreatedTrip(value).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          //this.joinedTripList.push(data['data'][i]);
        }
      }
    });
  }
  deleteJoinedTrip(value1,value2,value3){
    let x = Number.parseInt(value2)-Number.parseInt(value3);
    this.userService.deleteJoinedTrip(value1,x).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          //this.joinedTripList.push(data['data'][i]);
        }
      }
    });
  }
}

