import { UserService } from './../services/user.service';
import { ToastController, LoadingController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {
  isLoading = 0;
  iconColor: any = [1, 1, 1, 1, 1, 1];

  ageGroup: object[];
  ageGroupSelected: number;

  tripType: object[];
  tripTypeSelected: number;

  constructor(private router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController,
    private userService: UserService) { }

  ngOnInit() {
    this.tripType = [{ id: 1, name: 'Public' }, { id: 2, name: 'Private' }];
    this.ageGroup = [
      { id: 1, name: 'Age < 15 years' },
      { id: 2, name: '15 years < Age < 25 years' },
      { id: 3, name: '25 years < Age < 35 years' },
      { id: 4, name: '35 years < Age < 45 years' },
      { id: 5, name: '45 years < Age < 55 years' },
      { id: 6, name: '55 years < Age < 65 years' },
      { id: 7, name: '65 years < Age < 75 years' },
      { id: 7, name: 'Age > 75 years' },];

    this.ageGroupSelected = 1;
    this.tripTypeSelected = 2;
  }

  clickTravelIcon(id) {
    // tslint:disable-next-line: triple-equals
    if (this.iconColor[id] === 1) {
      this.iconColor[id] = 0;
    } else {
      this.iconColor[id] = 1;
    }
  }


  goBack() {
    this.router.navigate(['./joinTrip']);
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
