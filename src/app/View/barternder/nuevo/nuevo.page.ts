import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.page.html',
  styleUrls: ['./nuevo.page.scss'],
})
export class NuevoPage implements OnInit {
  order = {
    name: '',
    description: '',
    valor: '',
  };

  selectedLiquors: string[] = [];
  selectedAccompaniments: string[] = [];


  liquorOptions: string[] = ['Ron', 'Vodka', 'Tequila', 'Ginebra','Whisky','Brandy '];
  accompanimentOptions: string[] = ['Cerezas', 'Limón', 'Lima', 'Naranja', 'Fresas', 'Mango', 'Piña', 'Coco', 'Plátano'];

  helpFromBartender: boolean = false;
  name:any;
  description:any;
  valor:any;
  constructor(private route: ActivatedRoute,private router: Router) {

  }



  agregarTopping() {
    if (this.selectedLiquors.length >= 1) {
      // Pasa los datos seleccionados como parámetros
      this.router.navigate(['historial-top'], {
        queryParams: {
          liquors: this.selectedLiquors,
          description: this.description,
          name: this.name
        }
      });
    } else {
      this.Error();
    }
  }

  Cancelar() {
    this.router.navigate(['Admin']);

  }

  ngOnInit() {
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
}
