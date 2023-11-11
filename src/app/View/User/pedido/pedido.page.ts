import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {
  order = {
    name: '',
    total: '',
    description: '',
    deliveryAddress: '',
    date: '',
  };

  selectedLiquors: string[] = [];
  selectedAccompaniments: string[] = [];


  liquorOptions: string[] = ['Ron', 'Vodka', 'Tequila', 'Ginebra','Whisky','Brandy '];
  accompanimentOptions: string[] = ['Cerezas', 'Limón', 'Lima', 'Naranja', 'Fresas', 'Mango', 'Piña', 'Coco', 'Plátano'];

  helpFromBartender: boolean = false;
  constructor(private router: Router) { }

  ngOnInit() {

  }

  ContinuarPedido(){
    if (this.selectedLiquors.length >= 1) {
      // Pasa los datos seleccionados como parámetros
      this.router.navigate(['confirmar-pedido'], {
        queryParams: {
          liquors: this.selectedLiquors,
          accompaniments: this.selectedAccompaniments,
          bartenderHelp: this.helpFromBartender
        }
      });
    } else {
      this.Error();
    }


  }
  verificarSeleccionLicores() {
    if (this.selectedLiquors.length > 1) {
      this.Advertencia();
    }
  }
  Advertencia() {

    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,

    })
    Toast.fire({
      icon: 'warning',
      title: 'Cuidado, estas combinando licores'
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
      icon: 'warning',
      title: 'Primero debes de escoger algun licor primero'
    })

  }



  toggleBartenderHelp() {
    if (this.helpFromBartender) {
      this.mostrarAlertaBartender();
    }
  }

  mostrarAlertaBartender() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: 'info',
      title: 'Estamos buscando  bartenders disponibles para guiarte.',
    });
  }


}
