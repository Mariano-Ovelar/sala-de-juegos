import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AhorcadoRoutingModule } from './ahorcado-routing.module';
import { AhorcadoComponent } from './ahorcado.component';
import { LetrasModule } from './components/letras/letras.module';

@NgModule({
  declarations: [AhorcadoComponent],
  imports: [CommonModule, AhorcadoRoutingModule, LetrasModule],
})
export class AhorcadoModule {}
