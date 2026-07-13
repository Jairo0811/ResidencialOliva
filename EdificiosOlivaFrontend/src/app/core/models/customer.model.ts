export interface Customer {
  id?: string;
  name: string;
  email: string;
  phone: string;
  bookings: number;
  status: 'Activo' | 'Inactivo';
  createdAt?: Date;
}