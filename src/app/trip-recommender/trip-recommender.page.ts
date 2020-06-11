import { RecommendationsPage } from './../modals/recommendations/recommendations.page';
import { LoadingController, ToastController, ModalController } from '@ionic/angular';
import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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
  recommendedTrips = [];

  createdTrip: string; //createdTrip=C JoinedTrip=J
  iconColor: any = [1, 1, 1, 1, 1, 1];
  valuesAdded = 0;
  ageGroupSelected: number;
  userId: string;

  triptype = 1;//1:public 2:private
  destinationDestination: string;
  destinationArea: string;
  destinationDistrict: string;
  destinationProvince: string;

  constructor(
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService,
    private modalController: ModalController
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

  async openModal(){
    const modal = await this.modalController.create({
      component: RecommendationsPage,
      componentProps: {
        custom_value: this.recommendedTrips
      }
    });
    return await modal.present();
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

    this.userService.getRecommendedTrips(this.destinationList[this.destinationSelect]['tripDestinationId'], trip.days, trip.participants, trip.budget_per_person, this.ageGroup[this.ageGroupSelected - 1]['ageId'], travelMode, this.triptype).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.recommendedTrips.push(data['data'][i]);
        }
      }
    });
    
    this.openModal();
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
