import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommended-services',
  templateUrl: './recommended-services.page.html',
  styleUrls: ['./recommended-services.page.scss'],
})
export class RecommendedServicesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goBack(){
    this.router.navigate(['./home']);
  }
}
