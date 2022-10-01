import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  private baseUrl: string = environment.baseUrl;
  private apikeyMia: string = environment.apiKey;

  constructor(private httpClient: HttpClient) { }

  obtenerPlatos(busqueda: string) {
    return this.httpClient.get<any>(`${this.baseUrl}recipes/complexSearch?apiKey=${this.apikeyMia}&query=${busqueda}&addRecipeInformation=true&addRecipeNutrition=true`);
  }

  detallesPlato(id: any) {
    return this.httpClient.get<any>(`${this.baseUrl}recipes/${id}/information?apiKey=${this.apikeyMia}`);
  }

}
