import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JuegosComponent } from './juegos.component';
import { BlackJackModule } from './pages/black-jack/black-jack.module';

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
      {
        path: 'preguntados',
        loadChildren: () =>
          import('./pages/preguntados/preguntados.module').then(
            (m) => m.PreguntadosModule
          ),
      },
      {
        path: 'black-jack',
        loadChildren: () =>
          import('./pages/black-jack/black-jack.module').then(
            (m) => m.BlackJackModule
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
