import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  orders: Array<any> = [
    {
      name: 'Pedido 1',
      total: '$50.00',
      description: 'Pedido de prueba 1',
      deliveryAddress: 'Calle 123, Ciudad',
      date:'25/10/2023'
    },
    {
      name: 'Pedido 2',
      total: '$35.00',
      description: 'Pedido de prueba 2',
      deliveryAddress: 'Avenida 456, Ciudad',
      date:'25/10/2023'
    },
    // Agrega más objetos de pedidos según sea necesario
  ];
  constructor(private router: Router) { }

  ngOnInit() {
  }
volver(){
  this.router.navigate(['User']);

}

}
