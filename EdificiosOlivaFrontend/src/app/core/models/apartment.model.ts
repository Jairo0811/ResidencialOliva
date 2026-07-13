export interface Apartment {
  id?: string;
  name: string;
  description: string;
  price: number;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  location: string;
  status: 'Disponible' | 'Ocupado' | 'Mantenimiento';
  amenities: string[];
  images: string[];
  createdAt?: Date;
}