import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DashboardStat {
  title: string;
  value: string | number;
  icon: string;
}

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  readonly stats: DashboardStat[] = [
    {
      title: 'Apartamentos',
      value: 12,
      icon: 'bi-building',
    },
    {
      title: 'Reservas',
      value: 48,
      icon: 'bi-calendar-check',
    },
    {
      title: 'Clientes',
      value: 34,
      icon: 'bi-people-fill',
    },
    {
      title: 'Ingresos',
      value: 'US$15,240',
      icon: 'bi-cash-stack',
    },
  ];
}