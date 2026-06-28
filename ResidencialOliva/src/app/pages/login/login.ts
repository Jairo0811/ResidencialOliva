import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  email = '';
  password = '';
  showPassword = false;
  loading = false;
  errorMessage = '';

  async login(): Promise<void> {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Completa el correo y la contraseña.';
      return;
    }

    try {
      this.loading = true;

      const credential = await this.authService.login(this.email, this.password);

      const profile = await this.authService.getUserProfile(credential.user.uid);

      if (profile?.role === 'admin') {
        await this.router.navigate(['/admin']);
        return;
      }
    } catch (error) {
      console.error('ERROR LOGIN:', error);
      this.errorMessage = 'No se pudo iniciar sesión. Revisa la consola.';
    } finally {
      this.loading = false;
    }
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

async loginGoogle(): Promise<void> {
  this.errorMessage = '';

  try {
    this.loading = true;

    const credential = await this.authService.loginWithGoogle();
    const profile = await this.authService.getUserProfile(credential.user.uid);

    if (profile?.role === 'admin') {
      window.location.href = '/admin';
      return;
    }

    window.location.href = '/mi-cuenta';
  } catch (error) {
    console.error('ERROR GOOGLE LOGIN:', error);
    this.errorMessage = 'No se pudo iniciar sesión con Google.';
  } finally {
    this.loading = false;
  }
}
}
