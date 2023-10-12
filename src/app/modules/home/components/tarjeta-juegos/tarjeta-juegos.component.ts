import { Component, Input } from '@angular/core';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-tarjeta-juegos',
  templateUrl: './tarjeta-juegos.component.html',
  styleUrls: ['./tarjeta-juegos.component.scss'],
})
export class TarjetaJuegosComponent {
  constructor(private utilsSrv: UtilsService) {}
  @Input() img: string;
  @Input() nombre: string;
  @Input() link: string;

  entrar() {
    this.utilsSrv.routerLink(this.link);
  }
}
