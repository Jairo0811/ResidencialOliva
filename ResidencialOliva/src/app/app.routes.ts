import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Apartments } from './pages/apartments/apartments';
import { ApartmentDetail } from './pages/apartment-detail/apartment-detail';
import { Contact } from './pages/contact/contact';
import { Gallery } from './pages/gallery/gallery';
import { About } from './pages/about/about';
import { Booking } from './pages/booking/booking';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { Dashboard } from './pages/admin/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'departamentos', component: Apartments },
  { path: 'departamentos/:id', component: ApartmentDetail },
  { path: 'galeria', component: Gallery },
  { path: 'nosotros', component: About },
  { path: 'reservar', component: Booking },
  { path: 'contacto', component: Contact },
  { path: 'login', component: Login },
  { path: 'registro', component: Register },
  { path: 'admin', component: Dashboard },
  { path: '**', redirectTo: '' }
];