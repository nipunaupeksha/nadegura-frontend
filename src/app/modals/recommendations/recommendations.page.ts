import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.page.html',
  styleUrls: ['./recommendations.page.scss'],
})
export class RecommendationsPage implements OnInit {
  passedArray = null;
  travelList = [];
  constructor(
    private modalController: ModalController,
    private router: Router,
    private userService: UserService,
    private navParams: NavParams) {
  }

  goBack() {
    this.router.navigate(['./tripRecommender']);
    this.modalController.dismiss();
  }

  ngOnInit() {
    this.passedArray = this.navParams.get('custom_value');
    this.getTravelValues();
  }

  async closeMedia(){
    await this.modalController.dismiss();
  }

  getTravelValues() {
    this.travelList =[ ];
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

}
