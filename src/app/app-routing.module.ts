import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'quien-soy',
    loadChildren: () =>
      import('./modules/quien-soy/quien-soy.module').then(
        (m) => m.QuienSoyModule
      ),
  },
  {
    path: 'juegos',
    loadChildren: () =>
      import('./modules/juegos/juegos.module').then((m) => m.JuegosModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
