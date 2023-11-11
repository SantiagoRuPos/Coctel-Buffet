import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private authSvc: AuthService, private router: Router) {

  }

  ngOnInit() {
  }
  async onResetPassword(email: any) {
    try {
      await this.authSvc.resetPasswod(email.value);
      this.Confirmacion();
      this.router.navigate(['/Login']);
    } catch (error) {
      console.log(error);
      this.Error();
    }
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

  Confirmacion() {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

    })
    Toast.fire({
      icon: 'info',
      title: 'Revisa tu correo'
    })

  }
}
