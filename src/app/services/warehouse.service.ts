import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  misPlatos: Array<any> = [];

  cantVeganos: number = 0;
  noVegan: number = 0;
  precioTotal: number = 0;
  promedioPreparacion: number = 0;
  promedioHealthScore: number = 0;

  constructor() { }

  addPlato(plato: any): number {
    if (this.misPlatos.length < 4) {
      if (this.validarTipo(plato)) {
        this.misPlatos.push(plato);
        this.calcularAcumulados();
        console.log("Se agrego el plato");
        return 1;
      } else {
        console.log("No puede haber mas de 2 platos veganos");
        return -2;
      }
    } else {
      console.log("No puede haber mas de 4 platos");
      return -1;
    }
  }

  removePlato(plato: any) {
    let index = this.misPlatos.indexOf(plato);
    this.misPlatos.splice(index, 1);
    this.calcularAcumulados();
    console.log("Se quito el plato");
  }


  calcularAcumulados(): void {
    this.precioTotal = 0;
    this.promedioHealthScore = 0;
    this.promedioPreparacion = 0;

    this.misPlatos.forEach((plato: any) => {
      this.precioTotal += plato.pricePerServing;
      this.promedioHealthScore += plato.healthScore;
      this.promedioPreparacion += plato.readyInMinutes;
    });

    let cantidadPlatos = this.misPlatos.length;
    this.promedioHealthScore = this.promedioHealthScore / cantidadPlatos;
    this.promedioPreparacion = this.promedioPreparacion / cantidadPlatos;
    this.calcularVeganos();
  }

  validarTipo(plato: any): boolean {
    if (plato.vegan) {
      if (this.cantVeganos < 2) {
        return true
      }
    } else {
      if (this.noVegan < 2) {
        return true;
      }
    }
    return false;
  }

  calcularVeganos(): void {
    this.cantVeganos = 0;
    this.noVegan = 0;
    this.misPlatos.forEach((plato: any) => {
      if (plato.vegan) {
        this.cantVeganos++
      } else {
        this.noVegan++;
      }
    })
  }

  vaciarPlatos() {
    this.misPlatos = [];
    this.calcularAcumulados();
  }

}
