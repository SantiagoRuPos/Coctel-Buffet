import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/AuthService';
import {User} from './../../shared/user.interface';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage  {
 user$: Observable<User | any>= this.authSvc.afAuth.user;
  constructor(private authSvc: AuthService) { }


async  onSendEmail():Promise<void> {
try {

} catch (error) {

}
  }
}
