import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackJackComponent } from './black-jack.component';

const routes: Routes = [
  {
    path: '',
    component: BlackJackComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlackJackRoutingModule {}
