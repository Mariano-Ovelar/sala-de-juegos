import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlackJackRoutingModule } from './black-jack-routing.module';
import { BlackJackComponent } from './black-jack.component';


@NgModule({
  declarations: [
    BlackJackComponent
  ],
  imports: [
    CommonModule,
    BlackJackRoutingModule
  ]
})
export class BlackJackModule { }
