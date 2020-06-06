import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trip-recommender',
  templateUrl: './trip-recommender.page.html',
  styleUrls: ['./trip-recommender.page.scss'],
})
export class TripRecommenderPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack() {
    this.router.navigate(['./joinTrip']);
  }
}
