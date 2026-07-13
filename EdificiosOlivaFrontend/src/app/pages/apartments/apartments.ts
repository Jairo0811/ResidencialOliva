import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { Apartment } from '../../core/models/apartment.model';
import { Apartments as ApartmentsService } from '../../core/services/apartments';

@Component({
  selector: 'app-apartments',
  imports: [RouterLink],
  templateUrl: './apartments.html',
  styleUrl: './apartments.css',
})
export class Apartments implements OnInit {
  private readonly apartmentsService = inject(ApartmentsService);
  private readonly destroyRef = inject(DestroyRef);

  apartments: Apartment[] = [];
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.apartmentsService
      .getAvailableApartments()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (apartments) => {
          this.apartments = apartments;
          this.loading = false;
        },
        error: (error) => {
          console.error('Error loading apartments:', error);
          this.errorMessage = 'No fue posible cargar los apartamentos disponibles.';
          this.loading = false;
        },
      });
  }

  getApartmentImage(apartment: Apartment): string {
  if (!apartment.images || apartment.images.length === 0) {
    return '/images/apartment-placeholder.webp';
  }

  return apartment.images[0];
}

handleImageError(event: Event): void {
  const img = event.target as HTMLImageElement;

  if (!img.src.endsWith('apartment-placeholder.webp')) {
    img.src = '/images/apartment-placeholder.webp';
  }
}
}
