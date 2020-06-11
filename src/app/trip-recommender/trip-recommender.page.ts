import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-trip-recommender',
  templateUrl: './trip-recommender.page.html',
  styleUrls: ['./trip-recommender.page.scss'],
})
export class TripRecommenderPage implements OnInit {
  destinationList = [{ 'destination': 'Select destination', 'area': 'area', 'district': 'district', 'province': 'province' }];
  destinationSelect: number;
  tripList = [];
  ageGroup = [];
  travelList = [];

  createdTrip: string; //createdTrip=C JoinedTrip=J
  iconColor: any = [1, 1, 1, 1, 1, 1];
  valuesAdded = 0;
  ageGroupSelected: number;
  userId: string;

  destinationDestination: string;
  destinationArea: string;
  destinationDistrict: string;
  destinationProvince: string;
  constructor(
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService
  ) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
  }

  ngOnInit() {

    this.ageGroupSelected = 1;

    this.createdTrip = 'J';
    this.destinationSelect = 0;
    this.destinationDestination = 'Select destination';
    this.destinationArea = 'area';
    this.destinationDistrict = 'district';
    this.destinationProvince = 'province';
    if (this.valuesAdded === 0) {
      this.getDestinations();
      this.presentToast('Destinations Updated', 1000);
      this.getAgeValues();
      this.presentToast('Age Values Updated', 1000);
      this.getTravelValues();
      this.presentToast('Travel Values Updated', 1000);
    }
  }

  getDestinations() {
    this.userService.getDestinations().subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.destinationList.push(data['data'][i]);
        }
      }
    });
  }

  goBack() {
    this.router.navigate(['./joinTrip']);
  }

  getRecommendedTrips(form: any) {

    const trip = form.value;
    let travelMode = '';
    this.iconColor.forEach((value) => {
      if (value === 0) {
        travelMode = travelMode + 'r';
      } else {
        travelMode = travelMode + 'w';
      }
    });
    this.userService.getRecommendedTrips(this.destinationList[this.destinationSelect]['tripDestinationId'], trip.days, trip.participants, trip.budget_per_person, this.ageGroup[this.ageGroupSelected - 1]['ageId'], travelMode, this.userId).subscribe(data => {
      this.presentToast('Successfully created a trip', 4000).then(() => {
        console.log('Created trip successfully');
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

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  getAgeValues() {
    this.userService.getAgeValues().subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.ageGroup.push(data['data'][i]);
        }
      }
    });
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
    // tslint:disable-next-line: triple-equals
    if (this.iconColor[id] === 1) {
      this.iconColor[id] = 0;
    } else {
      this.iconColor[id] = 1;
    }
  }

  setValues() {
    this.destinationDestination = this.destinationList[this.destinationSelect]['destination'];
    this.destinationArea = this.destinationList[this.destinationSelect]['area'];
    this.destinationDistrict = this.destinationList[this.destinationSelect]['district'];
    this.destinationProvince = this.destinationList[this.destinationSelect]['province'];
  }
}
