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
