import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {
  email = '';
  token = '';
  emailSuccess = false;
  tokenSuccess = false;
  password = '';
  retypePassword = '';
  constructor(private router: Router,) { }

  ngOnInit() {
  }
  login() {
    this.emailSuccess = false;
    this.tokenSuccess = false;
    this.router.navigate(['./login']);
  }

}
