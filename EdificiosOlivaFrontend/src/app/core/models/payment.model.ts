export interface Payment {
  id?: string;
  bookingId: string;
  customerName: string;
  apartmentName: string;
  amount: number;
  method: 'PayPal' | 'Transferencia' | 'Efectivo';
  status: 'Pagado' | 'Pendiente' | 'Reembolsado';
  transactionId?: string;
  createdAt?: Date;
}