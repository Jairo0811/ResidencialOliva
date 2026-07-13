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
  this.loading = true;

  try {
    console.log('1. Antes del login');

    const credential = await this.authService.login(
      this.email.trim(),
      this.password
    );

    console.log('2. Login terminado');
    console.log(credential);

    console.log('3. Antes de getUserProfile');

    const profile = await this.authService.getUserProfile(
      credential.user.uid
    );

    console.log('4. Después de getUserProfile');
    console.log(profile);

    if (!profile) {
      this.errorMessage = 'No existe perfil.';
      return;
    }

    if (profile.role !== 'admin') {
      this.errorMessage = 'No eres administrador.';
      return;
    }

    console.log('5. Navegando...');

    await this.router.navigate(['/admin']);

    console.log('6. Navegación completada');
  } catch (e) {
    console.error(e);
  } finally {
    this.loading = false;
  }
}

private isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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
