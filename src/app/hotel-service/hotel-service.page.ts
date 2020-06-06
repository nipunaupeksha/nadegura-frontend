import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-hotel-service',
  templateUrl: './hotel-service.page.html',
  styleUrls: ['./hotel-service.page.scss'],
})
export class HotelServicePage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
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
        handler: () => { }
      },
      ]
    }
    );
    await alert.present();
  }
}
