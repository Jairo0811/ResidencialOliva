import { Component } from '@angular/core';

@Component({
  selector: 'app-apartments-admin',
  imports: [],
  templateUrl: './apartments-admin.html',
  styleUrl: './apartments-admin.css',
})
export class ApartmentsAdmin {
  showForm = false;
  editingMode = false;

  openCreateForm(): void {
    this.showForm = true;
    this.editingMode = false;
  }

  openEditForm(): void {
    this.showForm = true;
    this.editingMode = true;
  }

  closeForm(): void {
    this.showForm = false;
  }
  apartments = [
    {
      id: 1,
      name: 'Apartamento Ejecutivo',
      price: 80,
      guests: 2,
      status: 'Disponible',
    },

    {
      id: 2,
      name: 'Apartamento Familiar',
      price: 120,
      guests: 4,
      status: 'Ocupado',
    },

    {
      id: 3,
      name: 'Estadía Premium',
      price: 150,
      guests: 6,
      status: 'Disponible',
    },
  ];
}
