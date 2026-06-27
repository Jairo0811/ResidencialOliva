export type Roles = 'SUSCRIPTOR' | 'EDITOR' | 'ADMIN';

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  password?: string;
  photoURL: string;
  role?: Roles;
}
