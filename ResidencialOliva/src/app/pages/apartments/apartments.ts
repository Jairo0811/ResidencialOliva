import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-apartments',
  imports: [RouterLink],
  templateUrl: './apartments.html',
  styleUrl: './apartments.css',
})
export class Apartments {
  apartments = [
    {
      id: 1,
      name: 'Apartamento Ejecutivo',
      image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      price: 80,
      guests: 2,
      bedrooms: 1,
      bathrooms: 1,
      location: 'Bávaro',
      description: 'Ideal para parejas, viajeros solos o estancias cortas.',
    },
    {
      id: 2,
      name: 'Apartamento Familiar',
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2',
      price: 120,
      guests: 4,
      bedrooms: 2,
      bathrooms: 2,
      location: 'El Ejecutivo',
      description: 'Amplio, cómodo y perfecto para familias.',
    },
    {
      id: 3,
      name: 'Estadía Premium',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227',
      price: 150,
      guests: 5,
      bedrooms: 2,
      bathrooms: 2,
      location: 'Punta Cana',
      description: 'Pensado para estancias largas o vacaciones familiares.',
    },
  ];
}