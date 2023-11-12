import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HistorialTopping } from 'src/app/shared/HistorialTopping.interface';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.page.html',
  styleUrls: ['./historial.page.scss'],
})
export class HistorialPage implements OnInit {
  constructor(private route: ActivatedRoute,private router: Router) {

  }
  description: any;
  name: any;
  total: any;

  order = {
    name: '',
    description: '',
    valor: '',
  };

  orders: Array<any> = [
    {
      name: 'Pedido 1',
      total: '$50.00',
      description: 'Pedido de prueba 1',
      calificacion: '5',
    },
    {
      name: 'Pedido 2',
      total: '$50.00',
      description: 'Pedido de prueba 2',
      calificacion: '4',
    },
    // Agrega más objetos de pedidos según sea necesario
  ];

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.total = params['valor'] || '';
      this.description = params['description'] || '';
      this.name = params['name'] || '';
console.log(this.total);
      // Agregar el nuevo pedido al historial
      if (this.name && this.description && this.total) {
        const newOrder = {
          name: this.name,
          description: this.description,
          total: this.total,
          calificacion: '5', // Puedes asignar una calificación predeterminada o dejarla en blanco
        };
        console.log(this.orders);
        this.orders.push(newOrder);
      }
    });
  }

  volver() {
    this.router.navigate(['Admin']);
  }

  getStars(calificacion: string): string[] {
    const stars: string[] = [];
    const rating = parseFloat(calificacion);

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push('star');
      } else {
        stars.push('star-outline');
      }
    }

    return stars;
  }
}
