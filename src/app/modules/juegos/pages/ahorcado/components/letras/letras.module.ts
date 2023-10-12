import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LetrasComponent } from './letras.component';

@NgModule({
  declarations: [LetrasComponent],
  exports: [LetrasComponent],
  imports: [CommonModule],
})
export class LetrasModule {}
