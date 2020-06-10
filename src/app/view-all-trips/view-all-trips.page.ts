import { UserService } from './../services/user.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-view-all-trips',
  templateUrl: './view-all-trips.page.html',
  styleUrls: ['./view-all-trips.page.scss'],
})
export class ViewAllTripsPage implements OnInit {
  userId: string;
  tripList = [];
  tripAdded = 0;
  dateDifference = ' ';
  constructor(
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService
  ) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
  }

  ngOnInit() {
    if (this.tripAdded === 0) {
      this.getTrips();
      this.presentToast('Trips Updated', 3000);
    }
  }

  goBack() {
    this.router.navigate(['./home']);
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
