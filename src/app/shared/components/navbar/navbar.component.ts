import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  verNavLink: boolean = true;
  showInfoBox: boolean = false;

  toggleInfoBox(): void {
    this.showInfoBox = !this.showInfoBox;
  }
  constructor(public authSrv: AuthService, private utilsSrv: UtilsService) {}

  ngOnInit() {}
  mostrarNavLink() {
    this.verNavLink = !this.verNavLink;
  }

  logout() {
    this.authSrv.logout().then(() => {
      this.toggleInfoBox();
      this.utilsSrv.routerLink('/auth/login');
    });
  }
}
