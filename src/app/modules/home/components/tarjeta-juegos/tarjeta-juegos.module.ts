import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaJuegosComponent } from './tarjeta-juegos.component';

@NgModule({
  declarations: [TarjetaJuegosComponent],
  exports: [TarjetaJuegosComponent],
  imports: [CommonModule],
})
export class TarjetaJuegosModule {}
