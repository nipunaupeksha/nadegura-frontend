import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-service-select',
  templateUrl: './service-select.page.html',
  styleUrls: ['./service-select.page.scss'],
})
export class ServiceSelectPage implements OnInit {

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  selectHotelServices(){

  }

  selectTransportServices(){

  }

  async closeMedia(){
    await this.modalController.dismiss();
  }
}
