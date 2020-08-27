import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private authSvc: AuthService, private rooteo: Router) {}

  ngOnInit(): void {}

  async registro() {
    const { email, password } = this.registerForm.value;

    const user = await this.authSvc.register(email, password);

    this.rooteo.navigate(['/']);
  }
}
