import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';

import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CanEditGuard implements CanActivate {
  constructor(private authSvc: AuthService) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authSvc.user$.pipe(
      take(1),
      map((user) => user && this.authSvc.isEditor(user)),
      tap((canEdit) => {
        if (!canEdit) {
          window.alert('Acceso denegado. Necesitas tener permisos para editar.');
        }
      })
    );
  }
}
