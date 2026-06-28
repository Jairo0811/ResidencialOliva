import { inject, Injectable } from '@angular/core';

import {
  Auth as FirebaseAuth,
  authState,
  signInWithEmailAndPassword,
  signOut,
  User,
  GoogleAuthProvider,
  signInWithPopup,
} from '@angular/fire/auth';

import { Firestore, doc, getDoc } from '@angular/fire/firestore';

import { Observable } from 'rxjs';

import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private firebaseAuth = inject(FirebaseAuth);
  private firestore = inject(Firestore);

  readonly user$: Observable<User | null> = authState(this.firebaseAuth);

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.firebaseAuth, email, password).then((credential) => {
      console.log('====================');
      console.log('LOGIN CORRECTO');
      console.log('UID:', credential.user.uid);
      console.log('EMAIL:', credential.user.email);
      console.log('====================');

      return credential;
    });
  }

  logout() {
    return signOut(this.firebaseAuth);
  }
  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.firebaseAuth, provider);
  }
  async getUserProfile(uid: string): Promise<AppUser | null> {
    console.log('Buscando perfil...');
    console.log('UID recibido:', uid);

    try {
      const userRef = doc(this.firestore, `users/${uid}`);

      const timeout = new Promise<null>((resolve) => {
        setTimeout(() => resolve(null), 8000);
      });

      const snapshot = await Promise.race([getDoc(userRef), timeout]);

      if (snapshot === null) {
        console.error('Firestore tardó demasiado en responder.');
        return null;
      }

      console.log('¿Existe documento?', snapshot.exists());

      if (!snapshot.exists()) {
        return null;
      }

      const profile = snapshot.data() as AppUser;

      console.log('Perfil encontrado:', profile);

      return profile;
    } catch (error) {
      console.error('Error leyendo perfil:', error);
      return null;
    }
  }
}
