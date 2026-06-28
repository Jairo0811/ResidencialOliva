import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Apartment } from '../../../core/models/apartment.model';
import { Apartments } from '../../../core/services/apartments';

@Component({
  selector: 'app-apartments-admin',
  imports: [FormsModule],
  templateUrl: './apartments-admin.html',
  styleUrl: './apartments-admin.css',
})
export class ApartmentsAdmin implements OnInit {
  private apartmentsService = inject(Apartments);

  apartments: Apartment[] = [];

  showForm = false;
  editingMode = false;

  apartmentForm: Apartment = this.getEmptyApartment();

  ngOnInit(): void {
    this.loadApartments();
  }

  loadApartments(): void {
    this.apartmentsService.getApartments().subscribe({
      next: (data) => {
        this.apartments = data;
      },
      error: (error) => {
        console.error('Error cargando apartamentos:', error);
      },
    });
  }

  getEmptyApartment(): Apartment {
    return {
      name: '',
      description: '',
      price: 0,
      guests: 1,
      bedrooms: 1,
      bathrooms: 1,
      location: '',
      status: 'Disponible',
      amenities: [],
      images: [],
      createdAt: new Date(),
    };
  }

  openCreateForm(): void {
    this.apartmentForm = this.getEmptyApartment();
    this.showForm = true;
    this.editingMode = false;
  }

  openEditForm(apartment: Apartment): void {
    this.apartmentForm = {
      ...apartment,
      amenities: [...apartment.amenities],
      images: [...apartment.images],
    };

    this.showForm = true;
    this.editingMode = true;
  }

  closeForm(): void {
    this.showForm = false;
  }

  toggleAmenity(amenity: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      this.apartmentForm.amenities.push(amenity);
      return;
    }

    this.apartmentForm.amenities = this.apartmentForm.amenities.filter(
      (item) => item !== amenity
    );
  }

  hasAmenity(amenity: string): boolean {
    return this.apartmentForm.amenities.includes(amenity);
  }

  async saveApartment(): Promise<void> {
    if (!this.apartmentForm.name || !this.apartmentForm.description) {
      alert('Completa el nombre y la descripción del apartamento.');
      return;
    }

    try {
      if (this.editingMode && this.apartmentForm.id) {
        await this.apartmentsService.updateApartment(
          this.apartmentForm.id,
          this.apartmentForm
        );
      } else {
        await this.apartmentsService.addApartment(this.apartmentForm);
      }

      this.closeForm();
    } catch (error) {
      console.error('Error guardando apartamento:', error);
    }
  }

  deleteApartment(id: string): void {
    if (!confirm('¿Desea eliminar este apartamento?')) {
      return;
    }

    this.apartmentsService
      .deleteApartment(id)
      .catch((error) => console.error(error));
  }
}