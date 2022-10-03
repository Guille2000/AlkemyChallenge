import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { PlatosService } from 'src/app/services/platos.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  @Output() listaPlatos: EventEmitter<any> = new EventEmitter<any>();

  showSpinner:boolean = false
  sinResultados:boolean = false

  constructor(private service: PlatosService, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }


  buscarPlatos() {
    let busqueda: string = (<HTMLInputElement>document.getElementById('txtBuscar')).value;
    if (busqueda.length < 2) {
      Swal.fire({
        toast: true,
        position: 'top-right',
        iconColor: 'black',
        customClass: {
          popup: 'colored-toast'
        },
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        icon: 'error',
        title: 'Tiene que ingresar al menos 2 letras para realizar la busqueda'
      })
    } else {
      this.showSpinner = true
      this.service.obtenerPlatos(busqueda).subscribe((data: any) => {
        console.log(data.results)
        if(data.results.length == 0){
          console.log('No hay nada')
          this.sinResultados = true
        } else {
          this.sinResultados = false
        }
        this.showSpinner = false
        this.listaPlatos.emit(data.results);
      })
    }
  }

  onKeyUp(event: any) {
    if (event.keyCode == 13) {
      this.buscarPlatos();
    }
  }

}
