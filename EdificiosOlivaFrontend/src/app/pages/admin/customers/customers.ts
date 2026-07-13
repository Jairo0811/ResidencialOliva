import { Component } from '@angular/core';

@Component({
  selector: 'app-customers',
  imports: [],
  templateUrl: './customers.html',
  styleUrl: './customers.css',
})
export class Customers {

  customers = [

    {
      id:1,
      name:'Juan Pérez',
      email:'juan@email.com',
      phone:'+1 829-555-1001',
      bookings:4,
      status:'Activo'
    },

    {
      id:2,
      name:'María López',
      email:'maria@email.com',
      phone:'+1 829-555-1002',
      bookings:2,
      status:'Activo'
    },

    {
      id:3,
      name:'Carlos Díaz',
      email:'carlos@email.com',
      phone:'+1 829-555-1003',
      bookings:1,
      status:'Inactivo'
    }

  ];

}