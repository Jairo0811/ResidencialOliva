import { inject, Injectable } from '@angular/core';
import {
  Auth as FirebaseAuth,
  GoogleAuthProvider,
  User,
  UserCredential,
  authState,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from '@angular/fire/auth';
import {
  Firestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from '@angular/fire/firestore';
import { Observable, catchError, from, map, of, shareReplay, switchMap } from 'rxjs';

import { AppUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly firebaseAuth = inject(FirebaseAuth);
  private readonly firestore = inject(Firestore);

  readonly user$: Observable<User | null> = authState(this.firebaseAuth).pipe(
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  readonly userProfile$: Observable<AppUser | null> = this.user$.pipe(
    switchMap((user) => {
      if (!user) {
        return of(null);
      }

      return from(this.getUserProfile(user.uid)).pipe(
        catchError(() => of(null)),
      );
    }),
    shareReplay({ bufferSize: 1, refCount: true }),
  );

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(
      this.firebaseAuth,
      email.trim().toLowerCase(),
      password,
    );
  }

 async loginWithGoogle() {
  const provider = new GoogleAuthProvider();

  const credential = await signInWithPopup(
    this.firebaseAuth,
    provider
  );

  const user = credential.user;
  const userReference = doc(
    this.firestore,
    `users/${user.uid}`
  );

  const snapshot = await getDoc(userReference);

  if (!snapshot.exists()) {
    await setDoc(userReference, {
      uid: user.uid,
      email: user.email ?? '',
      displayName:
        user.displayName ??
        user.email?.split('@')[0] ??
        'Usuario',
      role: 'guest',
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  } else {
    const currentProfile = snapshot.data() as AppUser;

    if (!currentProfile.displayName && user.displayName) {
      await setDoc(
        userReference,
        {
          displayName: user.displayName,
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    }
  }

  return credential;
}

  logout(): Promise<void> {
    return signOut(this.firebaseAuth);
  }

  async getUserProfile(uid: string): Promise<AppUser | null> {
    const userReference = doc(this.firestore, `users/${uid}`);
    const snapshot = await getDoc(userReference);

    if (!snapshot.exists()) {
      return null;
    }

    const data = snapshot.data() as Omit<AppUser, 'uid'>;

    return {
      ...data,
      uid,
    };
  }
}
