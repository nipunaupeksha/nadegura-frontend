import { AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.page.html',
  styleUrls: ['./ratings.page.scss'],
})
export class RatingsPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async submitRating() {
    const alert = await this.alertCtrl.create({
      header: 'Thank You!',
      message: 'Thank you for your feedback! Hope you enjoyed the trip with "Nade Gura".',
      buttons: [{
        cssClass: 'alertCustomCss',
        text: 'Okay',
        role: 'okay',
        handler: () => { 

        }
      },]
    }
    );
    await alert.present();
  }

}
