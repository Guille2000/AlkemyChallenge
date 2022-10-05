import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatosService } from 'src/app/services/platos.service';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.scss']
})
export class PlatoDetalleComponent implements OnInit {


  showSpinner:boolean = false
  plato: any;
  constructor(private service: PlatosService, private _route: ActivatedRoute) { }


  ngOnInit(): void {
    let id: any = this._route.snapshot.paramMap.get('id');
    this.showSpinner = true
    this.service.detallesPlato(id).subscribe((datos: any) => {
      this.showSpinner = false
      this.plato = datos;
    })
  }



}
