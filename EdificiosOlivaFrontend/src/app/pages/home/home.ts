import { DestroyRef, OnInit, Component, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

import { Apartment } from '../../core/models/apartment.model';
import { Apartments as ApartmentsService } from '../../core/services/apartments';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  private readonly apartmentsService = inject(ApartmentsService);
  private readonly destroyRef = inject(DestroyRef);

  featuredApartments: Apartment[] = [];
  loadingApartments = true;
  apartmentsError = '';

  ngOnInit(): void {
    this.apartmentsService
      .getAvailableApartments()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (apartments) => {
          this.featuredApartments = apartments.slice(0, 3);
          this.loadingApartments = false;
        },
        error: (error) => {
          console.error('Error loading featured apartments:', error);
          this.apartmentsError = 'No fue posible cargar los apartamentos destacados.';
          this.loadingApartments = false;
        },
      });
  }

  getApartmentImage(apartment: Apartment): string {
    return apartment.images?.[0] || '/images/apartment-placeholder.webp';
  }

  handleImageError(event: Event): void {
  const image = event.target as HTMLImageElement;

  if (!image.src.endsWith('apartment-placeholder.webp')) {
    image.src = '/images/apartment-placeholder.webp';
  }
}
}
