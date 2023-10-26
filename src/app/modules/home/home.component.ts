import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  juegos = [
    {
      img: '../../../assets/img/imagen-juegos/ahorcado.png',
      nombre: 'AHORCADO',
      link: '/juegos/ahorcado',
    },
    {
      img: '../../../assets/img/imagen-juegos/mayor-menor.png',
      nombre: 'MAYOR O MENOR',
      link: '/juegos/mayor-menor',
    },
    {
      img: '../../../assets/img/preguntados/images.png',
      nombre: 'PREGUNTADOS',
      link: '/juegos/preguntados',
    },
    {
      img: '../../../assets/img/imagen-juegos/black-jack.png',
      nombre: 'BLACK JACK',
      link: '/juegos/black-jack',
    },
  ];
}
