import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery-admin',
  imports: [],
  templateUrl: './gallery-admin.html',
  styleUrl: './gallery-admin.css',
})
export class GalleryAdmin {
  categories = ['Todas', 'Apartamentos', 'Habitaciones', 'Piscina', 'Exterior', 'Áreas comunes'];

  images = [
    {
      id: 1,
      category: 'Apartamentos',
      url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    },

    {
      id: 2,
      category: 'Habitaciones',
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    },

    {
      id: 3,
      category: 'Piscina',
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    },

    {
      id: 4,
      category: 'Exterior',
      url: 'https://images.unsplash.com/photo-1494526585095-c41746248156',
    },
  ];
}
