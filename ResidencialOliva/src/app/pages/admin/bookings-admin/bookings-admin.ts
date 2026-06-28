import { Component } from '@angular/core';

@Component({
  selector: 'app-bookings-admin',
  imports: [],
  templateUrl: './bookings-admin.html',
  styleUrl: './bookings-admin.css',
})
export class BookingsAdmin {

  bookings = [

    {
      id: 1001,
      customer: 'Juan Pérez',
      apartment: 'Apartamento Ejecutivo',
      checkIn: '12/07/2026',
      checkOut: '15/07/2026',
      total: 240,
      status: 'Confirmada'
    },

    {
      id: 1002,
      customer: 'María López',
      apartment: 'Apartamento Familiar',
      checkIn: '18/07/2026',
      checkOut: '22/07/2026',
      total: 480,
      status: 'Pendiente'
    },

    {
      id: 1003,
      customer: 'Carlos Díaz',
      apartment: 'Estadía Premium',
      checkIn: '02/08/2026',
      checkOut: '07/08/2026',
      total: 750,
      status: 'Cancelada'
    }

  ];

}