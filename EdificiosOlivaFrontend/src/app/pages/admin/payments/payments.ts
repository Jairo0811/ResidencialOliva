import { Component } from '@angular/core';

@Component({
  selector: 'app-payments',
  imports: [],
  templateUrl: './payments.html',
  styleUrl: './payments.css',
})
export class Payments {

  payments = [

    {
      id:'PAY-1001',
      customer:'Juan Pérez',
      apartment:'Apartamento Ejecutivo',
      amount:240,
      method:'PayPal',
      status:'Pagado'
    },

    {
      id:'PAY-1002',
      customer:'María López',
      apartment:'Apartamento Familiar',
      amount:480,
      method:'Transferencia',
      status:'Pendiente'
    },

    {
      id:'PAY-1003',
      customer:'Carlos Díaz',
      apartment:'Estadía Premium',
      amount:750,
      method:'PayPal',
      status:'Reembolsado'
    }

  ];

}