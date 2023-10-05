import { Component } from '@angular/core';
import { QuienSoyService } from './services/quien-soy.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.scss'],
})
export class QuienSoyComponent {
  datosPersona: any = {};
  constructor(private qSSrv: QuienSoyService) {}
  ngOnInit() {
    this.llenarData();
  }
  llenarData() {
    this.qSSrv.getGit().subscribe((data) => {
      this.datosPersona = data;
    });
  }
}
