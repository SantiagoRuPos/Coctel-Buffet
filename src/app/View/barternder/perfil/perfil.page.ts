import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  userProfile = {
    name: 'Federico Valverde',
    email: 'admin@example.com',
    picture: '../../../../assets/resources/fede.jpg'
  };
  constructor(private router: Router) { }
  stars: string[] = Array(5).fill('star');

  ngOnInit() {
  }
  Volver(){
    this.router.navigate(['Admin']);
  }

}
