import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  Nuevo(){

    this.router.navigate(['nuevo']);
  }
  Historial(){
    this.router.navigate(['historial-top']);
  }
  Perfil(){
    this.router.navigate(['perfil']);
  }
  Salir(){
    this.router.navigate(['Login']);
  }
}
