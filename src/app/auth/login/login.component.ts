import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private rooteo: Router) {}

  ngOnInit(): void {}

  // INICIAR SESION CON USUARIO Y CLAVE
  async iniciarSesion() {
    const { email, password } = this.loginForm.value;

    try {
      const user = await this.authSvc.login(email, password);

      if (user) {
        this.rooteo.navigate(['/']);
      }
    } catch (error) {
      console.log(error);
    }
  }

  // INICIAR SESION CON GOOGLE

  // async loginGoogle() {
  //   try {
  //     const user = await this.authSvc.loginGoogle();
  //     if (user) {
  //       this.rooteo.navigate(['/']);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
}
