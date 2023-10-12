import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuienSoyRoutingModule } from './quien-soy-routing.module';
import { QuienSoyComponent } from './quien-soy.component';
import { InfoJuegosModule } from './components/info-juegos/info-juegos.module';

@NgModule({
  declarations: [QuienSoyComponent],
  imports: [CommonModule, QuienSoyRoutingModule, InfoJuegosModule],
})
export class QuienSoyModule {}
