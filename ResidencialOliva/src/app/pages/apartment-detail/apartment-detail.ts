import { Component } from '@angular/core';

@Component({
  selector: 'app-apartment-detail',
  imports: [],
  templateUrl: './apartment-detail.html',
  styleUrl: './apartment-detail.css',
})
export class ApartmentDetail {
  apartment = {
    name: 'Apartamento Ejecutivo',
    location: 'Edificios Oliva, Bávaro - Punta Cana',
    price: 80,
    guests: 2,
    bedrooms: 1,
    bathrooms: 1,
    description:
      'Apartamento completamente equipado para disfrutar una estadía tranquila en Punta Cana. Ideal para vacaciones, viajes de negocios o escapadas familiares.',
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    ],
  };
}