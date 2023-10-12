import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoJuegosComponent } from './info-juegos.component';

@NgModule({
  declarations: [InfoJuegosComponent],
  exports: [InfoJuegosComponent],
  imports: [CommonModule],
})
export class InfoJuegosModule {}
