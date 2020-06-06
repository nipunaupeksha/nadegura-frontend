import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['./home']);
  }
  createTrip(){
    this.router.navigate(['./createTrip']);
  }

  tripRecommender(){
    this.router.navigate(['./tripRecommender']);
  }
}
