import { RoleValidator } from './../helpers/roleValidator';
import { User } from './../models/user';
// import { auth } from 'firebase/app';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

@Injectable({ providedIn: 'root' })
export class AuthService extends RoleValidator {
  loginGoogle() {
    throw new Error('Method not implemented.');
  }
  public user$: Observable<User>;

  constructor(public auth: AngularFireAuth, private afs: AngularFirestore) {
    super();
    this.user$ = this.auth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    );
  }
  // OLVIDE CLAVE
  async forgotPassword(email: string): Promise<void> {
    try {
      return this.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  // INICIAR SESION CON USUARIO Y CLAVE
  async login(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.updateUserData(user);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  // INICIAR SESION CON GOOGLE
  // async loginGoogle(): Promise<User> {
  //   try {
  //     const { user } = await this.auth.signInWithPopup(
  //       new auth.GoogleAuthProvider()
  //     );
  //     this.updateUserData(user);
  //     return user;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // REGISTRO
  async register(email: string, password: string): Promise<User> {
    try {
      const { user } = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
      return user;
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

  private updateUserData(user: User) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      role: 'EDITOR',
    };
    return userRef.set(data, { merge: true });
  }
}
