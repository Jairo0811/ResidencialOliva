import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of, switchMap } from 'rxjs';

import { Apartment } from '../../core/models/apartment.model';
import { Apartments as ApartmentsService } from '../../core/services/apartments';

@Component({
  selector: 'app-apartment-detail',
  imports: [RouterLink],
  templateUrl: './apartment-detail.html',
  styleUrl: './apartment-detail.css',
})
export class ApartmentDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly apartmentsService = inject(ApartmentsService);
  private readonly destroyRef = inject(DestroyRef);

  apartment: Apartment | null = null;
  loading = true;
  errorMessage = '';

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          const id = params.get('id');

          if (!id) {
            this.errorMessage = 'El apartamento solicitado no es válido.';
            return of(null);
          }

          return this.apartmentsService.getApartmentById(id).pipe(
            catchError((error) => {
              console.error('Error loading apartment:', error);
              this.errorMessage = 'No fue posible cargar la información del apartamento.';
              return of(null);
            }),
          );
        }),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe((apartment) => {
        this.apartment = apartment;

        if (!apartment && !this.errorMessage) {
          this.errorMessage = 'El apartamento solicitado no existe.';
        }

        this.loading = false;
      });
  }

  getMainImage(apartment: Apartment): string {
    return apartment.images?.[0] || '/images/apartment-placeholder.webp';
  }

  getGuestOptions(apartment: Apartment): number[] {
    return Array.from({ length: Math.max(apartment.guests, 1) }, (_, index) => index + 1);
  }

  handleImageError(event: Event): void {
  const image = event.target as HTMLImageElement;

  if (!image.src.endsWith('apartment-placeholder.webp')) {
    image.src = '/images/apartment-placeholder.webp';
  }
}
}
