import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) {

  }
  ngOnInit() {
  }
  async onlogin(email: any, password: any) {
    try {

      const user = await this.authSvc.login(email.value, password.value);

      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        console.log('isVerified->', isVerified);
        this.redirectUser(isVerified);
      }else{
this.Error();
      }
    } catch (error) {
      console.log(error);

    }
  }
  redirectUser(isVerified: boolean) : void{
    if (isVerified) {
      this.router.navigate(['Admin']);
    } else {
      this.router.navigate(['User']);
    }
  }
  onpassword(){
    this.router.navigate(['forgot-password']);
  }

  Error() {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

    })
    Toast.fire({
      icon: 'error',
      title: 'Hubo algun error Vuelve a intentarlo'
    })

  }

}
