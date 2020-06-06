import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage implements OnInit {

  iconColor: any = ['white', 'white', 'white', 'white', 'white', 'white'];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.router.navigate(['./joinTrip']);
  }

  clickTravelIcon(id) {
    // tslint:disable-next-line: triple-equals
    if (this.iconColor[id] == 'white') {
      this.iconColor[id] = 'red';
    } else {
      this.iconColor[id] = 'white';
    }
  }
}
