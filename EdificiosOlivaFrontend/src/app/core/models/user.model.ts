export type UserRole = 'admin' | 'guest';

export interface AppUser {
  uid: string;
  email: string;
  displayName?: string;
  role: UserRole;
}
