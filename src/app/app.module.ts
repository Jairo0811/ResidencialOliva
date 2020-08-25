import { environment } from 'src/environments/environment';
// MODULOS//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPayPalModule } from 'ngx-paypal';
import { NgbModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { GoogleMapsModule } from '@angular/google-maps';
// COMPONENTES//
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
// GOOGLE FIREBASE//
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
// SERVICIOS
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    NgbModule,
    NgbAlertModule,
    GoogleMapsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
