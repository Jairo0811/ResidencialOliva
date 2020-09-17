import { environment } from 'src/environments/environment';
// MODULOS//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// PAYPAL//
import { NgxPayPalModule } from 'ngx-paypal';
// COMPONENTES//
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
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
    ForgotpasswordComponent,
    PaymentComponent,
    DepartamentosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
