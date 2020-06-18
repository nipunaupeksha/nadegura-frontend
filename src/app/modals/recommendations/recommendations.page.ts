import { TripDetailsPage } from './../trip-details/trip-details.page';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { partitionArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  passedArray = null;
  travelList = [];
  selectedTrip = [];
  selecedValue: number;
  buddies='';
  constructor(
    private modalController: ModalController,
    private router: Router,
    private userService: UserService,
    private navParams: NavParams) {
  }


  async openModal() {
    const modal = await this.modalController.create({
      component: TripDetailsPage,
      componentProps: {
        custom_value: this.selectedTrip,
        buddies: this.buddies
      }
    });
    return await modal.present();
  }

  goBack() {
    this.router.navigate(['./tripRecommender']);
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.selecedValue = -1;
    this.passedArray = this.navParams.get('custom_value');
    this.buddies = this.navParams.get('buddies');
    this.getTravelValues();
  }

  async closeMedia() {
    await this.modalController.dismiss();
  }

  getTravelValues() {
    this.travelList = [];
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

  getSelectedTrip(i) {
    this.selectedTrip = this.passedArray[i];
    //this.printArray();
    this.openModal();
  }

  printArray(){
    for (let x in this.selectedTrip){
      console.log(x);
    }
  }
}
