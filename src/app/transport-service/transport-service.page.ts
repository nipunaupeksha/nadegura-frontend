import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transport-service',
  templateUrl: './transport-service.page.html',
  styleUrls: ['./transport-service.page.scss'],
})
export class TransportServicePage implements OnInit {

  constructor(private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['./home']);
  }

  viewRecommendedServices() {
    this.router.navigate(['./recommendedServices']);
  }

  async confirmRegistration() {
    const alert = await this.alertCtrl.create({
      header: 'Confirm Registration',
      message: 'Are you sure you want to register your service with "Nade Gura"?',
      buttons: [{
        cssClass: 'alertCustomCss',
        text: 'Yes',
        role: 'yes',
        handler: () => {
          this.success();
        }
      },
      {
        text: 'No',
        role: 'cancel',
        handler: () => { }
      }]
    }
    );
    await alert.present();
  }

  async success() {
    const alert = await this.alertCtrl.create({
      header: 'Success!',
      message: 'Your service is added successfully!',
      buttons: [{
        cssClass: 'alertCustomCss',
        text: 'Okay',
        role: 'okay',
        handler: () => {
          this.viewRecommendedServices();
        }
      },
      ]
    }
    );
    await alert.present();
  }

}
