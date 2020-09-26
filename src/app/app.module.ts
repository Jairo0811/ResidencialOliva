
import { environment } from 'src/environments/environment';
// MODULOS//
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
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
// SERVICIOS
import { AuthService } from './services/auth.service';
// GOOGLE FIREBASE//
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
// PAYPAL//
import { NgxPayPalModule } from 'ngx-paypal';
import { AdminComponent } from './guards/admin/admin.component';
import { EditorComponent } from './guards/editor/editor.component';
import { SuscriptorComponent } from './guards/suscriptor/suscriptor.component';
import { AngularFirestoreModule } from '@angular/fire/firestore';

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
    AdminComponent,
    EditorComponent,
    SuscriptorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPayPalModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
