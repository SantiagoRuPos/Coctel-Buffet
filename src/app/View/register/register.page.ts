import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {



  constructor(private authSvc: AuthService, private router: Router) {

  }
  ngOnInit() {
  }
  async onRegister(email: any, password: any) {
    try {
      const user = await this.authSvc.register(email.value, password.value);
      if (user) {
        console.log('user->', user);
        this.RegistroExitoso();
        this.router.navigate(['Login']);
      } else {
        this.Error();
      }
    } catch (error) {
      console.log(error);
      this.Error();

    }
  }
  RegistroExitoso() {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

    })
    Toast.fire({
      icon: 'success',
      title: 'Usuario Registrado Exitosamente'
    })

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
