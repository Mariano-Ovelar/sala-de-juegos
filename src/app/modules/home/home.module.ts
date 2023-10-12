import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TarjetaJuegosModule } from './components/tarjeta-juegos/tarjeta-juegos.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, TarjetaJuegosModule],
})
export class HomeModule {}
