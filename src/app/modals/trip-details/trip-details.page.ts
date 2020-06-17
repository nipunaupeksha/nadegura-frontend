import { HotelService } from './../../services/hotel.service';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { ImageModalPage } from './../image-modal/image-modal.page';
import { ModalController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {

  selectedTrip = null;
  travelList = [];
  hotelList = [];
  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    initialSlide: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10
  };

  constructor(
    private modalController: ModalController,
    private router: Router,
    private userService: UserService,
    private navParams: NavParams,
    private hotelService: HotelService,
  ) {

  }

  ngOnInit() {
    this.selectedTrip = this.navParams.get('custom_value');
    this.getTravelValues();
    this.getHotelById();
    console.log(this.selectedTrip);
  }

  async closeMedia() {
    await this.modalController.dismiss();
  }

  getHotelById(){
    this.hotelList = [];
    this.hotelService.getHotelById(this.selectedTrip['hotelId']).subscribe(data => {
      // tslint:disable-next-line: no-string-literal
      if (data['data'].length > 0) {
        // tslint:disable
        for (let i in data['data']) {
          // tslint:disable-next-line: no-string-literal
          this.hotelList.push(data['data'][i]);
        }
      }
    });
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


  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img:this.selectedTrip['destination']+'/'+img
      }
    }).then(modal => modal.present());
  }
}
