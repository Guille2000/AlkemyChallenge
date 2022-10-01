import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscadorUtilidadComponent } from './utilidades/buscador-utilidad/buscador-utilidad.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/pages/login/login.component';
import { HomeComponent } from './platos/pages/home/home.component';
import { AcumuladorComponent } from './platos/pages/acumulador/acumulador.component';
import { ItemPlatoComponent } from './platos/pages/item-plato/item-plato.component';
import { BuscadorComponent } from './platos/pages/buscador/buscador.component';
import { PlatoDetalleComponent } from './platos/pages/plato-detalle/plato-detalle.component';
import { SionoPipe } from './pipes/siono.pipe';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './utilidades/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BuscadorUtilidadComponent,
    LoginComponent,
    HomeComponent,
    BuscadorUtilidadComponent,
    AcumuladorComponent,
    ItemPlatoComponent,
    BuscadorComponent,
    PlatoDetalleComponent,
    SionoPipe,
    NavbarComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
