import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Route, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  protected title;
  protected placeholder_username;
  protected placeholder_password;
  protected submit_text;
  protected forgot_password_text;
  protected signin_text;

  protected viewLogin: number;

  protected titleRecovery;
  protected securityText;
  protected emailText;
  protected placeholderemail;
  protected placeholderback;
  protected placeholderNext;

  protected emailSendText;
  protected seeInboxText;
  protected time;
  protected placeholderCode;
  protected placeholderResend;

  protected succefulIdenty;
  protected inputNewPass;
  protected inputNewPassConfirm;
  protected placeholderPassConfirm;
  protected placeholderSave;
  protected error;

  protected formLogin: FormGroup;

  constructor(private userService: UserServiceService, private router: Router, private formBuilder: FormBuilder) {
    this.viewLogin = 0;
    this.title = "Iniciar Sesión";
    this.placeholder_username = "Nombre de usuario o correo";
    this.placeholder_password = "Contraseña";
    this.submit_text = "Entrar";
    this.forgot_password_text = "¿Olvidé mi contraseña?";
    this.signin_text = "¿No tienes cuenta? Regístrate";

    this.titleRecovery = "Recuperación de la Cuenta";
    this.securityText = "Para proteger tu cuenta, SIGEAVI quiere asegurarse  de que realmente seas tú la persona que intenta acceder";
    this.emailText = "A continuación escribe el correo electrónico de tu cuenta:";
    this.placeholderemail = "Correo Electrónico";
    this.placeholderback = "atrás";
    this.placeholderNext = "continuar";

    this.emailSendText = "Revisa tu correo electrónico.";
    this.seeInboxText = "SIGEAVI te envió un código de confirmación a tu bandeja de entrada, si no aparece revisa la carpeta de SPAM.";
    this.time = "Tiempo de expiración 05:00";
    this.placeholderCode = "Código de confirmación";
    this.placeholderResend = "reenviar";

    this.succefulIdenty = "Hemos confirmado tu identidad, A continuación restaura tu contraseña";
    this.inputNewPass = "Digita una nueva contraseña";
    this.inputNewPassConfirm = "Confirma tu nueva contraseña";
    this.placeholderPassConfirm = "Confirmación de contraseña";
    this.placeholderSave = "Guardar";
    this.error = false;

  }
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  changeViewLogin(index: number) {
    this.viewLogin = index;
  }

  login() {
    this.userService.loginWithEmailAndPassword(this.formLogin.value['email'], this.formLogin.value['password'])
      .then(() => {
        this.error = false;
        location.href = "/menu"
      })
      .catch(() => {
        this.error = true;
        alert("Usuario o contraseña incorrectos")
      });
    }
    
    loginWithGoogle() {
      this.userService.loginWithGoogle()
      .then((response) => {
        this.error = false;
        if (this.validateUserRegistered(response.user.email)) {
          location.href = "/menu"
        } else {
          this.router.navigate(['/home/registerWithGoogle', response.user.email, response.user.displayName]);
        }
      })
      .catch(() => {
        this.error = true;
      });
    }
    
    loginWithFacebook() {
      this.userService.loginWithFacebook()
      .then((response) => {
        this.error = false;
        if (this.validateUserRegistered(response.user.email)) {
          location.href = "/menu"
        } else {
          this.router.navigate(['/home/registerWithFacebook', response.user.email, response.user.displayName]);
        }
      })
      .catch(() => {
        this.error = true;
      });
  }

  validateUserRegistered(email: string): boolean {
    return this.userService.getUsersRegistered().find(element => element == email) != undefined;
  }

}
