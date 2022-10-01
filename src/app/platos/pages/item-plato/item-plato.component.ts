import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WarehouseService } from 'src/app/services/warehouse.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-item-plato',
  templateUrl: './item-plato.component.html',
  styleUrls: ['./item-plato.component.scss']
})
export class ItemPlatoComponent implements OnInit {
  private Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'black',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true
  })

  @Input() plato: any;
  @Input() isInMisPlatos: boolean = false;
  constructor(private router: Router, private wh: WarehouseService) { }

  ngOnInit(): void {
  }

  verDetalles(id: any) {
    this.router.navigate(['detalles/' + id]);
  }

  agregarPlato(plato: any) {
    let rta: number = this.wh.addPlato(plato);

    if (rta == 1) {
      this.Toast.fire({
        icon: 'success',
        title: 'El plato se ha añadido correctamente'
      })
    } else if (rta == -1) {
      this.Toast.fire({
        icon: 'error',
        title: 'El limite son 4 platos',
      })
    } else {
      this.Toast.fire({
        icon: 'error',
        title: 'Solo se permiten dos platos veganos y dos no veganos'
      })
    }
  }

  eliminarPlato(plato: any) {
    this.wh.removePlato(plato);
    this.Toast.fire({
      icon: 'warning',
      title: 'Se elimino el plato correctamente'
    })
  }

}
