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

  constructor(private router: Router,
              private route: ActivatedRoute,
              public toastController: ToastController,
              public loadingController: LoadingController,
              private userService: UserService) { }

  ngOnInit() {
  }

  clickTravelIcon(id) {
    // tslint:disable-next-line: triple-equals
    if (this.iconColor[id] === 1) {
      this.iconColor[id] = 0;
    } else {
      this.iconColor[id] = 1;
    }
  }


  createTrip(form: any) {
    this.isLoading = 1;
    const trip = form.value;
    let travelString = '';
    // tslint:disable-next-line: only-arrow-functions
    this.iconColor.forEach((value) => {
      // tslint:disable-next-line: triple-equals
      if (value === 1) {
        travelString += '0';
      } else {
        travelString += '1';
      }
    });
    // tslint:disable-next-line: max-line-length
    this.userService.createTrip(trip.destination, trip.start_date, trip.start_time, trip.start_venue, trip.end_date, trip.end_time, trip.end_venue, trip.people_count,
      trip.budget_per_person, trip.age, trip.weather, travelString).subscribe(data => {
        this.isLoading = 0;
        this.presentToast('Trip successfully added!', 2000);
      });
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
