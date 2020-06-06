import { ImageModalPage } from './../modals/image-modal/image-modal.page';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.page.html',
  styleUrls: ['./trip-details.page.scss'],
})
export class TripDetailsPage implements OnInit {

  sliderOpts = {
    zoom: false,
    slidesPerView: 3,
    initialSlide: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 10
  };

  constructor(private modalController: ModalController) {

  }

  ngOnInit() {
  }


  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        img
      }
    }).then(modal => modal.present());
  }
}
