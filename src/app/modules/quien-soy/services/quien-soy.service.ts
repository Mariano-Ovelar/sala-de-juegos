import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UtilsService } from 'src/app/core/services/utils.service';
@Injectable({
  providedIn: 'root',
})
export class QuienSoyService {
  private urlApiGit: string = 'https://api.github.com/users/Mariano-Ovelar';
  constructor(private utilsSrv: UtilsService) {}

  getGit(): Observable<any> {
    return this.utilsSrv.getApiData(this.urlApiGit);
  }
}
