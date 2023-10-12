import { Component } from '@angular/core';

@Component({
  selector: 'app-info-juegos',
  templateUrl: './info-juegos.component.html',
  styleUrls: ['./info-juegos.component.scss'],
})
export class InfoJuegosComponent {
  infoJuegos = [
    /*  {
      nombre: 'Ahorcado',
      info: 'El jugador seleciona una letra y si la letra se encuentra en la palabra oculta está la anota en el lugar que corresponda de las rayas que ha puesto previamente. Si la letra no está dibuja una parte del cuerpo del ahorcado. El muñeco que se va dibujando tiene 6 partes, cabeza, cuerpo, dos brazos y dos piernas por lo que el jugador tiene 6 opciones de fallar. Ganas si consigue descifrar la palabra antes de que el muñeco este completo.',
      img: '../../../../../assets/img/imagen-juegos/ahorcado.png',
    },
    {
      nombre: 'Mayo o menor',
      info: '',
      img: '../../../../../assets/img/imagen-juegos/mayor-menor.png',
    },
    {
      nombre: 'Preguntado',
      info: '',
      img: '../../../../../assets/img/imagen-juegos/preguntados.png',
    }, */
    {
      nombre: 'Black jack',
      info: 'El objetivo de cualquier mano de blackjack es derrotar a la banca. Para esto, debes tener una mano que puntúe más alto que la mano de la banca, pero que no supere los 21 puntos en valor total. O bien, puedes ganar con una puntuación inferior a 22 cuando la mano de la banca supera los 21 puntos.',
      img: '../../../../../assets/img/imagen-juegos/black-jack.png',
    },
  ];
}
