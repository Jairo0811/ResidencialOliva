import { Component} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {


  public user$: Observable<any> = this.authSvc.auth.user;
  constructor(private authSvc: AuthService, private rooteo: Router) {}



  async cerrarSesion() {
    try {
      await this.authSvc.logout();
      this.rooteo.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }
}
