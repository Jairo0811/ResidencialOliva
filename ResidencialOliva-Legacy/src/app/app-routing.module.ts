import { CanSuscriptorGuard } from './guards/suscriptor.guard';
import { CanAdminGuard } from './guards/admin.guard';
import { SuscriptorComponent } from './guards/suscriptor/suscriptor.component';
import { EditorComponent } from './guards/editor/editor.component';
import { AdminComponent } from './guards/admin/admin.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { ForgotpasswordComponent } from './auth/forgotpassword/forgotpassword.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanEditGuard } from './guards/can-edit.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'departamentos', component: DepartamentosComponent },
  { path: 'admin', component: AdminComponent, canActivate: [CanAdminGuard] },
  { path: 'editor', component: EditorComponent, canActivate: [CanEditGuard] },
  {
    path: 'suscriptor',
    component: SuscriptorComponent,
    canActivate: [CanSuscriptorGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
