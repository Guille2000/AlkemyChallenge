import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './platos/pages/home/home.component';
import { PlatoDetalleComponent } from './platos/pages/plato-detalle/plato-detalle.component';
import { BuscadorUtilidadComponent } from './utilidades/buscador-utilidad/buscador-utilidad.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent },
  { path: 'home', canActivate:[AuthGuard], component: HomeComponent },
  { path: 'buscador', component: BuscadorUtilidadComponent, canActivate: [AuthGuard] },
  { path: 'detalles/:id', component: PlatoDetalleComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
