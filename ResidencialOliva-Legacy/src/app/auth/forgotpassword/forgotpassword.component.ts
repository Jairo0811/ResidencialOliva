import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css'],
})
export class ForgotpasswordComponent implements OnInit {
  userEmail = new FormControl('');

  constructor(private authSvc: AuthService, private rooteo: Router) {}

  ngOnInit(): void {}

  async forgotPassword() {
    try {
      const email = this.userEmail.value;
      await this.authSvc.forgotPassword(email);
      window.alert('Revisa tu correo');
      this.rooteo.navigate(['/login']);
    } catch (error) {}
  }
}
