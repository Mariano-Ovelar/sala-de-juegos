import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';

const routes: Routes = [
  {
    path: '',
    component: JuegosComponent,
    children: [
      {
        path: 'ahorcado',
        loadChildren: () =>
          import('./pages/ahorcado/ahorcado.module').then(
            (m) => m.AhorcadoModule
          ),
      },
      {
        path: 'mayor-menor',
        loadChildren: () =>
          import('./pages/mayor-menor/mayor-menor.module').then(
            (m) => m.MayorMenorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuegosRoutingModule {}
