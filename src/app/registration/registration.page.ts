import { UserService } from './../services/user.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  isErrorInPassword = false;
  isErrorInEmail = false;
  isLoading = 0;
  constructor(private router: Router,
              private route: ActivatedRoute,
              public toastController: ToastController,
              public loadingController: LoadingController,
              private userService: UserService ) { }

  ngOnInit() {
  }



  signin(regemail, regpassword) {
    this.router.navigate(['./login'], { queryParams: { email: regemail, password: regpassword } });
  }

  signUp(form: any) {
    this.isLoading = 1;
    this.isErrorInPassword = false;
    this.isErrorInEmail = false;
    const user = form.value;
    if (user.password !== user.repassword) {
      this.isErrorInPassword = true;
      this.presentToast('Password mismatch!', 4000);
      this.isLoading = 0;
    } else {
        this.userService.register(user.firstname, user.lastname, user.email, user.password).subscribe(data => {
            this.isLoading = 0;
            this.presentToast('Successfully created an Account', 4000).then(() => {
              this.presentToast('Please sign in to the system with your credentials!', 1000).then(() => {
                this.signin(user.email, user.password);
              });
            });
        }, error => {
          // tslint:disable-next-line:no-string-literal
          if ( error['status'] === 401) {
            this.presentToast('This Email already has an account', 2000);
          } else {
            console.log(error);
            this.presentToast('Error Connecting to the Server', 2000);
          }
          this.isLoading = 0;
        });
    }
  }

  async presentToast(msg, dur) {
    const toast = await this.toastController.create({
      message: msg,
      duration: dur,
      buttons: [
        {
          text: 'Close',
          role: 'cancel'
        }
      ]
    });
    toast.present();
    return toast.onDidDismiss();
  }
}
