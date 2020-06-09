import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-all-trips',
  templateUrl: './view-all-trips.page.html',
  styleUrls: ['./view-all-trips.page.scss'],
})
export class ViewAllTripsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['./home']);
  }
}
