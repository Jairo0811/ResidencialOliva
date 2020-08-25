import { auth } from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  // public user: User;

  constructor(public auth: AngularFireAuth) {}

  // OLVIDE CLAVE
  async forgotPassword(email: string): Promise<void> {
    try {
      return this.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  // INICIAR SESION CON USUARIO Y CLAVE
  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  // INICIAR SESION CON GOOGLE

  async loginGoogle() {
    try {
      return this.auth.signInWithPopup(new auth.GoogleAuthProvider());
    } catch (error) {
      console.log(error);
    }
  }

  // REGISTRO
  async register(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  }

  // CERRAR SESION
  async logout() {
    try {
      await this.auth.signOut();
    } catch (error) {
      console.log(error);
    }
  }
}
