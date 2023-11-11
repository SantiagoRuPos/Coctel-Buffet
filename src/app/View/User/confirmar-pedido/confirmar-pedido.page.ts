import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-confirmar-pedido',
  templateUrl: './confirmar-pedido.page.html',
  styleUrls: ['./confirmar-pedido.page.scss'],
})
export class ConfirmarPedidoPage implements OnInit {
  MetodoPago: string[] = ['Bancolombia', 'Nequi', 'PSE', 'Efectivo'];
  paymentMethod: string = '';
  liquors: string[] = [];
  accompaniments: string[] = [];
  bartenderHelp: boolean = false;
  order = {
    description: '',
    deliveryAddress: '', // Propiedad para almacenar la dirección
  };

  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.liquors = params['liquors'] || [];
      this.accompaniments = params['accompaniments'] || [];
      this.bartenderHelp = params['bartenderHelp'] || false;
      console.log('Licores seleccionados:', this.liquors);
      console.log('Acompañantes seleccionados:', this.accompaniments);
      console.log('Ayuda del bartender:', this.bartenderHelp);
    });
  }
  ediatPedido(){
    this.router.navigate(['pedido'], {
      queryParams: {
        liquors: this.liquors,
        accompaniments: this.accompaniments,
        bartenderHelp: this.bartenderHelp
      }
    });
  }
  HacerPedido(){
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

    })
    Toast.fire({
      icon: 'success',
      title: 'Pedido Generado.'

    })
    this.router.navigate(['User'])
  }
}
