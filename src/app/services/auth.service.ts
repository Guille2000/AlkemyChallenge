import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { WarehouseService } from './warehouse.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser: any;

  private urlLogin: string = environment.urlLogin;
  constructor(private httpClient: HttpClient,
   private router: Router, private calculo: WarehouseService) {
    this.iniciarSesion();
  }


  obtenerToken(email: string, password: string) {
    return this.httpClient.post(this.urlLogin, {
      'email': email,
      'password': password
    })
  }

  cerrarSesion() {
    this.currentUser = null;
    localStorage.removeItem('token');
    this.router.navigate(['login']);
    this.calculo.vaciarPlatos();
  }

  iniciarSesion() {
    let token: any = localStorage.getItem('token');
    let decoded: any;
    if (token) {
      decoded = jwtDecode(token);
      this.currentUser = decoded.email;
    }
  }


}
