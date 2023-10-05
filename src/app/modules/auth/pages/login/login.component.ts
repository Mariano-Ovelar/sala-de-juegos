import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Alert } from 'src/app/core/models/alert';
import { AuthService } from 'src/app/core/services/auth.service';
import { UtilsService } from 'src/app/core/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  usuarioStorage: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private userSrv: AuthService,
    private utilsSrv: UtilsService
  ) {
    this.form = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {}
  async login() {
    await this.userSrv
      .signIn(this.form.value)
      .then(() => {
        this.form.disable();
        console.log(`login: Bienvenido ${this.userSrv.user}`);
        this.utilsSrv.routerLink('/');
        Alert.mensajeConfirmacion(
          `Bienvenido ${this.userSrv.user.displayName}!!!!!!!!`
        );
      })
      .catch((err: any) => {
        console.log(err);
        Alert.mensajeError(
          'Error al tratar de entrar:',
          'Revise si el correo o la contraseña estan bien!!!!!',
          '<p>Esta registrado? en caso de no tener cuenta tocar <a href="/auth/sign-up">aca</a><p>'
        );
      });
  }

  cargarUsuario() {
    this.form.get('email')?.setValue(this.usuario.email);
    this.form.get('password')?.setValue(this.usuario.passwod);
  }

  usuario = {
    email: 'marianoovelar200@gmail.com',
    passwod: '123456',
  };
}
