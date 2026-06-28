export interface Booking {
  id?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  apartmentId: string;
  apartmentName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  total: number;
  status: 'Pendiente' | 'Confirmada' | 'Cancelada' | 'Finalizada';
  paymentStatus: 'Pendiente' | 'Pagado' | 'Reembolsado';
  createdAt?: Date;
}