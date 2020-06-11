import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  passedArray = null;
  constructor(
    private modalController: ModalController,
    private router: Router,
    private navParams: NavParams) {

  }

  goBack() {
    this.router.navigate(['./tripRecommender']);
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.passedArray = this.navParams.get('custom_value');
  }

  async closeMedia(){
    await this.modalController.dismiss();
  }

}
