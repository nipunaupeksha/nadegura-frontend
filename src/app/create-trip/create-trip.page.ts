import { UserService } from './../services/user.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {
  // tslint:disable-next-line: object-literal-key-quotes
  destinationList = [{ 'destination': 'Select destination', 'area': 'area', 'district': 'district', 'province': 'province' }];
  valuesAdded = 0;
  destinationSelect: number;
  destinationDestination: string;
  destinationArea: string;
  destinationDistrict: string;
  destinationProvince: string;

  iconColor: any = [1, 1, 1, 1, 1, 1];

  ageGroup = [];
  travelList =[];
  ageGroupSelected: number;

  tripType: object[];
  tripTypeSelected: number;

  userId: string;
  createdTrip: string; //createdTrip=C JoinedTrip=J

  constructor(
    private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService) {
    this.userId = this.getDecodedAccessToken(localStorage.getItem("token"))['user_id'];
  }

  ngOnInit() {
    this.tripType = [{ id: 1, name: 'Public' }, { id: 2, name: 'Private' }];

    this.ageGroupSelected = 1;
    this.tripTypeSelected = 2;
    this.createdTrip = 'C';
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


  goBack() {
    this.router.navigate(['./joinTrip']);
  }

  createTrip(form: any) {
    const trip = form.value;
    let travelMode = '';
    this.iconColor.forEach((value) => {
      if (value === 0) {
        travelMode = travelMode + 'r';
      } else {
        travelMode = travelMode + 'w';
      }
    });
    // tslint:disable-next-line: max-line-length
    this.userService.createTrip(this.destinationList[this.destinationSelect]['tripDestinationId'], trip.start_date, trip.start_time, trip.start_venue, trip.days, trip.people_count, trip.participants, trip.budget_per_person, this.ageGroup[this.ageGroupSelected - 1]['ageId'], this.tripTypeSelected, travelMode, this.userId, this.createdTrip).subscribe(data => {
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

  getTravelValues(){
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
  setValues() {
    this.destinationDestination = this.destinationList[this.destinationSelect]['destination'];
    this.destinationArea = this.destinationList[this.destinationSelect]['area'];
    this.destinationDistrict = this.destinationList[this.destinationSelect]['district'];
    this.destinationProvince = this.destinationList[this.destinationSelect]['province'];
  }


}
