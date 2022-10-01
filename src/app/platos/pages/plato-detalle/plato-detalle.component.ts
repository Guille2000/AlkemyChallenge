import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.scss']
})
export class PlatoDetalleComponent implements OnInit {


  plato: any;
  constructor(private service: PlatosService, private _route: ActivatedRoute, private spinner: NgxSpinnerService) { }


  ngOnInit(): void {
    let id: any = this._route.snapshot.paramMap.get('id');
    this.spinner.show('mySpinner');
    this.service.detallesPlato(id).subscribe((datos: any) => {
      console.log(datos);
      this.spinner.hide('mySpinner');
      this.plato = datos;
    })
  }



}
