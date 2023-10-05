import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Alert } from 'src/app/core/models/alert';
import { User } from 'src/app/core/models/user';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });
  constructor(private userSrv: AuthService, private utilsSrv: UtilsService) {}
  ngOnInit() {}
  async signUp() {
    if (this.form.valid && this.validarPassword()) {
      await this.userSrv
        .signUp(this.form.value as User)
        .then(() => {
          Alert.mensajeConfirmacion(`Se a registrado exitosamente!!!!!!!!`);
          console.log(`registro: sin errores`);
          this.userSrv.signIn(this.form.value as User);
          this.utilsSrv.routerLink('/');
        })
        .catch((err) => {
          console.log(err);
          Alert.mensajeError(
            'Error!!!',
            'Puede ser que este correo ya este registrado!!!!'
          );
        });
    } else {
      Alert.mensajeError('Error!!!', 'Las contraseñas no coisiden!!!!');
    }
  }
  validarPassword() {
    return this.form.value.password === this.form.value.confirmPassword;
  }
}
