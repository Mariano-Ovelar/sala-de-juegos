import { Component } from '@angular/core';
import { Alert } from 'src/app/core/models/alert';
import { Carta } from 'src/app/core/models/cartas/carta';
import { MayorMenor } from 'src/app/core/models/mayor-menor';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.scss'],
})
export class MayorMenorComponent {
  dorso: string = '../../../../../assets/img/cartas/dorso.jpg';
  juegoMayorMenor: MayorMenor;
  cartaActual: Carta;
  siguienteCarta?: Carta;
  constructor(private utilsSrv: UtilsService) {}
  ngOnInit() {
    this.juegoMayorMenor = new MayorMenor();
    this.cartaActual = this.juegoMayorMenor.cartaActual;
    this.siguienteCarta = this.juegoMayorMenor.siguienteCarta;
  }
  compararRespuesta(respuesta: string) {
    if (this.juegoMayorMenor.compararRespuesta(respuesta)) {
      Alert.mensajeFinDelJuego(
        '¡Juego terminado!',
        `Puntaje final: ${this.juegoMayorMenor.puntaje}`,
        'Reintentar'
      ).then((res) => {
        if (res.isConfirmed) {
          this.juegoMayorMenor.reiniciarJuego();
        } else {
          this.utilsSrv.routerLink('/');
        }
      });
    }
  }
}
