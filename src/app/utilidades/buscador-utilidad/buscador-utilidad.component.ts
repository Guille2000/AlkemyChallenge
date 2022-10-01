import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador-utilidad',
  templateUrl: './buscador-utilidad.component.html',
  styleUrls: ['./buscador-utilidad.component.scss']
})
export class BuscadorUtilidadComponent implements OnInit {

  arrayPlatos: any = [];
  constructor() { }

  ngOnInit(): void {
  }

  capturarListaPlatos(lista: any) {
    console.log(lista);
    this.arrayPlatos = lista;
  }


}
