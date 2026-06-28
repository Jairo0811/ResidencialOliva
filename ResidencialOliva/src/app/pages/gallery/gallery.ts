import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  categories = ['Todos', 'Apartamentos', 'Habitaciones', 'Piscina', 'Exterior', 'Áreas comunes'];

  images = [
    'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3',
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
    'https://images.unsplash.com/photo-1600566752355-35792bedcfea',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858',
    'https://images.unsplash.com/photo-1494526585095-c41746248156',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750',
  ];

  selectedImage: string | null = null;
  selectedIndex = 0;

  openLightbox(index: number): void {
    this.selectedIndex = index;
    this.selectedImage = this.images[index];
  }

  closeLightbox(): void {
    this.selectedImage = null;
  }

  nextImage(): void {
    this.selectedIndex = (this.selectedIndex + 1) % this.images.length;
    this.selectedImage = this.images[this.selectedIndex];
  }

  previousImage(): void {
    this.selectedIndex = this.selectedIndex === 0 ? this.images.length - 1 : this.selectedIndex - 1;
    this.selectedImage = this.images[this.selectedIndex];
  }
}